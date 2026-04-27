/**
 * InnovationTeams.tsx — Filtered view of Innovation Team projects.
 */
import { ProjectListPage } from "@/components/projects";

export default function InnovationTeams() {
  return (
    <ProjectListPage
      title="INNOVATION TEAMS."
      titleHighlight="INNOVATION"
      teamType="innovation"
      badgeLabel="Spring 2026"
    />
  );
}
