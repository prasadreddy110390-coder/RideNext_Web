import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, Users, Zap } from "lucide-react";

export default function Events() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Events & Webinars" 
        subtitle="Stay updated with industry insights and technical sessions." 
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
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Upcoming Events</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  RideNext regularly hosts webinars, workshops, and industry conferences. Learn from experts, network with peers, and stay updated with the latest in wireless and IoT technologies.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join our community to explore cutting-edge solutions and best practices.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl p-8 border border-primary/20 h-96 flex items-center justify-center">
                <Calendar className="w-24 h-24 text-primary/30" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-8">Event Categories</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                {
                  icon: Zap,
                  title: "Technical Webinars",
                  description: "Deep technical sessions on wireless, IoT, and testing"
                },
                {
                  icon: Users,
                  title: "Industry Conferences",
                  description: "Network with industry leaders and technology experts"
                },
                {
                  icon: Calendar,
                  title: "Workshops",
                  description: "Hands-on training on latest technologies and tools"
                },
                {
                  icon: Zap,
                  title: "Product Updates",
                  description: "Introduction to new features and product releases"
                },
              ].map((event, i) => (
                <Card key={i} className="border-none shadow-md">
                  <CardContent className="pt-8">
                    <event.icon className="w-10 h-10 text-primary mb-4" />
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{event.title}</h4>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Attend Our Events?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Learn from industry experts and thought leaders</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Network with peers and potential business partners</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Stay updated with latest technology trends</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Get hands-on experience with new tools and platforms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
