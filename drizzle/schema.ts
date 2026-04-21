import { int, json, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Projects table for the portfolio section.
 * Stores all project data that was previously hardcoded in Portfolio.tsx.
 */
export const projects = mysqlTable("projects", {
  id: int("id").autoincrement().primaryKey(),
  /** Short identifier like "T-06", "T-07", etc. */
  projectId: varchar("projectId", { length: 16 }).notNull().unique(),
  name: varchar("name", { length: 255 }).notNull(),
  subtitle: varchar("subtitle", { length: 500 }).notNull(),
  domain: varchar("domain", { length: 100 }).notNull(),
  timeline: varchar("timeline", { length: 255 }).notNull(),
  /** JSON array of tech stack strings */
  tech: json("tech").$type<string[]>().notNull(),
  description: text("description").notNull(),
  mvpScope: text("mvpScope").notNull(),
  endGoal: text("endGoal").notNull(),
  /** Team type: innovation or launch */
  teamType: mysqlEnum("teamType", ["innovation", "launch"]).default("innovation").notNull(),
  /** Display order for sorting */
  sortOrder: int("sortOrder").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Project = typeof projects.$inferSelect;
export type InsertProject = typeof projects.$inferInsert;
