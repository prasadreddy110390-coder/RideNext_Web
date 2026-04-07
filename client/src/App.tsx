import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import { useLocation } from "wouter";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
import Home from "@/pages/Home";
import peopleandculture from "@/pages/peopleandculture";
import lifeatridenext from "@/pages/lifeatridenext";
import Careers from "@/pages/Careers";
import YouTubeVideos from "@/pages/videolibrary";
import About from "@/pages/About";
import Whyus from "@/pages/About/Whyus";
import csractivity from "@/pages/About/csractivity";
import industry from "@/pages/About/industry";
import Corecompetencies from "@/pages/About/Corecompetencies";
import Management from "@/pages/About/Management";
import CoreTeam from "@/pages/About/CoreTeam";
import TeamMembers from "@/pages/About/TeamMembers";
import ClientsPartners from "@/pages/About/ClientsPartners";
import Product from "@/pages/Product";
import ASNDecoder from "@/pages/Product/ASNDecoder";
// import EMS from "@/pages/Product/5gems";
import Services from "@/pages/Services";
import WebDevelopment from "@/pages/Services/wireless";
import qualityengineering from "@/pages/Services/qualityengineering";
import Database from "@/pages/Services/Database";
import kubernetes from "@/pages/Services/kubernetes";
import ranintegration from "@/pages/Services/ranintegration";
import webdevolpment from "@/pages/Services/webdevelopment";
import wireless from "@/pages/Services/wireless";
import Virtualization from "@/pages/Services/Virtualization";
import Testing from "@/pages/Services/qualityengineering";
import Resources from "@/pages/Resources";
import Wireshark from "@/pages/Resources/Wireshark";
import Events from "@/pages/Resources/Events";
import WorkingAtRideNext from "@/pages/Resources/WorkingAtRideNext";
import Contact from "@/pages/Contact";
import Wireless from "@/pages/Wireless";
import IoT from "@/pages/IoT";
import EMS from "@/pages/Product/5gems";
import BLUEFOX from "@/pages/Product/bluefox";

import NEARRTRIC from "@/pages/Product/nearrtric";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/peopleandculture" component={peopleandculture} />
      <Route path="/lifeatridenext" component={lifeatridenext} />
      <Route path="/careers" component={Careers} />
      <Route path="/videolibrary" component={YouTubeVideos} />
      <Route path="/about" component={About} />
      <Route path="/about/whyus" component={Whyus} />
      <Route path="/about/csractivity" component={csractivity} />
      <Route path="/about/industry" component={industry} />
      <Route path="/about/corecompetencies" component={Corecompetencies} />
      <Route path="/about/management" component={Management} />
      <Route path="/about/core-team" component={CoreTeam} />
      <Route path="/about/team-members" component={TeamMembers} />
      <Route path="/about/clients-partners" component={ClientsPartners} />
      <Route path="/product" component={Product} />
      <Route path="/product/asndecoder" component={ASNDecoder} />
      <Route path="/product/5gems" component={EMS} />
      <Route path="/product/bluefox" component={BLUEFOX} />
      <Route path="/product/nearrtric" component={NEARRTRIC} />
      <Route path="/services" component={Services} />
      {/* <Route path="/services/web-development" component={WebDevelopment} /> */}
      <Route path="/services/qualityengineering" component={qualityengineering} />
      <Route path="/services/Database" component={Database} />
      <Route path="/services/webdevolpment" component={webdevolpment} />
      <Route path="/services/kubernetes" component={kubernetes} />
      <Route path="/services/ranintegration" component={ranintegration} />
      <Route path="/services/wireless" component={wireless} />
      <Route path="/services/virtualization" component={Virtualization} />
      {/* <Route path="/services/testing" component={Testing} /> */}
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
       <ScrollToTop />
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
