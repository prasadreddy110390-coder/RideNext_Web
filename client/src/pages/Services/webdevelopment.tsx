import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Database as DatabaseIcon, TrendingUp, Shield } from "lucide-react";
import { Code2, Layers, Server, Globe, Workflow, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export const FallingParagraph = ({ text }: { text: string }) => {

    return (
        <motion.p
            initial={{
                y: -50,
                opacity: 0,
                filter: "blur(6px)",
            }}
            animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
            }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
            className="text-gray-600 leading-relaxed"
        >
            {text}
        </motion.p>
    );
};
type CardType = {
    icon: React.ReactNode;
    title: string;
    color: string;
    border: string;
    items: string[];
};
const cards: CardType[] = [
    {
        icon: <Code2 />,
        title: "Frontend Technologies",
        color: "text-indigo-600",
        border: "border-indigo-200",
        items: [
            "JavaScript – Interactive UI",
            "AngularJS – SPA development",
            "React – Component-based UI"
        ]
    },
    {
        icon: <Server />,
        title: "Backend Technologies",
        color: "text-green-600",
        border: "border-green-200",
        items: [
            ".NET – Enterprise framework",
            "Java – Scalable systems",
            "PHP – Web platforms",
            "Node.js – Event-driven backend"
        ]
    },
    {
        icon: <Layers />,
        title: "Web Services & APIs",
        color: "text-purple-600",
        border: "border-purple-200",
        items: [
            "RESTful API development",
            ".NET, Java, PHP, Node.js",
            "Secure integrations",
            "Third-party connectivity"
        ]
    }
];
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

export default function webdevolpment() {
    return (
        <div className="min-h-screen">
            <PageHeader
                title="Web Development"
                subtitle="We make your thoughts on screen."
            />

            <section id="web-development" className="pt-12 bg-slate-50 scroll-mt-16 mb-6">
                <div className="container mx-auto px-4 md:px-8">

                    {/* Overview + Expertise */}
                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                        {[{
                            icon: <Globe className="text-blue-500 group-hover:rotate-6 transition" />,
                            title: "Overview",
                            content: `Enterprises face several unique and recurring challenges in custom software development,
                                      especially when solutions must scale, integrate with legacy systems, and support long-term business goals.
                                      Ensuring performance, security, and adaptability is critical.`
                        },
                        {
                            icon: <Workflow className="text-indigo-500 group-hover:rotate-6 transition" />,
                            title: "Expertise",
                            content: `At RideNext, we collaborate with global enterprises and technology providers,
                                      delivering scalable architectures, modernizing legacy platforms, and building high-performance web applications.`
                        }].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.7 + i * 0.3, // 👈 starts AFTER PageHeader animation
                                    duration: 0.6,
                                }}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                            >
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                    {item.icon} {item.title}
                                </h3>

                                <p className="leading-relaxed text-lg text-black-600">
                                    <FallingParagraph text={item.content} />
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Technologies */}
                    <div className="grid lg:grid-cols-3 gap-6 mb-10">
                        {cards.map((card, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                animate="visible"
                                variants={cardVariants}
                                whileHover={{ scale: 1.05, y: -8 }}
                                className={`bg-white p-6 rounded-xl shadow-md border ${card.border} hover:shadow-2xl transition group`}
                            >
                                <h4 className={`text-xl font-semibold mb-4 flex items-center gap-2 ${card.color}`}>
                                    <span className="group-hover:rotate-12 transition">{card.icon}</span>
                                    {card.title}
                                </h4>
                                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                    {card.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Value Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.01 }}
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 rounded-xl shadow-lg"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-center flex justify-center items-center gap-2">
                            <ShieldCheck /> What This Means for Your Project
                        </h3>

                        <div className="mb-6 grid md:grid-cols-2 gap-6 text-lg">
                            <ul className="space-y-3">
                                <li>✔️ Full-stack development (UI + backend)</li>
                                <li>✔️ Scalable, high-performance architecture</li>
                                <li>✔️ Modern responsive frameworks</li>
                            </ul>

                            <ul className="space-y-3">
                                <li>✔️ API-first integration approach</li>
                                <li>✔️ Secure & maintainable systems</li>
                                <li>✔️ Future-ready technology stack</li>
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
