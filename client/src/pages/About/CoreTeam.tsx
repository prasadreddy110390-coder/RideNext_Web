import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const coreTeam = [
  {
    name: "Wireless Solutions Architect",
    expertise: "5G & Wireless Protocols",
    years: "15+ years"
  },
  {
    name: "IoT Platform Lead",
    expertise: "Cloud & Edge Computing",
    years: "12+ years"
  },
  {
    name: "QA & Testing Director",
    expertise: "Test Automation & Quality",
    years: "10+ years"
  },
  {
    name: "Backend Systems Engineer",
    expertise: "Scalable Architecture",
    years: "14+ years"
  },
  {
    name: "Frontend Innovation Lead",
    expertise: "User Experience & UI",
    years: "11+ years"
  },
  {
    name: "DevOps & Infrastructure",
    expertise: "Cloud Deployment",
    years: "9+ years"
  },
];

export default function CoreTeam() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Core Team" 
        subtitle="Experienced professionals dedicated to excellence and innovation." 
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Link href="/about">
              <Button variant="outline" size="sm" className="gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to About
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {coreTeam.map((member, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-8">
                  <h3 className="text-lg font-bold mb-3">{member.name}</h3>
                  <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                    {member.expertise}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-slate-700">Experience:</span> {member.years}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Team Philosophy</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We believe in building a diverse team of talented engineers and innovators who are passionate about solving complex technical challenges. Our core team members bring decades of combined experience across wireless technologies, IoT platforms, and enterprise software development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Each team member is committed to continuous learning, collaboration, and delivering solutions that exceed customer expectations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
