import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Globe, Zap, Lock } from "lucide-react";

export default function WebDevelopment() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Web Development" 
        subtitle="Modern web solutions for enterprise applications." 
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
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Full-Stack Web Solutions</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We design and develop scalable, responsive web applications using modern technologies and best practices. From single-page applications to complex enterprise platforms.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team leverages React, Node.js, and cloud technologies to deliver high-performance web solutions.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl p-8 border border-primary/20 h-96 flex items-center justify-center">
                <Globe className="w-24 h-24 text-primary/30" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Services</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                {
                  icon: Globe,
                  title: "Web Application Development",
                  description: "Custom web applications tailored to your business needs"
                },
                {
                  icon: Zap,
                  title: "Performance Optimization",
                  description: "Fast, responsive applications with optimized user experience"
                },
                {
                  icon: Lock,
                  title: "Security Implementation",
                  description: "Secure authentication, authorization, and data protection"
                },
                {
                  icon: Zap,
                  title: "API Development",
                  description: "RESTful and GraphQL APIs for seamless integrations"
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Technology Stack</h3>
              <p className="text-muted-foreground mb-6">
                We use industry-leading technologies to build robust, scalable web applications:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>React, Vue, Angular</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>Node.js, Express, Django</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>MongoDB, PostgreSQL, MySQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>AWS, Azure, Google Cloud</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
