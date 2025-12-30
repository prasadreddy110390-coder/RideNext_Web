import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const departments = [
  {
    name: "Wireless Engineering",
    count: 12,
    description: "Specialists in 5G, cellular, and wireless protocol development"
  },
  {
    name: "IoT & Cloud",
    count: 10,
    description: "Platform engineers and cloud infrastructure experts"
  },
  {
    name: "Quality Assurance",
    count: 8,
    description: "Test engineers and automation specialists"
  },
  {
    name: "Software Development",
    count: 15,
    description: "Full-stack developers and software architects"
  },
  {
    name: "DevOps & Infrastructure",
    count: 6,
    description: "Cloud deployment and infrastructure management"
  },
  {
    name: "Product & Design",
    count: 5,
    description: "Product managers and UI/UX designers"
  },
];

export default function TeamMembers() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Team Members" 
        subtitle="A talented group of engineers, architects, and innovators." 
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

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-3xl font-bold text-slate-900 mb-2">70+ Talented Professionals</h3>
              <p className="text-lg text-muted-foreground">
                Our diverse team spans multiple domains including wireless technologies, cloud computing, IoT, quality assurance, and software development.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {departments.map((dept, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{dept.name}</h3>
                      <Badge variant="outline" className="border-primary text-primary">
                        {dept.count} Team Members
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {dept.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Team Culture</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>Collaborative work environment fostering innovation and creativity</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>Continuous learning and professional development opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>Mentorship programs pairing senior engineers with emerging talent</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>Diverse perspectives bringing together expertise from multiple domains</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
