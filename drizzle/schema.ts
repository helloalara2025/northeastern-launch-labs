/**
 * schema.ts — Database Schema Definitions (Data Model Layer).
 *
 * Defines the shape of every table in the MySQL database using Drizzle ORM.
 * This is the single source of truth for the data model — all queries in
 * server/db.ts and all tRPC procedures in server/routers.ts derive their
 * types from the exports below.
 *
 * Tables:
 *   - users:    Authenticated users (via Manus OAuth)
 *   - projects: Portfolio projects displayed on the site
 *
 * After editing this file, run `pnpm db:push` to sync the remote database.
 */
import { int, json, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

// ─────────────────────────────────────────────────────────────
// Users
// ─────────────────────────────────────────────────────────────

/**
 * Core user table backing the authentication flow.
 *
 * Each row represents a user who has signed in via Manus OAuth.
 * The `role` field supports basic RBAC: "user" (default) and "admin".
 * The site owner is auto-promoted to admin on first login (see db.ts).
 */
export const users = mysqlTable("users", {
  /** Auto-increment primary key. Used for internal relations. */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  /** Display name from OAuth profile. */
  name: text("name"),
  /** Email address from OAuth profile. */
  email: varchar("email", { length: 320 }),
  /** OAuth login method (e.g. "google", "github"). */
  loginMethod: varchar("loginMethod", { length: 64 }),
  /** Role-based access: "user" or "admin". */
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// ─────────────────────────────────────────────────────────────
// Projects
// ─────────────────────────────────────────────────────────────

/**
 * Projects table for the portfolio section.
 *
 * Each row is a team project displayed on the site. Projects are
 * categorized by teamType ("innovation" or "launch") and sorted
 * by sortOrder for display ordering.
 */
export const projects = mysqlTable("projects", {
  /** Auto-increment primary key. */
  id: int("id").autoincrement().primaryKey(),
  /** Human-readable ID like "T-06", "T-07". Shown in the UI. */
  projectId: varchar("projectId", { length: 16 }).notNull().unique(),
  /** Project name. */
  name: varchar("name", { length: 255 }).notNull(),
  /** Short one-line description shown on project cards. */
  subtitle: varchar("subtitle", { length: 500 }).notNull(),
  /** Domain category (e.g. "AI/ML", "Mobile", "Web"). */
  domain: varchar("domain", { length: 100 }).notNull(),
  /** Timeline string (e.g. "Spring 2026"). */
  timeline: varchar("timeline", { length: 255 }).notNull(),
  /** JSON array of technology names used in the project. */
  tech: json("tech").$type<string[]>().notNull(),
  /** Full project description / overview. */
  description: text("description").notNull(),
  /** MVP scope — what the team aims to deliver first. */
  mvpScope: text("mvpScope").notNull(),
  /** End goal — the long-term vision for the project. */
  endGoal: text("endGoal").notNull(),
  /** Team type: "innovation" (original ideas) or "launch" (startup partnerships). */
  teamType: mysqlEnum("teamType", ["innovation", "launch"]).default("innovation").notNull(),
  /** Display order for sorting in the UI. Lower numbers appear first. */
  sortOrder: int("sortOrder").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Project = typeof projects.$inferSelect;
export type InsertProject = typeof projects.$inferInsert;
