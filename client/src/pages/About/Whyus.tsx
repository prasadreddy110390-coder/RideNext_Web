import { PageHeader } from "@/components/PageHeader";
import { CheckCircle2, Target, Users, Zap, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { color } from "framer-motion";
import whywestandout from "@assets/whywestandout.png"
import whyworkwithus from "@assets/whyworkwithus.png"
import CollaborativeApproach from "@assets/CollaborativeApproach.png"
import WorkLifeBalanceFlexibility from "@assets//Work-LifeBalance&Flexibility.png"
import { useLocation } from "wouter";

export default function Whyus() {
    return (
        <div className="min-h-screen">
            <PageHeader
                title="Why Us"
                subtitle=""
                // We are a team of engineers, innovators, and dreamers building the connected future.
            />
            {/* ================= Why We Stand Out ================= */}
            <section className="py-10 bg-slate-50">
                <div className=" container prose-xl px-4 md:px-6">
                    <h2 className="text-center">Why We Stand Out</h2>
                    <p>
                        At RideNext, standing out is not about claiming excellence — it is about consistently delivering it.
                        In an industry defined by rapid technological evolution, tight deployment timelines, and uncompromising
                        quality standards, we differentiate ourselves through depth of expertise, execution discipline, and a future-ready mindset.
                    </p>
                </div>
                <div className="container mx-auto px-4 md:px-6 md:pt-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="prose prose-xl text-muted-foreground text-slate-900">
                            <p>
                                RideNext was built on the understanding that telecom and wireless engineering demand more than technical capability.
                                They require precision, accountability, and the ability to anticipate challenges before they surface.
                                Our teams combine strong domain knowledge in RAN integration, CU/DU deployments, network optimization,
                                and end-to-end telecom execution with a structured, process-driven approach.
                            </p>
                            <p>
                                We stand out because we combine technical expertise, disciplined execution, adaptive thinking, and partnership-driven
                                values into every project we undertake. For us, success is not defined by project completion — it is defined by the
                                performance, reliability, and trust that continue long after deployment.
                            </p>
                        </div>
                        <img
                            src={whywestandout}
                            className="rounded-2xl shadow-2xl h-[450px] object-cover "
                        />
                    </div>
                </div>
            </section>
            {/* ================= Why Work With Us ================= */}
            <section className="py-24 bg-slate-50">
                <div className=" container prose-xl px-4 md:px-6">
                    <h2 className="text-center">Why Work With Us</h2>
                    <p>
                        Choosing the right partner in telecom and wireless engineering is not simply a business decision
                        — it is a strategic one. At RideNext, we understand that our clients rely on us to deliver networks
                        that power connectivity, enable growth, and sustain performance in an increasingly demanding digital landscape.
                        That responsibility defines how we work.
                    </p>
                </div>
                <div className="container mx-auto px-4 md:px-6 md:pt-10 ">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <img
                            src={whyworkwithus}
                            className="rounded-2xl shadow-2xl h-[450px] object-cover"
                        />
                        <div className="prose prose-xl text-muted-foreground text-slate-900">
                            <p>
                                RideNext brings together technical depth, operational discipline, and a solution-oriented mindset to every engagement.
                                We approach each project with clarity of purpose — to deliver outcomes that are efficient, scalable, and aligned with
                                long-term network evolution. Whether it involves RAN integration, CU/DU deployment, optimization, or end-to-end execution,
                                our focus remains consistent: precision in planning, excellence in execution, and accountability in delivery.
                            </p>
                            <p>
                                What makes working with RideNext different is our partnership approach. We do not position ourselves as external vendors;
                                we function as an extension of your team. We invest time in understanding your operational priorities, performance benchmarks,
                                and business timelines so that our solutions are not only technically robust but commercially meaningful.

                            </p>
                        </div>

                    </div>
                </div>
            </section>
            {/* ================= Collaborative Approach ================= */}
            <section className="py-24 bg-slate-50">
                <div className=" container prose-xl px-4 md:px-6">
                    <h2 className="text-center">Collaborative Approach</h2>
                    <p>
                        At RideNext, collaboration is not a stage in the process — it is the foundation of how we operate.
                        In the telecom and wireless engineering ecosystem, success depends on seamless coordination between stakeholders,
                        technologies, and execution teams. We recognize that sustainable results are achieved when expertise, transparency,
                        and shared accountability come together with clarity of purpose.
                    </p>
                </div>
                <div className="container mx-auto px-4 md:px-6 md:pt-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="prose prose-xl text-muted-foreground text-slate-900">
                            <p>
                                Our collaborative approach begins with listening. Before proposing solutions, we invest time in understanding our clients’
                                technical landscapes, operational constraints, and long-term objectives. This allows us to align our strategies not only with
                                immediate project requirements but also with broader business goals. Every engagement is shaped through open dialogue, mutual trust, and clearly defined expectations.
                            </p>
                            <p>
                                RideNext functions as an integrated extension of our clients’ teams. From planning and design to deployment and optimization,
                                we maintain continuous communication and cross-functional alignment. This interconnected approach minimizes risks,
                                accelerates timelines, and enhances overall performance outcomes.
                            </p>
                        </div>
                        <img
                            src={CollaborativeApproach}
                            className="rounded-2xl shadow-2xl h-[450px] object-cover "
                        />
                    </div>
                </div>
            </section>
            {/* =================Work-Life Balance & Flexibility ================= */}
            <section className="py-24 bg-slate-50">
                <div className=" container prose-xl px-4 md:px-6">
                    <h2 className="text-center">Work-Life Balance & Flexibility</h2>
                    <p>
                        At RideNext, we believe that sustainable performance begins with sustainable people. In a fast-paced industry such as
                        telecom and wireless engineering, where precision, timelines, and operational excellence are critical, we recognize that
                        long-term success depends on maintaining balance, clarity, and well-being within our teams.
                    </p>
                    <p>
                        Work-life balance at RideNext is not treated as a benefit — it is a responsibility. We understand that high performance
                        cannot be sustained without personal stability and mental focus. Our approach is built on mutual trust, accountability,
                        and respect for individual commitments. By fostering a culture where outcomes matter more than rigid structures,
                        we enable our professionals to manage responsibilities effectively while maintaining productivity and quality standards.
                    </p>
                </div>
                <div className="container mx-auto px-4 md:px-6 md:pt-10 ">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <img
                            src={WorkLifeBalanceFlexibility}
                            className="rounded-2xl shadow-2xl h-[450px] object-cover"
                        />
                        <div className="prose prose-xl text-muted-foreground text-slate-900">

                            <p>
                                Flexibility is embedded in the way we operate. We encourage structured planning, transparent communication, and proactive workload
                                management to ensure that professional expectations are clear and achievable. Where project dynamics permit, we promote adaptable
                                schedules and collaborative planning to help employees maintain equilibrium between their professional and personal priorities.
                            </p>
                            <p>
                                At RideNext, leadership plays a critical role in reinforcing this philosophy. Managers are encouraged to engage in open dialogue
                                with their teams, anticipate workload challenges, and support balanced execution strategies. By creating an environment where
                                concerns can be addressed constructively, we ensure that performance pressure does not translate into burnout.

                            </p>
                        </div>

                    </div>
                </div>
            </section>
            {/* <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 place-items-center">
                    <img
                        src={WorkLifeBalanceFlexibility}
                        className="rounded-2xl shadow-2xl h-[400px] object-cover"
                    />

                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl md:text-6xl font-bold mb-6">
                            Work-Life Balance & Flexibility
                        </h2>

                        <ul className="text-2xl space-y-6 mb-10 space-y-4 mb-8">
                            {[
                                "Hybrid/remote work options",
                                "Flexible working hours ",
                                "Respect for personal time",
                                "No unnecessary weekend work",
                            ].map((item) => (

                                <li key={item} className="flex gap-3 items-center group">
                                    <ArrowRight className="text-primary w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    <span>{item}</span>
                                </li>

                            ))}
                            <li className="animate-blink italic" style={{ fontWeight: 'bold' }}>“We respect deadlines, not late nights”</li>
                        </ul>


                    </div>

                </div>
            </section> */}


            {/* =================Engagement Model =================
            <section className="py-24 bg-slate-50">
                <div className=" container prose-xl px-4 md:px-6">
                    <h2 className="text-center">Engagement Model</h2>
                    <p>
                        At RideNext, we recognize that every organization operates with unique priorities, timelines, and operational frameworks.
                        A one-size-fits-all approach does not deliver sustainable results in the dynamic telecom and IT landscape.
                        Our engagement models are therefore designed to provide flexibility, transparency, and alignment — ensuring that each
                        partnership is structured to achieve measurable and strategic outcomes.
                    </p>
                    <p>
                        Our philosophy is centered on adaptability without compromising accountability. Whether supporting large-scale network deployments,
                        specialized integration programs, IT staff augmentation, or long-term operational initiatives, we tailor our engagement structure
                        to match the scope, complexity, and pace of the project. This ensures that our clients retain control, visibility, and confidence throughout the collaboration.
                    </p>
                </div>
                <div className="container mx-auto px-4 md:px-6 md:pt-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="prose prose-xl text-muted-foreground text-slate-900">
                            <p>
                                RideNext offers scalable engagement structures that range from project-based execution to dedicated team models and strategic
                                long-term partnerships. For defined deliverables and milestone-driven initiatives, we operate with structured governance,
                                clear timelines, and performance benchmarks that ensure disciplined execution. For evolving or innovation-focused programs,
                                we provide flexible resource and delivery models that allow rapid adjustments as requirements change.
                            </p>
                            <p>
                                Transparency and governance form the foundation of our engagement approach. Every model is supported by clearly defined roles,
                                communication channels, reporting mechanisms, and performance indicators. This structured oversight ensures that expectations are aligned,
                                risks are proactively managed, and progress remains consistent with business objectives.
                            </p>
                        </div>
                        <img
                            src={CollaborativeApproach}
                            className="rounded-2xl shadow-2xl h-[450px] object-cover "
                        />
                    </div>
                </div>
            </section> */}

        </div>
    );
}
