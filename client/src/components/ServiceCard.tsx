import { ArrowRight, Wifi, Cpu, ClipboardCheck, Server, Globe, Shield } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const iconMap: Record<string, any> = {
  "wifi": Wifi,
  "cpu": Cpu,
  "check": ClipboardCheck,
  "server": Server,
  "globe": Globe,
  "shield": Shield,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  const Icon = iconMap[icon.toLowerCase()] || Cpu;

  return (
    <div className={cn(
      "h-full transition-all duration-300 hover:-translate-y-2",
      index % 2 === 0 ? "lg:mt-8" : ""
    )}>
      <Card className="h-full border-none shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/5 bg-white overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
        
        <CardHeader>
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <Icon className="w-7 h-7" />
          </div>
          <CardTitle className="font-display text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </CardContent>
        <CardFooter>
          <Link href="/services">
            <div className="flex items-center gap-2 text-primary font-semibold text-sm cursor-pointer group/link">
              Learn more 
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </div>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
