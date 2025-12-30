import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Code2, Zap, Shield } from "lucide-react";

export default function ASNDecoder() {
  return (
    <div className="min-h-screen">
      <PageHeader 
        title="ASN Decoder" 
        subtitle="Advanced Abstract Syntax Notation decoder for enterprise applications." 
      />

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Link href="/product">
              <Button variant="outline" size="sm" className="gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to Products
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Powerful ASN Decoding</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our ASN Decoder provides comprehensive Abstract Syntax Notation (ASN.1) decoding capabilities for telecommunications, healthcare, and enterprise applications.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Parse, validate, and analyze complex ASN.1 structures with support for DER, BER, and PER encodings.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl p-8 border border-primary/20 h-96 flex items-center justify-center">
                <Code2 className="w-24 h-24 text-primary/30" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-8">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                {
                  icon: Code2,
                  title: "Multi-Format Support",
                  description: "Support for DER, BER, PER, and XER encoding formats"
                },
                {
                  icon: Zap,
                  title: "High Performance",
                  description: "Optimized decoding engine for large-scale data processing"
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Secure parsing with comprehensive error handling"
                },
                {
                  icon: Code2,
                  title: "API Integration",
                  description: "RESTful API and SDK for easy integration"
                },
              ].map((feature, i) => (
                <Card key={i} className="border-none shadow-md">
                  <CardContent className="pt-8">
                    <feature.icon className="w-10 h-10 text-primary mb-4" />
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Use Cases</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Telecom protocol analysis and debugging</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Healthcare DICOM message processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Security certificate validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Network protocol testing and analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
