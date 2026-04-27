/**
 * App.tsx — Root application router.
 *
 * Defines all client-side routes and wraps the app with
 * the global FloatingContact recruitment widget.
 *
 * Route structure:
 *   /                     → Home (landing page)
 *   /about                → About the organization
 *   /leadership           → E-Board members & open positions
 *   /events               → Past and upcoming events
 *   /portfolio            → All projects grid
 *   /projects/:id         → Individual project detail
 *   /forms                → Application forms hub
 *   /contact              → Contact page
 *   /apply/launch-team    → Launch Team application
 *   /apply/innovation-team → Innovation Team application
 *   /apply/leadership     → Leadership application
 */
import { Router, Route } from "wouter";

// ── Pages ─────────────────────────────────────────────────────
import Home from "./pages/Home";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Events from "./pages/Events";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Forms from "./pages/Forms";
import ContactPage from "./pages/ContactPage";
import ApplyLaunchTeam from "./pages/ApplyLaunchTeam";
import ApplyInnovationTeam from "./pages/ApplyInnovationTeam";
import ApplyLeadership from "./pages/ApplyLeadership";

// ── Global Components ─────────────────────────────────────────
import { FloatingContact } from "./components/common";

export default function App() {
  return (
    <Router>
      {/* Persistent recruitment widget — visible on all pages */}
      <FloatingContact />

      {/* ── Primary Pages ──────────────────────────────────── */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/leadership" component={Leadership} />
      <Route path="/events" component={Events} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/projects/:id" component={ProjectDetail} />

      {/* ── Secondary Pages ────────────────────────────────── */}
      <Route path="/forms" component={Forms} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/apply/launch-team" component={ApplyLaunchTeam} />
      <Route path="/apply/innovation-team" component={ApplyInnovationTeam} />
      <Route path="/apply/leadership" component={ApplyLeadership} />
    </Router>
  );
}
