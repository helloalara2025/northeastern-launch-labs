import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the db module so we don't need a real database connection
vi.mock("./db", () => ({
  getAllProjects: vi.fn(),
  getProjectsByTeamType: vi.fn(),
  getProjectById: vi.fn(),
  getUserByOpenId: vi.fn(),
  upsertUser: vi.fn(),
}));

import { getAllProjects, getProjectsByTeamType, getProjectById } from "./db";

const mockGetAllProjects = vi.mocked(getAllProjects);
const mockGetProjectsByTeamType = vi.mocked(getProjectsByTeamType);
const mockGetProjectById = vi.mocked(getProjectById);

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
    teamType: "innovation" as const,
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
    teamType: "innovation" as const,
    sortOrder: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

describe("projects.list", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns all projects when no teamType filter is provided", async () => {
    mockGetAllProjects.mockResolvedValue(sampleProjects);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.projects.list();

    expect(result).toHaveLength(2);
    expect(result[0].projectId).toBe("T-06");
    expect(result[1].projectId).toBe("T-07");
    expect(mockGetAllProjects).toHaveBeenCalledOnce();
    expect(mockGetProjectsByTeamType).not.toHaveBeenCalled();
  });

  it("returns filtered projects when teamType is innovation", async () => {
    mockGetProjectsByTeamType.mockResolvedValue(sampleProjects);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.projects.list({ teamType: "innovation" });

    expect(result).toHaveLength(2);
    expect(mockGetProjectsByTeamType).toHaveBeenCalledWith("innovation");
    expect(mockGetAllProjects).not.toHaveBeenCalled();
  });

  it("returns filtered projects when teamType is launch", async () => {
    mockGetProjectsByTeamType.mockResolvedValue([]);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.projects.list({ teamType: "launch" });

    expect(result).toHaveLength(0);
    expect(mockGetProjectsByTeamType).toHaveBeenCalledWith("launch");
    expect(mockGetAllProjects).not.toHaveBeenCalled();
  });

  it("returns an empty array when no projects exist", async () => {
    mockGetAllProjects.mockResolvedValue([]);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.projects.list();

    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });

  it("is accessible without authentication (public procedure)", async () => {
    mockGetAllProjects.mockResolvedValue(sampleProjects);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.projects.list();
    expect(result).toHaveLength(2);
  });
});

describe("projects.getById", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns a single project by id", async () => {
    mockGetProjectById.mockResolvedValue(sampleProjects[0]);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.projects.getById({ id: 1 });

    expect(result.projectId).toBe("T-06");
    expect(result.name).toBe("AI/ML Pipeline Security");
    expect(result.teamType).toBe("innovation");
    expect(mockGetProjectById).toHaveBeenCalledWith(1);
  });

  it("throws when project is not found", async () => {
    mockGetProjectById.mockResolvedValue(undefined);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.projects.getById({ id: 999 })).rejects.toThrow("Project not found");
  });

  it("is accessible without authentication (public procedure)", async () => {
    mockGetProjectById.mockResolvedValue(sampleProjects[0]);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.projects.getById({ id: 1 });
    expect(result).toBeDefined();
  });
});
