/**
 * Portfolio.tsx — All projects grid view.
 *
 * Thin wrapper around ProjectListPage with portfolio-specific config.
 */
import { ProjectListPage } from "@/components/projects";

export default function Portfolio() {
  return (
    <ProjectListPage
      title="PROJECT DATABASE."
      titleHighlight="DATABASE."
      badgeLabel="Spring 2026"
    />
  );
}
