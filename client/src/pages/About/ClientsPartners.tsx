import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const clients = [
  {
    sector: "Telecommunications",
    description: "Leading telecom operators leveraging our 5G solutions and wireless expertise"
  },
  {
    sector: "Smart Cities",
    description: "Municipal authorities implementing IoT infrastructure for smart city initiatives"
  },
  {
    sector: "Manufacturing",
    description: "Industrial enterprises using our IoT platform for connected operations"
  },
  {
    sector: "Healthcare",
    description: "Healthcare providers implementing connected device ecosystems"
  },
  {
    sector: "Energy & Utilities",
    description: "Power companies utilizing IoT for grid management and monitoring"
  },
  {
    sector: "Agriculture",
    description: "Agritech companies deploying IoT sensors for precision farming"
  },
];

const partners = [
  {
    type: "Technology Partners",
    examples: "Cloud Providers, Semiconductor Manufacturers, Software Platforms"
  },
  {
    type: "System Integrators",
    examples: "Enterprise Solutions, Consulting Firms, Implementation Partners"
  },
  {
    type: "Academic Partners",
    examples: "Universities, Research Institutes, Innovation Centers"
  },
];

export default function ClientsPartners() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Clients & Partners" 
        subtitle="Building strong relationships with industry leaders and innovators." 
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

          {/* Clients Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Our Clients</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
              {clients.map((client, i) => (
                <Card key={i} className="border-none shadow-md hover:shadow-lg transition-all">
                  <CardContent className="pt-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <div className="w-6 h-6 rounded-md bg-primary/20" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{client.sector}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {client.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Partners Section */}
          <div className="mb-24">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Our Partners</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
              {partners.map((partner, i) => (
                <Card key={i} className="border-none shadow-md hover:shadow-lg transition-all">
                  <CardContent className="pt-8">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">{partner.type}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {partner.examples}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Partnership Message */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Partner with Us</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              RideNext is committed to building lasting partnerships with clients and technology partners who share our vision of innovation and excellence. We believe that collaborative relationships drive mutual growth and success.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're looking for technology solutions, partnership opportunities, or collaboration on innovative projects, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
