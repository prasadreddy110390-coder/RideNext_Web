import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import ceoImg from "@assets/stock_images/ceo.png";
import ctoImg from "@assets/stock_images/businessman_portrait_d1e4a1a3.jpg";
import cooImg from "@assets/stock_images/businesswoman_portra_22d803b0.jpg";

const managers = [
  {
    name: "Nanibabu Mutte",
    position: "Chief Executive Officer",
    bio: "Visionary leader with 20+ years in technology and telecommunications industry.",
    image: ceoImg
  },
  {
    name: "Technology Director",
    position: "Chief Technology Officer",
    bio: "Expert in wireless protocols and IoT architecture with extensive R&D experience."
  },
  {
    name: "Operations Manager",
    position: "Chief Operations Officer",
    bio: "Proven track record in scaling technology teams and delivering enterprise solutions."
  },
];

export default function Management() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Management" 
        subtitle="Meet the visionary leaders driving RideNext forward." 
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Link href="/about">
              <Button variant="outline" size="sm" className="gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to About
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {managers.map((manager, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="pt-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-cyan-500 mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-center mb-2">{manager.name}</h3>
                  <p className="text-sm text-primary font-semibold text-center mb-4">{manager.position}</p>
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">
                    {manager.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
