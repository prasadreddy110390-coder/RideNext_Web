import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Users, Heart, TrendingUp } from "lucide-react";

export default function WorkingAtRideNext() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Working @ RideNext" 
        subtitle="Join our team of passionate engineers and innovators." 
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Link href="/careers">
              <Button variant="outline" size="sm" className="gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to Careers
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Join RideNext?</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At RideNext, we're building the future of wireless and IoT technologies. We offer a dynamic work environment where innovation thrives and talented engineers can grow their careers.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join a team that values collaboration, continuous learning, and delivering excellence.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl p-8 border border-primary/20 h-96 flex items-center justify-center">
                <Users className="w-24 h-24 text-primary/30" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-8">Life at RideNext</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                {
                  icon: Heart,
                  title: "Collaborative Culture",
                  description: "Work with talented engineers in a supportive, inclusive environment"
                },
                {
                  icon: TrendingUp,
                  title: "Career Growth",
                  description: "Clear career paths with mentorship and professional development"
                },
                {
                  icon: Users,
                  title: "Innovative Projects",
                  description: "Work on cutting-edge wireless, IoT, and cloud technologies"
                },
                {
                  icon: Heart,
                  title: "Work-Life Balance",
                  description: "Flexible work arrangements and wellness programs"
                },
              ].map((benefit, i) => (
                <Card key={i} className="border-none shadow-md">
                  <CardContent className="pt-8">
                    <benefit.icon className="w-10 h-10 text-primary mb-4" />
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Benefits & Perks</h3>
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>Competitive salary and performance bonuses</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>Health insurance and wellness programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>Continuous learning and certification support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>Flexible work hours and remote options</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>Mentorship and career development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span>Team outings and community engagement</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Join Us?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We're always looking for talented engineers and innovators. Check our careers page for current openings.
              </p>
              <Link href="/careers">
                <Button className="bg-primary hover:bg-primary/90 text-white font-medium">
                  View Open Positions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
