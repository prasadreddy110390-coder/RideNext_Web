import { PageHeader } from "@/components/PageHeader";
import { useServices } from "@/hooks/use-services";
import { Wifi, Cpu, ClipboardCheck, Server, Globe, Shield } from "lucide-react";

const iconMap: Record<string, any> = {
  "wifi": Wifi,
  "cpu": Cpu,
  "check": ClipboardCheck,
  "server": Server,
  "globe": Globe,
  "shield": Shield,
};

export default function Services() {
  const { data: services, isLoading } = useServices();

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Our Services" 
        subtitle="End-to-end technology solutions tailored for the digital age." 
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          {isLoading ? (
            <div className="space-y-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-slate-100 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="space-y-24">
              {services?.map((service, index) => {
                const Icon = iconMap[service.icon.toLowerCase()] || Cpu;
                return (
                  <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                    <div className="flex-1">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="prose text-muted-foreground">
                        <p>{service.fullContent}</p>
                      </div>
                    </div>
                    
                    <div className="flex-1 w-full">
                       <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-slate-900 group">
                         {/* Placeholder image logic based on index */}
                         <img 
                           src={index === 0 
                             ? "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80" // Wireless
                             : index === 1 
                               ? "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80" // Chip/IoT
                               : "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" // Testing
                           }
                           alt={service.title}
                           className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                       </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
