import { PageHeader } from "@/components/PageHeader";
import { CheckCircle2, Target, Users, Zap, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { color } from "framer-motion";
import whoweare from "../../public/who_we_are.jpg"


export default function Whyus() {
    return (
        <div className="min-h-screen">
            <PageHeader
                title="Why Us"
                subtitle="We are a team of engineers, innovators, and dreamers building the connected future."
            />

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div><h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Why We Stand Out</h2>
                            <div className="prose prose-lg text-muted-foreground text-slate-900">
                                <p>
                                    Proven enterprise and telecom domain expertise
                                    Reliability, availability, and performance-driven delivery
                                    Security-first and compliance-aligned approach
                                    Strong documentation, governance, and audit readiness
                                    Long-term, outcome-oriented partnerships
                                <p>.    Ensure current and future requirements are met with cutting-edge solutions.</p>    
                                <p>.    Deliver the ideal solution for each client, no matter their location</p> 
                                </p>
                                {/* <p className="mt-4" style={{ color: 'red' }}>
                                    With its innovative solutions and solution accelerators in the areas of Wireless and IoT,
                                    we understand that there has been a paradigm shift in the way business is being conducted and
                                    in this digital era where customer experience is paramount, we are helping enterprises make optimum
                                    use of digital solutions and services to increase their customer centricity.
                                </p>
                                <p>
                                    We collaborate with global OEMs, system integrators and large enterprises to design, build, and
                                    support mission-critical platforms requiring high availability, security, and long-term stability.
                                    Our delivery approach combines corporate governance with telecom-grade engineering discipline.
                                </p> */}
                            </div>

                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">

                            <img
                                src="/who_we_are.jpg"

                                alt="Who we are"
                                className="w-full object-cover h-[500px]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Organization Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                                Our Organization
                            </h2>
                            <p>
                                Ridenext Software Solutions Pvt. Ltd is a technology software solutions and
                                services provider organization with best-in-class domain experts, system architects,
                                and engineering teams delivering secure, scalable, and high-performance solutions for enterprise and telecom environments.
                            </p>
                            <p className="mt-4" style={{ color: 'red' }}>
                                With its innovative solutions and solution accelerators in the areas of Wireless and IoT,
                                we understand that there has been a paradigm shift in the way business is being conducted and
                                in this digital era where customer experience is paramount, we are helping enterprises make optimum
                                use of digital solutions and services to increase their customer centricity.
                            </p>
                            <p>
                                We collaborate with global OEMs, system integrators and large enterprises to design, build, and
                                support mission-critical platforms requiring high availability, security, and long-term stability.
                                Our delivery approach combines corporate governance with telecom-grade engineering discipline.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/wireless">
                                    <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/5">
                                        Wireless Solutions <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </Link>
                                <Link href="/iot">
                                    <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary/5">
                                        IoT Platform <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                                alt="Organization"
                                className="w-full object-cover h-[500px]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border-none shadow-lg">
                            <CardContent className="pt-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                                <p className="text-muted-foreground">
                                    To have a talented 'hands-on' pool of engineers in Wireless, IoT, Cloud and Web Technologies domain and empower our employees, partners and clients to excel and grow together.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-lg">
                            <CardContent className="pt-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                                <p className="text-muted-foreground">
                                    A world where connectivity is seamless, intelligent, and ubiquitous, driving efficiency, innovation and sustainable growth.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-lg">
                            <CardContent className="pt-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Our Values</h3>
                                <p className="text-muted-foreground">
                                    Innovation, Integrity, and Customer Success are at the core of everything we do. We believe in collaborative growth and excellence.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>


        </div>
    );
}
