import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ClipboardCheck, Zap, Shield } from "lucide-react";

export default function Testing() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Testing Services" 
        subtitle="Comprehensive QA and testing solutions for enterprise applications." 
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Link href="/services">
              <Button variant="outline" size="sm" className="gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to Services
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Complete Test Solutions</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We provide end-to-end testing services including test plan creation, test case execution, regression testing, and interoperability testing.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our expertise spans functional testing, performance testing, security testing, and field test execution with technical assistance.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl p-8 border border-primary/20 h-96 flex items-center justify-center">
                <ClipboardCheck className="w-24 h-24 text-primary/30" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-8">Testing Services</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                {
                  icon: ClipboardCheck,
                  title: "Test Planning & Strategy",
                  description: "Comprehensive test plans based on functional specifications"
                },
                {
                  icon: Zap,
                  title: "Functional Testing",
                  description: "Manual and automated functional test case execution"
                },
                {
                  icon: Shield,
                  title: "Regression Testing",
                  description: "Identifying and executing regression test cases"
                },
                {
                  icon: ClipboardCheck,
                  title: "Interoperability Testing",
                  description: "Testing system compatibility and integration"
                },
                {
                  icon: Zap,
                  title: "Performance Testing",
                  description: "Load testing, stress testing, and optimization"
                },
                {
                  icon: Shield,
                  title: "Field Testing & Support",
                  description: "Real-world testing with technical assistance"
                },
              ].map((service, i) => (
                <Card key={i} className="border-none shadow-md">
                  <CardContent className="pt-8">
                    <service.icon className="w-10 h-10 text-primary mb-4" />
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h4>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Testing Expertise</h3>
              <p className="text-muted-foreground mb-6">
                We have extensive experience testing enterprise applications across multiple domains:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Telecom and 5G systems testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>IoT device and platform testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Web and mobile application testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Security and compliance testing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
