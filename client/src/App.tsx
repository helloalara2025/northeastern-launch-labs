import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import LaunchTeams from "./pages/LaunchTeams";
import InnovationTeams from "./pages/InnovationTeams";
import Partners from "./pages/Partners";
import Forms from "./pages/Forms";
import ContactPage from "./pages/ContactPage";
import Leadership from "./pages/Leadership";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/launch-teams"} component={LaunchTeams} />
      <Route path={"/innovation-teams"} component={InnovationTeams} />
      <Route path={"/partners"} component={Partners} />
      <Route path={"/forms"} component={Forms} />
      <Route path={"/contact"} component={ContactPage} />
      <Route path={"/leadership"} component={Leadership} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
