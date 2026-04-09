import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the db module so we don't need a real database connection
vi.mock("./db", () => ({
  getAllProjects: vi.fn(),
  getUserByOpenId: vi.fn(),
  upsertUser: vi.fn(),
}));

import { getAllProjects } from "./db";

const mockGetAllProjects = vi.mocked(getAllProjects);

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

const sampleProjects = [
  {
    id: 1,
    projectId: "T-06",
    name: "AI/ML Pipeline Security",
    subtitle: "End-to-End Protection for the Modern AI Lifecycle",
    domain: "Security",
    timeline: "10 months (scoped to MVP)",
    tech: ["TensorFlow", "PyTorch", "scikit-learn"],
    description: "Comprehensive security framework protecting AI/ML systems.",
    mvpScope: "Working adversarial defense and inference monitoring prototype.",
    endGoal: "Making AI security accessible to ML engineers.",
    sortOrder: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    projectId: "T-07",
    name: "Indoor Navigation",
    subtitle: "Visual Intelligence Without Infrastructure",
    domain: "Navigation",
    timeline: "8 weeks",
    tech: ["OpenCV", "A* Pathfinding"],
    description: "Mobile indoor navigation using only the phone's camera.",
    mvpScope: "Single-building prototype using OpenCV-based image matching.",
    endGoal: "Users select a room and receive step-by-step visual directions.",
    sortOrder: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

describe("projects.list", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns all projects from the database", async () => {
    mockGetAllProjects.mockResolvedValue(sampleProjects);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.projects.list();

    expect(result).toHaveLength(2);
    expect(result[0].projectId).toBe("T-06");
    expect(result[0].name).toBe("AI/ML Pipeline Security");
    expect(result[1].projectId).toBe("T-07");
    expect(result[1].name).toBe("Indoor Navigation");
    expect(mockGetAllProjects).toHaveBeenCalledOnce();
  });

  it("returns an empty array when no projects exist", async () => {
    mockGetAllProjects.mockResolvedValue([]);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.projects.list();

    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
    expect(mockGetAllProjects).toHaveBeenCalledOnce();
  });

  it("returns projects with correct tech stack arrays", async () => {
    mockGetAllProjects.mockResolvedValue(sampleProjects);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.projects.list();

    expect(result[0].tech).toEqual(["TensorFlow", "PyTorch", "scikit-learn"]);
    expect(result[1].tech).toEqual(["OpenCV", "A* Pathfinding"]);
  });

  it("is accessible without authentication (public procedure)", async () => {
    mockGetAllProjects.mockResolvedValue(sampleProjects);

    // Context with no user (unauthenticated)
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    // Should not throw
    const result = await caller.projects.list();
    expect(result).toHaveLength(2);
  });
});
