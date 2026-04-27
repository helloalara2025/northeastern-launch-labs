/**
 * db.ts — Database Access Layer (Model Layer).
 *
 * This file acts as the **Model** in an MVC-style architecture.
 * All database queries are encapsulated here so that:
 *   - Controllers (routers.ts) never touch Drizzle directly.
 *   - Query logic is reusable across multiple procedures.
 *   - Database connection is lazily initialized and fault-tolerant.
 *
 * Entity groups:
 *   - Users:    upsertUser, getUserByOpenId
 *   - Projects: getAllProjects, getProjectsByTeamType, getProjectById,
 *               getProjectByProjectId, insertProject, insertManyProjects
 */
import { eq, asc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, InsertProject, users, projects } from "../drizzle/schema";
import { ENV } from './_core/env';

// ─────────────────────────────────────────────────────────────
// Connection
// ─────────────────────────────────────────────────────────────

let _db: ReturnType<typeof drizzle> | null = null;

/**
 * Lazily create the Drizzle ORM instance.
 * Returns null if DATABASE_URL is not set (e.g. local dev without DB).
 */
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

// ─────────────────────────────────────────────────────────────
// User Queries
// ─────────────────────────────────────────────────────────────

/**
 * Create or update a user record.
 * Uses MySQL ON DUPLICATE KEY UPDATE to handle both cases in one query.
 * Automatically promotes the site owner to admin role.
 */
export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = { openId: user.openId };
    const updateSet: Record<string, unknown> = {};

    // Copy nullable text fields if provided
    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    // Timestamp & role handling
    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

/** Fetch a single user by their OAuth open ID. */
export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

// ─────────────────────────────────────────────────────────────
// Project Queries
// ─────────────────────────────────────────────────────────────

/** Fetch all projects, ordered by sortOrder then id. */
export async function getAllProjects() {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get projects: database not available");
    return [];
  }
  return db.select().from(projects).orderBy(asc(projects.sortOrder), asc(projects.id));
}

/** Fetch projects filtered by team type ("innovation" or "launch"). */
export async function getProjectsByTeamType(teamType: "innovation" | "launch") {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(projects)
    .where(eq(projects.teamType, teamType))
    .orderBy(asc(projects.sortOrder), asc(projects.id));
}

/** Fetch a single project by its auto-increment numeric ID. */
export async function getProjectById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(projects).where(eq(projects.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

/** Fetch a single project by its human-readable project ID (e.g. "LL-001"). */
export async function getProjectByProjectId(projectId: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(projects).where(eq(projects.projectId, projectId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

/** Insert a single project record. */
export async function insertProject(project: InsertProject) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.insert(projects).values(project);
}

/** Bulk-insert multiple project records in a single query. */
export async function insertManyProjects(projectList: InsertProject[]) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  if (projectList.length === 0) return;
  await db.insert(projects).values(projectList);
}
