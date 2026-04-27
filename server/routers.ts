/**
 * routers.ts — tRPC Router Definitions (Controller Layer).
 *
 * This file acts as the **Controller** in an MVC-style architecture:
 *   - Model:      drizzle/schema.ts  (data shape) + server/db.ts (queries)
 *   - Controller: server/routers.ts  (request handling, validation, orchestration)
 *   - View:       client/src/pages/* (React components consuming tRPC hooks)
 *
 * Each router groups related procedures by domain:
 *   - auth:     Session management (login state, logout)
 *   - projects: CRUD operations on the project database
 *
 * Procedures use Zod schemas for input validation and delegate
 * data access to helpers in server/db.ts to keep this file lean.
 */
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { getAllProjects, getProjectsByTeamType, getProjectById } from "./db";
import { z } from "zod";

export const appRouter = router({
  /** Built-in system procedures (notifications, health checks). */
  system: systemRouter,

  /**
   * Auth Router — Session & identity management.
   *
   * - me:     Returns the current authenticated user (or null).
   * - logout: Clears the session cookie and ends the session.
   */
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  /**
   * Projects Router — Project data access.
   *
   * - list:    Fetch all projects, optionally filtered by team type.
   * - getById: Fetch a single project by its numeric ID.
   */
  projects: router({
    list: publicProcedure
      .input(z.object({ teamType: z.enum(["innovation", "launch"]).optional() }).optional())
      .query(async ({ input }) => {
        if (input?.teamType) {
          return getProjectsByTeamType(input.teamType);
        }
        return getAllProjects();
      }),

    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        const project = await getProjectById(input.id);
        if (!project) {
          throw new Error("Project not found");
        }
        return project;
      }),
  }),
});

/** Exported type for end-to-end type safety with the tRPC client. */
export type AppRouter = typeof appRouter;
