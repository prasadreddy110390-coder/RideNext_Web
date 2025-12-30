import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { Zap, Shield, Cpu, BarChart3, Cloud, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const features = [
  {
    icon: Zap,
    title: "5G & Wireless Solutions",
    description: "Next-generation wireless infrastructure for enterprises requiring high-speed connectivity and reliability."
  },
  {
    icon: Cpu,
    title: "IoT Platform",
    description: "End-to-end IoT solutions connecting millions of devices with real-time data processing and analytics."
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Enterprise-grade security protocols ensuring data integrity and protection across all layers."
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless cloud connectivity for scalability, flexibility, and cost optimization."
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Advanced analytics to extract actionable insights from your connected device ecosystem."
  },
  {
    icon: Lock,
    title: "Compliance Ready",
    description: "Built-in compliance with international standards and regulations for regulated industries."
  },
];

export default function Product() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Our Products" 
        subtitle="Innovative technology solutions designed for modern enterprises." 
      />

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">What We Offer</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Comprehensive Product Suite
            </h3>
            <p className="text-muted-foreground text-lg">
              Our products are built on years of expertise in wireless, IoT, and cloud technologies.
            </p>
          </div>

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
                  className="group rounded-2xl border border-slate-200 hover:border-primary/30 bg-white p-8 hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:to-primary/5"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-cyan-500/10 border-t border-b">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover how our products can drive digital transformation and operational excellence for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base font-semibold">
                  View Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 px-8 h-12 text-base font-semibold">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
