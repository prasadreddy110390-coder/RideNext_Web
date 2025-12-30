import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { BookOpen, Download, ExternalLink, FileText, Video, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    icon: FileText,
    title: "5G Wireless Whitepaper",
    description: "Comprehensive guide to 5G implementation strategies and best practices.",
    type: "PDF",
    link: "#"
  },
  {
    icon: Video,
    title: "IoT Integration Tutorial",
    description: "Step-by-step video guide for integrating IoT devices with our platform.",
    type: "Video",
    link: "#"
  },
  {
    icon: BookOpen,
    title: "Wireless Testing Guidelines",
    description: "Complete testing documentation and quality assurance procedures.",
    type: "Guide",
    link: "#"
  },
  {
    icon: Download,
    title: "SDK & API Documentation",
    description: "Technical documentation for developers implementing our solutions.",
    type: "Docs",
    link: "#"
  },
  {
    icon: HelpCircle,
    title: "FAQ & Support",
    description: "Frequently asked questions and troubleshooting guides for common issues.",
    type: "Support",
    link: "#"
  },
  {
    icon: ExternalLink,
    title: "Industry Case Studies",
    description: "Real-world implementations and success stories from our clients.",
    type: "Case Study",
    link: "#"
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Resources" 
        subtitle="Documentation, guides, and tools to help you get the most from our solutions." 
      />

      {/* Resources Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Knowledge Base</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Tools & Documentation
            </h3>
            <p className="text-muted-foreground text-lg">
              Everything you need to implement and optimize our technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex flex-col rounded-xl border border-slate-200 bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-8 flex flex-col flex-1">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 flex-1">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {resource.type}
                      </span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-primary hover:text-primary/80 hover:bg-primary/5 p-0"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-24 bg-slate-50 border-t">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Need Technical Support?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our technical support team is ready to assist you with implementation, troubleshooting, and optimization of our solutions. Access our complete knowledge base, API documentation, and integration guides.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>24/7 Technical Support</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Comprehensive API Documentation</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Developer Community & Forums</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Regular Training & Webinars</span>
                </li>
              </ul>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base font-semibold">
                Contact Support
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-2xl p-12 border border-primary/10">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-sm font-semibold text-primary mb-2">API Status</div>
                    <div className="text-2xl font-bold text-slate-900">99.9% Uptime</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-sm font-semibold text-primary mb-2">Average Response</div>
                    <div className="text-2xl font-bold text-slate-900">&lt;50ms</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-sm font-semibold text-primary mb-2">Developers</div>
                    <div className="text-2xl font-bold text-slate-900">500+</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
