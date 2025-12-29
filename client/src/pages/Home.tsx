import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { useServices } from "@/hooks/use-services";

export default function Home() {
  const { data: services, isLoading } = useServices();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 bg-slate-900 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-primary/30" />
          <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-[0.03]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-6">
              Leading the Future of Connectivity
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
              Wireless <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">
                Innovative
              </span> <br />
              Solutions
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
              Empowering businesses with cutting-edge IoT smart solutions and robust wireless infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base font-semibold shadow-lg shadow-primary/25">
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 h-12 text-base font-semibold backdrop-blur-sm">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Visual element representing network/IoT */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse" />
              <div className="relative z-10 bg-slate-800/50 backdrop-blur-md rounded-2xl border border-white/10 p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="bg-primary/10 rounded-xl p-6 flex flex-col justify-between">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                      <CheckCircle2 />
                    </div>
                    <div className="text-white font-bold text-lg">99.9% Uptime</div>
                  </div>
                  <div className="bg-cyan-500/10 rounded-xl p-6 flex flex-col justify-between mt-8">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <ArrowRight />
                    </div>
                    <div className="text-white font-bold text-lg">IoT Ready</div>
                  </div>
                  <div className="bg-blue-500/10 rounded-xl p-6 flex flex-col justify-between -mt-8">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <CheckCircle2 />
                    </div>
                    <div className="text-white font-bold text-lg">Scalable</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-xl p-6 flex flex-col justify-between">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                      <ArrowRight />
                    </div>
                    <div className="text-white font-bold text-lg">Secure</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Comprehensive Technology Solutions
            </h3>
            <p className="text-muted-foreground text-lg">
              We deliver end-to-end solutions that drive digital transformation and operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              Array(3).fill(0).map((_, i) => (
                <div key={i} className="h-64 bg-slate-100 rounded-xl animate-pulse" />
              ))
            ) : (
              services?.slice(0, 3).map((service, index) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  index={index}
                />
              ))
            )}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-white">
                View All Services <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.05]" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              {/* Image from Unsplash: Modern office team meeting */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                  alt="Team collaboration" 
                  className="w-full object-cover h-[500px]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8">
                  <div className="text-white font-bold text-xl">Partner with Business Leaders</div>
                  <p className="text-slate-300 mt-2">We collaborate with industry giants to deliver excellence.</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                About RideNext
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                RideNext is a premier technology provider specializing in next-generation wireless communication and IoT ecosystems. We bridge the gap between complex hardware and intuitive software.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Expertise in 5G and Wireless Protocols",
                  "End-to-End IoT System Design",
                  "Automated Testing & QA Services",
                  "Cloud-Native Application Development"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button className="bg-slate-900 text-white hover:bg-slate-800">
                  Read More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-muted-foreground font-medium mb-8">TRUSTED BY INNOVATIVE COMPANIES</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholder logos - simpler to use text for now or abstract shapes */}
             {["TechCorp", "InnovateSystems", "FutureNet", "SmartIoT", "DataFlow"].map((partner, i) => (
               <div key={i} className="text-2xl font-display font-bold text-slate-400">{partner}</div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
