import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Network, BookOpen, Code2 } from "lucide-react";

export default function Wireshark() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Wireshark Resources" 
        subtitle="Guides, tools, and best practices for network protocol analysis." 
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Link href="/resources">
              <Button variant="outline" size="sm" className="gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to Resources
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Network Analysis with Wireshark</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Wireshark is a powerful network protocol analyzer. We provide comprehensive resources, guides, and best practices for capturing and analyzing network traffic.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Learn to troubleshoot network issues, analyze packet data, and optimize network performance.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl p-8 border border-primary/20 h-96 flex items-center justify-center">
                <Network className="w-24 h-24 text-primary/30" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-8">Available Resources</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                {
                  icon: BookOpen,
                  title: "Getting Started Guide",
                  description: "Introduction to Wireshark installation and basic usage"
                },
                {
                  icon: Code2,
                  title: "Protocol Analysis",
                  description: "Deep dive into protocol dissection and packet inspection"
                },
                {
                  icon: Network,
                  title: "Troubleshooting Guide",
                  description: "Common network issues and how to diagnose them"
                },
                {
                  icon: BookOpen,
                  title: "Best Practices",
                  description: "Tips and tricks for efficient network analysis"
                },
              ].map((resource, i) => (
                <Card key={i} className="border-none shadow-md">
                  <CardContent className="pt-8">
                    <resource.icon className="w-10 h-10 text-primary mb-4" />
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{resource.title}</h4>
                    <p className="text-muted-foreground">{resource.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Common Use Cases</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Network troubleshooting and diagnostics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Protocol development and testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Network security analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Performance optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
