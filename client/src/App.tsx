import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Management from "@/pages/About/Management";
import CoreTeam from "@/pages/About/CoreTeam";
import TeamMembers from "@/pages/About/TeamMembers";
import ClientsPartners from "@/pages/About/ClientsPartners";
import Product from "@/pages/Product";
import ASNDecoder from "@/pages/Product/ASNDecoder";
import Simulator from "@/pages/Product/Simulator";
import Services from "@/pages/Services";
import WebDevelopment from "@/pages/Services/WebDevelopment";
import Database from "@/pages/Services/Database";
import Virtualization from "@/pages/Services/Virtualization";
import Testing from "@/pages/Services/Testing";
import Resources from "@/pages/Resources";
import Wireshark from "@/pages/Resources/Wireshark";
import Events from "@/pages/Resources/Events";
import WorkingAtRideNext from "@/pages/Resources/WorkingAtRideNext";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import Wireless from "@/pages/Wireless";
import IoT from "@/pages/IoT";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/about/management" component={Management} />
      <Route path="/about/core-team" component={CoreTeam} />
      <Route path="/about/team-members" component={TeamMembers} />
      <Route path="/about/clients-partners" component={ClientsPartners} />
      <Route path="/product" component={Product} />
      <Route path="/product/asn-decoder" component={ASNDecoder} />
      <Route path="/product/simulator" component={Simulator} />
      <Route path="/services" component={Services} />
      <Route path="/services/web-development" component={WebDevelopment} />
      <Route path="/services/database" component={Database} />
      <Route path="/services/virtualization" component={Virtualization} />
      <Route path="/services/testing" component={Testing} />
      <Route path="/resources" component={Resources} />
      <Route path="/resources/wireshark" component={Wireshark} />
      <Route path="/resources/events" component={Events} />
      <Route path="/resources/working-at-ridenext" component={WorkingAtRideNext} />
      <Route path="/wireless" component={Wireless} />
      <Route path="/iot" component={IoT} />
      <Route path="/careers" component={Careers} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen bg-background font-sans text-foreground">
          <Navigation />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
