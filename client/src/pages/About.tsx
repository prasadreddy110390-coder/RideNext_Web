import { PageHeader } from "@/components/PageHeader";
import { CheckCircle2, Target, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize access to advanced wireless technologies and empower businesses to build smarter, more connected products.
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
                  A world where connectivity is seamless, intelligent, and ubiquitous, driving efficiency and sustainability.
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
                  Innovation, Integrity, and Customer Success are at the core of everything we do. We believe in collaborative growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Team section placeholder */}
      <section className="py-20">
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
