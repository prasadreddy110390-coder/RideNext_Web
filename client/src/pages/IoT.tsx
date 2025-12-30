import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Cpu, Zap, Cloud, Gauge, Shield, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const features = [
  {
    icon: Cpu,
    title: "Smart Device Integration",
    description: "Seamless integration of IoT devices and sensors into connected ecosystems."
  },
  {
    icon: Cloud,
    title: "Cloud Platform",
    description: "Scalable cloud infrastructure for managing millions of connected devices and data streams."
  },
  {
    icon: Gauge,
    title: "Real-Time Analytics",
    description: "Advanced analytics engine for processing and visualizing IoT data in real-time."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "End-to-end encryption and secure device management for enterprise IoT deployments."
  },
  {
    icon: Lightbulb,
    title: "AI & Machine Learning",
    description: "Intelligent insights through predictive analytics and anomaly detection."
  },
  {
    icon: Zap,
    title: "Edge Computing",
    description: "Distributed processing at the edge for low-latency applications and reduced bandwidth."
  },
];

const applications = [
  "Smart Cities & Infrastructure",
  "Industrial IoT & Manufacturing",
  "Connected Healthcare",
  "Smart Agriculture",
  "Energy Management",
  "Environmental Monitoring"
];

export default function IoT() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="IoT Solutions" 
        subtitle="Smart solutions for a connected world." 
      />

      {/* Overview Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">Our IoT Platform</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              While sensors have been in use for a long time, the rise of the Internet of Things has accelerated the evolution of sensors to another level altogether. More than 50 billion devices will be connected to the Internet in the coming years.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We help you leverage this connectivity through our comprehensive IoT solutions. From device management to cloud analytics, we provide the complete platform needed to build intelligent, connected systems that drive operational efficiency and unlock new business opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-16 text-center">
            Platform Capabilities
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

      {/* Use Cases Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-2xl p-12 border border-primary/10">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80" 
                  alt="IoT Technology" 
                  className="w-full rounded-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8">
                Applications & Use Cases
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {applications.map((app, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-slate-700 font-medium">{app}</span>
                  </div>
                ))}
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
              Build Your Smart Connected Solution
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Let's discuss how our IoT platform can power your next-generation connected application.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base font-semibold">
                Start Your IoT Journey
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
