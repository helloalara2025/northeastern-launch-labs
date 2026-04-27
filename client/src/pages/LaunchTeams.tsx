/**
 * LaunchTeams.tsx — Filtered view of Launch Team projects.
 */
import { ProjectListPage } from "@/components/projects";

export default function LaunchTeams() {
  return (
    <ProjectListPage
      title="LAUNCH TEAMS."
      titleHighlight="LAUNCH"
      teamType="launch"
      badgeLabel="Spring 2026"
    />
  );
}
