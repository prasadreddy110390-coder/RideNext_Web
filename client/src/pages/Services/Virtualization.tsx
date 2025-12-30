import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Cloud, Zap, Shield } from "lucide-react";

export default function Virtualization() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Virtualization Services" 
        subtitle="Cloud infrastructure and virtual environment solutions." 
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
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Cloud & Virtualization</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We help organizations modernize infrastructure through cloud migration, virtualization, and containerization. Build scalable, flexible, and cost-effective infrastructure.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From planning to implementation and ongoing management, we handle the complete virtualization journey.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl p-8 border border-primary/20 h-96 flex items-center justify-center">
                <Cloud className="w-24 h-24 text-primary/30" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Offerings</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                {
                  icon: Cloud,
                  title: "Cloud Migration",
                  description: "Seamless migration to AWS, Azure, or Google Cloud"
                },
                {
                  icon: Zap,
                  title: "Container Orchestration",
                  description: "Kubernetes and Docker for microservices architecture"
                },
                {
                  icon: Shield,
                  title: "Infrastructure as Code",
                  description: "Terraform, CloudFormation for automated provisioning"
                },
                {
                  icon: Cloud,
                  title: "Hybrid Cloud Solutions",
                  description: "Seamless integration between on-premises and cloud"
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Benefits</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Reduce infrastructure costs by 30-40%</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Improved scalability and flexibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Enhanced security and compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Faster application deployment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
