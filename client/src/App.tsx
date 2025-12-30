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
import Product from "@/pages/Product";
import Services from "@/pages/Services";
import Resources from "@/pages/Resources";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import Wireless from "@/pages/Wireless";
import IoT from "@/pages/IoT";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/product" component={Product} />
      <Route path="/services" component={Services} />
      <Route path="/resources" component={Resources} />
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
