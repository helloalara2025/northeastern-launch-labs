import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import { eq } from 'drizzle-orm';
import { projects } from './drizzle/schema.ts';

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error('DATABASE_URL is not set');
  process.exit(1);
}

const db = drizzle(DATABASE_URL);

// Data strictly from the spreadsheet — no made-up info, no team IDs
const cleanData = [
  {
    projectId: "T-06",
    newProjectId: "PIPELINE-SEC",
    name: "AI/ML Pipeline Security",
    subtitle: "End-to-end protection for AI lifecycles (adversarial defense, audit logging, compliance).",
    domain: "Security",
    timeline: "",
    tech: ["TensorFlow", "PyTorch", "scikit-learn", "NIST AI RMF"],
    description: "End-to-end protection for AI lifecycles (adversarial defense, audit logging, compliance).",
    mvpScope: "Adversarial defense & inference monitoring prototype for 1 ML framework; 1 regulatory standard (NIST/EU AI Act).",
    endGoal: "",
  },
  {
    projectId: "T-07",
    newProjectId: "INDOOR-NAV",
    name: "Indoor Navigation",
    subtitle: "Infrastructure-free (no WiFi/BLE) visual navigation via phone camera.",
    domain: "Navigation",
    timeline: "",
    tech: ["OpenCV", "A* Algorithm", "Python/Mobile"],
    description: "Infrastructure-free (no WiFi/BLE) visual navigation via phone camera.",
    mvpScope: "Single-building prototype using OpenCV image matching against landmarks; A* pathfinding on manual floor plan.",
    endGoal: "",
  },
  {
    projectId: "T-11",
    newProjectId: "DOC-INTEL",
    name: "Document Intelligence",
    subtitle: "Visual reasoning for loan documents using Vision-Language Models (VLM).",
    domain: "FinTech / AI",
    timeline: "",
    tech: ["Vision-Language Models (VLM)", "Synthetic Data"],
    description: "Visual reasoning for loan documents using Vision-Language Models (VLM).",
    mvpScope: "Synthetic pay stub extraction (6-8 fields); basic consistency validation; accuracy benchmarking vs. OCR.",
    endGoal: "",
  },
  {
    projectId: "T-12",
    newProjectId: "ROOMMATE",
    name: "Roommate Matching",
    subtitle: "Data-driven compatibility matching for students based on habits/lifestyle.",
    domain: "Student Life",
    timeline: "",
    tech: ["Web Stack (Frontend/Backend)", "Database"],
    description: "Data-driven compatibility matching for students based on habits/lifestyle.",
    mvpScope: "Centralized profile database; weighted compatibility scoring; browsing/filtering interface.",
    endGoal: "",
  },
  {
    projectId: "T-16",
    newProjectId: "GEO-CLIMATE",
    name: "Geospatial Climate Resilience",
    subtitle: "Open-source platform for community-led urban heat & environmental analysis.",
    domain: "Climate / Civic Tech",
    timeline: "",
    tech: ["Google Earth Engine", "Geospatial Analysis Tools"],
    description: "Open-source platform for community-led urban heat & environmental analysis.",
    mvpScope: "Single-pilot deployment (Urban Heat Mitigation); 1 analysis package based on Xiao et al. (2023) study.",
    endGoal: "",
  },
  {
    projectId: "T-17",
    newProjectId: "FITNESS-ROUTE",
    name: "Environment-Aware Fitness Routing",
    subtitle: "Real-time hazard routing (ice, air quality) for runners/walkers.",
    domain: "Health / Mobility",
    timeline: "",
    tech: ["OpenWeatherMap", "OpenStreetMap", "AirNow API", "GTFS"],
    description: "Real-time hazard routing (ice, air quality) for runners/walkers.",
    mvpScope: "Boston-focused MVP; lightweight scoring formula for ice risk; crowdsourced hazard pins; OpenRouteService API.",
    endGoal: "",
  },
  {
    projectId: "T-18",
    newProjectId: "CYBER-GRC",
    name: "AI-Driven Cyber Risk & Governance",
    subtitle: "AI-powered NIST risk assessment and compliance dashboard for SMEs.",
    domain: "Security / GRC",
    timeline: "",
    tech: ["NIST CSF", "OpenAI API", "GRC Dashboard"],
    description: "AI-powered NIST risk assessment and compliance dashboard for SMEs.",
    mvpScope: "Top 20-25 NIST subcategories; rule-based scoring; 2-3 incident response templates; AI-generated recommendations.",
    endGoal: "",
  },
  {
    projectId: "T-19",
    newProjectId: "CAMPUS-NAV",
    name: "Campus Navigation",
    subtitle: "Interactive SVG-based indoor wayfinding for Northeastern University.",
    domain: "Navigation / Campus",
    timeline: "",
    tech: ["React Native", "SVG", "Firebase"],
    description: "Interactive SVG-based indoor wayfinding for Northeastern University.",
    mvpScope: "Single-building MVP; interactive SVG floor plans; Firebase-backed searchable room directory; floor switching.",
    endGoal: "",
  },
];

async function cleanup() {
  console.log('Cleaning up project data...\n');

  for (const proj of cleanData) {
    await db.update(projects)
      .set({
        projectId: proj.newProjectId,
        name: proj.name,
        subtitle: proj.subtitle,
        domain: proj.domain,
        timeline: proj.timeline,
        tech: proj.tech,
        description: proj.description,
        mvpScope: proj.mvpScope,
        endGoal: proj.endGoal,
      })
      .where(eq(projects.projectId, proj.projectId));
    
    console.log(`Updated: ${proj.projectId} -> ${proj.newProjectId} (${proj.name})`);
  }

  console.log('\nAll projects cleaned up. Only spreadsheet data remains.');
  process.exit(0);
}

cleanup().catch((err) => {
  console.error('Cleanup failed:', err);
  process.exit(1);
});
