import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Cpu, TrendingUp, Gauge } from "lucide-react";

export default function Simulator() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Simulator" 
        subtitle="Advanced simulation platform for wireless and IoT systems." 
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Link href="/product">
              <Button variant="outline" size="sm" className="gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to Products
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Test Before Deployment</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our advanced simulator allows you to model, test, and validate wireless and IoT systems before deploying to production. Reduce risk and accelerate time-to-market.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Simulate 5G networks, IoT device behavior, and complex system interactions with high fidelity.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl p-8 border border-primary/20 h-96 flex items-center justify-center">
                <Cpu className="w-24 h-24 text-primary/30" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-8">Simulation Capabilities</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                {
                  icon: TrendingUp,
                  title: "5G Network Simulation",
                  description: "Full 5G stack simulation including RAN, core network, and applications"
                },
                {
                  icon: Cpu,
                  title: "IoT Device Modeling",
                  description: "Create and simulate thousands of IoT devices with realistic behaviors"
                },
                {
                  icon: Gauge,
                  title: "Performance Analysis",
                  description: "Comprehensive metrics and analytics for system performance evaluation"
                },
                {
                  icon: TrendingUp,
                  title: "Scenario Scripting",
                  description: "Custom scenario scripting for complex test cases"
                },
              ].map((feature, i) => (
                <Card key={i} className="border-none shadow-md">
                  <CardContent className="pt-8">
                    <feature.icon className="w-10 h-10 text-primary mb-4" />
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Benefits</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Reduce development and testing cycle time</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Identify issues before field deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Cost-effective testing at scale</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Validate system design and architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
