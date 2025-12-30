import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Wifi, Signal, Zap, Shield, CheckCircle2, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const features = [
  {
    icon: Wifi,
    title: "5G Technology",
    description: "Cutting-edge 5G solutions enabling ultra-fast, low-latency connectivity for next-generation applications."
  },
  {
    icon: Signal,
    title: "Wireless Protocols",
    description: "Expertise in WiFi, cellular, and proprietary wireless protocols for diverse industry requirements."
  },
  {
    icon: Zap,
    title: "Network Optimization",
    description: "Performance tuning and optimization to maximize network efficiency and reliability."
  },
  {
    icon: Shield,
    title: "Security",
    description: "Enterprise-grade wireless security with encryption and authentication mechanisms."
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Real-time monitoring and analytics for network performance and health insights."
  },
  {
    icon: CheckCircle2,
    title: "Testing & QA",
    description: "Comprehensive wireless device and protocol testing ensuring compliance and reliability."
  },
];

const benefits = [
  "Enhanced Network Coverage",
  "Reduced Latency",
  "Improved Data Throughput",
  "Energy Efficiency",
  "Seamless Connectivity",
  "Future-Ready Infrastructure"
];

export default function Wireless() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Wireless Solutions" 
        subtitle="Innovative solutions for 5G and next-generation wireless networks." 
      />

      {/* Overview Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Our Wireless Expertise</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              According to industry reports, 5G is on track to account for 15 per cent of global mobile connections by 2025, as the number of 5G network launches and compatible devices ramps up. We provide cutting-edge wireless solutions to help you stay ahead in this rapidly evolving landscape.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With deep expertise in wireless protocols, network architecture, and device integration, we enable enterprises to build robust, scalable wireless infrastructure that meets today's demands and anticipates tomorrow's requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-16 text-center">
            What We Offer
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8">
                Benefits of Our Wireless Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-2xl p-12 border border-primary/10">
                <img 
                  src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&q=80" 
                  alt="Wireless Technology" 
                  className="w-full rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Transform Your Wireless Infrastructure?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Let's discuss how our wireless solutions can empower your business and drive digital transformation.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base font-semibold">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
