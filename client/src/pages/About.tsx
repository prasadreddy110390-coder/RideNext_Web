import { PageHeader } from "@/components/PageHeader";
import { CheckCircle2, Target, Users, Zap, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="About Us" 
        subtitle="We are a team of engineers, innovators, and dreamers building the connected future." 
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Who We Are</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                RideNext was founded with a singular vision: to accelerate the adoption of next-generation wireless technologies. 
                Based in Bengaluru, India's technology capital, we have grown into a trusted partner for enterprises looking to 
                leverage IoT, 5G, and embedded systems.
              </p>
              <p className="mt-4">
                Our team comprises industry veterans with deep expertise in telecommunications, semiconductor design, and cloud computing. 
                We don't just build solutions; we engineer experiences that drive tangible business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Organization Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Our Organization
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                RideNext is a premier technology company headquartered in Bengaluru, India. We are a leading technology services and solutions provider with best-in-class domain experts, system architects, and engineering teams.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We are a software solutions and services provider company that has been instrumental in steering the digital transformation journey of our clients. With our innovative solutions and solution accelerators in the areas of Wireless and IoT, we empower enterprises to achieve their goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/wireless">
                  <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/5">
                    Wireless Solutions <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/iot">
                  <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/5">
                    IoT Platform <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                alt="Organization" 
                className="w-full object-cover h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To have a talented 'hands-on' pool of engineers in Wireless, IoT, Cloud and Web Technologies domain and empower our employees, partners and clients to excel and grow together.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  A world where connectivity is seamless, intelligent, and ubiquitous, driving efficiency, innovation and sustainable growth.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Values</h3>
                <p className="text-muted-foreground">
                  Innovation, Integrity, and Customer Success are at the core of everything we do. We believe in collaborative growth and excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Team section placeholder */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
           <h2 className="text-3xl font-display font-bold text-slate-900 mb-12">Leadership</h2>
           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             {[1, 2, 3].map((i) => (
               <div key={i} className="group">
                 <div className="w-48 h-48 rounded-full bg-slate-200 mx-auto mb-6 overflow-hidden">
                   {/* Unsplash placeholder for avatars */}
                   <img 
                      src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=400&h=400&fit=crop`} 
                      alt="Team member" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                   />
                 </div>
                 <h3 className="text-lg font-bold">Executive Name</h3>
                 <p className="text-primary text-sm font-medium">Position Title</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
