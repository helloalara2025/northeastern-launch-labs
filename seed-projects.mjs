import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import { projects } from './drizzle/schema.ts';

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error('DATABASE_URL is not set');
  process.exit(1);
}

const db = drizzle(DATABASE_URL);

const projectData = [
  {
    projectId: "T-06",
    name: "AI/ML Pipeline Security",
    subtitle: "End-to-End Protection for the Modern AI Lifecycle",
    domain: "Security",
    timeline: "10 months (scoped to MVP)",
    tech: ["TensorFlow", "PyTorch", "scikit-learn", "NIST AI RMF", "Cryptographic Verification"],
    description: "Comprehensive security framework protecting AI/ML systems across their entire lifecycle — from training data validation to real-time inference monitoring and post-deployment threat detection.",
    mvpScope: "Working adversarial defense and inference monitoring prototype targeting a single ML framework, with compliance reporting against one regulatory standard and a lightweight security dashboard with real-time anomaly detection.",
    endGoal: "Making AI security accessible to ML engineers without deep security expertise, via adversarial robustness testing, role-based access control, audit logging, and compliance integration.",
    sortOrder: 1,
  },
  {
    projectId: "T-07",
    name: "Indoor Navigation",
    subtitle: "Visual Intelligence Without Infrastructure",
    domain: "Navigation",
    timeline: "8 weeks",
    tech: ["OpenCV", "A* Pathfinding", "Image Matching", "Mobile"],
    description: "Mobile indoor navigation using only the phone's camera — no WiFi, Bluetooth beacons, or installed infrastructure required. Landmark-based visual localization with digitized floor plan pathfinding.",
    mvpScope: "Single-building prototype using OpenCV-based image matching against pre-captured landmark checkpoints, paired with A* pathfinding on a manually digitized floor plan graph.",
    endGoal: "Users select a room, confirm location via landmark recognition, and receive step-by-step visual directions to their destination.",
    sortOrder: 2,
  },
  {
    projectId: "T-11",
    name: "Document Intelligence",
    subtitle: "Visual Reasoning Beyond OCR",
    domain: "FinTech / AI",
    timeline: "8 weeks",
    tech: ["VLMs", "OCR", "Anomaly Detection", "Document Processing"],
    description: "Autonomous document extraction using Vision-Language Models to transform loan document processing — moving beyond brittle OCR that fails on non-standard layouts.",
    mvpScope: "Single document type (synthetic pay stubs) with targeted extraction of 6-8 key fields, basic consistency validation, and accuracy benchmarking against traditional OCR baselines.",
    endGoal: "Upload a pay stub, receive structured field extractions with confidence scores, and see flagged anomalies — validating VLMs outperform rule-based OCR on unstructured financial documents.",
    sortOrder: 3,
  },
  {
    projectId: "T-12",
    name: "Roommate Matching",
    subtitle: "Data-Driven Compatibility for Student Housing",
    domain: "Student Life",
    timeline: "8 weeks",
    tech: ["Web Platform", "Database", "Scoring Algorithm", "Privacy-Aware Design"],
    description: "Intelligent roommate matching platform helping students find compatible living partners based on preferences, habits, lifestyle, and values.",
    mvpScope: "Centralized database for user profiles and match criteria, compatibility scoring via weighted preference comparison, and a browsing interface for viewing and filtering potential matches.",
    endGoal: "Students create profiles, input living preferences, and discover compatible roommates ranked by data-driven compatibility scores.",
    sortOrder: 4,
  },
  {
    projectId: "T-16",
    name: "Community Geospatial Analysis",
    subtitle: "Community-Driven Climate Resilience",
    domain: "Climate / Civic Tech",
    timeline: "1 semester",
    tech: ["Google Earth Engine", "Geospatial Analysis", "Open Data Portals", "Statistical Analysis"],
    description: "Open-source platform empowering citizen scientists to conduct geospatial analyses for sustainable urban development. Initial pilot replicates a 2023 study on cooling effects of urban parks.",
    mvpScope: "Single-pilot deployment on urban heat mitigation, one publishable analysis package, and a functional platform interface for community data exploration.",
    endGoal: "Community uploads local environmental data, runs guided geospatial analyses on park cooling effects, and produces contextualized insights for municipal ecology and development.",
    sortOrder: 5,
  },
  {
    projectId: "T-17",
    name: "Environment-Aware Fitness Routing",
    subtitle: "Safe Running Through Real-Time Hazard Intelligence",
    domain: "Health / Mobility",
    timeline: "8 weeks",
    tech: ["OpenWeatherMap", "OpenStreetMap", "EPA AirNow", "MBTA GTFS", "OpenRouteService API", "Crowdsourcing"],
    description: "Mobile fitness routing app generating safe running/walking routes by incorporating real-time environmental awareness — ice/snow hazards, air quality zones, and transit proximity.",
    mvpScope: "Single-city (Boston) MVP using lightweight scoring per road segment, crowdsource photo storage for future classification, and core route generation with hazard avoidance.",
    endGoal: "Set a start point and desired distance, receive a route avoiding high ice-risk segments and poor air quality near transit, and contribute real-time sidewalk condition reports.",
    sortOrder: 6,
  },
  {
    projectId: "T-18",
    name: "Cybersecurity Risk & Governance",
    subtitle: "AI-Driven Risk Assessment Platform",
    domain: "Security / GRC",
    timeline: "8 weeks (240 person-hours)",
    tech: ["NIST CSF", "OpenAI API", "Risk Scoring", "Dashboard", "Compliance Automation"],
    description: "AI-powered cybersecurity risk and governance platform helping organizations identify, assess, and manage cyber risks through NIST CSF compliance frameworks and intelligent dashboards.",
    mvpScope: "Single-framework (NIST) implementation targeting top 20-25 subcategories for SMEs, rule-based risk scoring foundation before AI layering, and 2-3 incident response plan templates.",
    endGoal: "Complete a risk assessment, view compliance posture on an executive dashboard with heatmaps and gap analysis, receive AI-generated security recommendations, and generate incident response plans.",
    sortOrder: 7,
  },
  {
    projectId: "T-19",
    name: "Campus Navigation",
    subtitle: "Interactive Wayfinding for Northeastern",
    domain: "Navigation / Campus",
    timeline: "8 weeks (6-person team, 5 hrs/wk each)",
    tech: ["React Native", "SVG", "Firebase", "Cross-Platform Mobile"],
    description: "Mobile campus map for students and staff to locate and navigate places within campus buildings. Cross-platform React Native app with interactive SVG floor plans.",
    mvpScope: "Single-building MVP with interactive floor plan rendering, floor switching, searchable Firebase-backed room directory, and static \"You Are Here\" entry-point selector.",
    endGoal: "Open the app, search for any room by name/number/category, locate it on the correct floor plan, and view relevant details — all within seconds.",
    sortOrder: 8,
  },
];

async function seed() {
  console.log('Seeding projects...');
  
  // Check if projects already exist
  const existing = await db.select().from(projects);
  if (existing.length > 0) {
    console.log(`Found ${existing.length} existing projects. Skipping seed to avoid duplicates.`);
    console.log('To re-seed, delete existing projects first.');
    process.exit(0);
  }

  await db.insert(projects).values(projectData);
  console.log(`Successfully seeded ${projectData.length} projects.`);
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
