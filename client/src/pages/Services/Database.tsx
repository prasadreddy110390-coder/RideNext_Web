import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Database as DatabaseIcon, TrendingUp, Shield } from "lucide-react";

export default function DatabaseService() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Database Services" 
        subtitle="Enterprise database solutions for data-driven applications." 
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
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Reliable Data Management</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We design, implement, and manage database solutions that handle massive data volumes with high performance and reliability. From relational to NoSQL databases.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our expertise spans database design, optimization, migration, and 24/7 support.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl p-8 border border-primary/20 h-96 flex items-center justify-center">
                <Database className="w-24 h-24 text-primary/30" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-8">Database Services</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                {
                  icon: DatabaseIcon,
                  title: "Database Design",
                  description: "Optimized schema design for performance and scalability"
                },
                {
                  icon: TrendingUp,
                  title: "Performance Tuning",
                  description: "Query optimization and index strategies"
                },
                {
                  icon: Shield,
                  title: "Data Security",
                  description: "Encryption, backup, and disaster recovery"
                },
                {
                  icon: DatabaseIcon,
                  title: "Migration Services",
                  description: "Safe migration from legacy systems"
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Database Technologies</h3>
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>PostgreSQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>MySQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>MongoDB</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>Redis</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>Oracle</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>Cassandra</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
