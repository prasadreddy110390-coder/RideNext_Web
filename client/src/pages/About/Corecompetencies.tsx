import { PageHeader } from "@/components/PageHeader";
import { CheckCircle2, Target, Users, Zap, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { color } from "framer-motion";
import { motion } from "framer-motion";
import corecompetencies from "../../public/corecompetencies.png"
import { useLocation } from "wouter";


export default function Corecompetencies() {
    return (
        <div className="min-h-screen">
            <PageHeader
                title="Core Competencies"
                subtitle=""
            />
            <section className="py-24 bg-slate-50">
                <div className=" container prose-xl px-4 md:px-6">
                                <p>
                                    At RideNext, our core competencies are rooted in deep technical expertise, disciplined execution, and an unwavering commitment to network excellence.
                                    In an industry defined by constant evolution — from 3G and 4G foundations to 5G expansion
                                    and the emergence of 6G — we position ourselves at the forefront of next-generation telecom engineering.
                                    Our strength lies in end-to-end Radio Access Network (RAN) capabilities.
                                </p>
                            </div>
                <div className="container mx-auto px-4 md:px-6 md:pt-10">
                    
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="prose prose-xl text-muted-foreground text-slate-900">
                                <p>
                                    We are rooted in deep technical expertise, disciplined execution, and an unwavering commitment to network excellence.
                                    In an industry defined by constant evolution — from 3G and 4G foundations to 5G expansion
                                    and the emergence of 6G — we position ourselves at the forefront of next-generation telecom engineering.
                                    Our strength lies in end-to-end Radio Access Network (RAN) capabilities. 
                                </p>
                                <p>
                                    We have the capability to manage legacy systems while enabling smooth transitions toward advanced architectures.
                                    This ability to integrate 3G, 4G, 5G, and evolving network frameworks ensures continuity, optimized spectrum utilization,
                                    and enhanced user experience. Our solutions are not isolated upgrades —they are strategic enhancements designed to
                                    strengthen overall network efficiency.
                                </p>
                                {/* <p>
                                    At RideNext, core competence is not defined by a single capability — it is defined by the integration of expertise,
                                    innovation, and accountability. We build networks that are resilient, scalable, and prepared for the future of connectivity.
                                    Through continuous learning, technological adaptation, and disciplined execution, we remain equipped to support the evolving demands of the global telecom landscape.
                                </p> */}
                            </div>

                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">

                            <img
                                src="/corecompetencies.png"

                                alt="Core Competecies"
                                className="w-full object-cover h-[500px]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                        </div>
                        
                    </div>
                    {/* <div className="prose prose-lg text-muted-foreground text-slate-900">
                                <p>
                                    Operational excellence is embedded in our project management methodologies. We combine standardized processes
                                    with adaptive execution models, allowing us to respond effectively to dynamic field conditions without compromising
                                    timelines or quality benchmarks. Every engagement is supported by meticulous documentation, rigorous testing protocols,
                                    and continuous performance monitoring.
                                </p>
                            </div> */}
                </div>
            </section>

        </div>
    );
}
