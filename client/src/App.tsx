import { Router, Route } from "wouter";
import Home from "./pages/Home";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Events from "./pages/Events";
import Portfolio from "./pages/Portfolio";
import Forms from "./pages/Forms";

import ContactPage from "./pages/ContactPage";
import ApplyLaunchTeam from "./pages/ApplyLaunchTeam";
import ApplyInnovationTeam from "./pages/ApplyInnovationTeam";
import ApplyLeadership from "./pages/ApplyLeadership";
import ProjectDetail from "./pages/ProjectDetail";
import FloatingContact from "./components/FloatingContact";
export default function App() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Router>
      <FloatingContact />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/leadership" component={Leadership} />
      <Route path="/events" component={Events} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/projects/:id" component={ProjectDetail} />
      <Route path="/forms" component={Forms} />

      <Route path="/contact" component={ContactPage} />
      <Route path="/apply/launch-team" component={ApplyLaunchTeam} />
      <Route path="/apply/innovation-team" component={ApplyInnovationTeam} />
      <Route path="/apply/leadership" component={ApplyLeadership} />
    </Router>
  );
}
