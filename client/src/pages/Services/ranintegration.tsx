import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Database as DatabaseIcon, TrendingUp, Shield } from "lucide-react";
import { Radio, Network, Zap, Layers, Settings, Cpu, Activity, ShieldCheck, } from "lucide-react";



export default function ranintegration() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <PageHeader title="RAN Integration" subtitle="" />

            <section className="px-6 py-10 space-y-12">

                {/* Overview */}
                <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                        Overview
                    </h2>
                    {/* Header */}
                <div className="w-full bg-gradient-to-r from-blue-350 to-indigo-450 border border-red-500 mb-6 rounded-2xl p-6 shadow-sm">
                    <p className="text-black-700 text-lg leading-relaxed">
                        Radio Access Network (RAN) integration is a foundational activity in
                        the telecom industry, ensuring that mobile networks operate
                        efficiently, reliably, and at scale—especially in the era of 4G, 5G,
                        and Open RAN.
                    </p>
                </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {overviewItems.map((item, index) => (
                            <Card
                                key={index}
                                className={`rounded-2xl shadow-md hover:shadow-xl transition border ${item.border} bg-gradient-to-br ${item.bg}`}
                            >
                                <CardContent className="p-5 space-y-3">
                                    <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                                    <h3 className="font-semibold text-xl text-black-800">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg text-black-600">{item.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Expertise */}
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 rounded-2xl p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-indigo-600 rounded-full"></span>
                        Expertise
                    </h2>

                    <ul className="list-disc pl-6 space-y-2 text-black-700 text-lg">
                        <li>
                            Integrating Remote Radio Unit (RRU) with Distributed Unit (DU) which is part of Base Band Unit (BBU) and bringing up the Fronthaul interface (RRU-DU).
                        </li>
                        <li>Lab IOT support and TAC3 support for Radios</li>
                        <li>
                            ASN.1 message decoding for telecom protocols (e.g., RRC, S1AP, F1AP) useful in RAN signaling analysis.
                        </li>
                        <li>
                            Protocol captures and procedure verification for CU/DU/RAN interactions. These capabilities help engineers validate and integrate RAN components correctly and troubleshoot complex inter-node message flows — a key part of RAN integration and interoperability.
                        </li>
                    </ul>
                </div>

                {/* Interoperability */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-purple-600 rounded-full"></span>
                        Interoperability Test Support
                    </h2>

                    <p className="text-black-600 text-lg mb-4">
                        RideNext supports interoperability and field validation testing for LTE/5G nodes and protocols. In RAN integration projects, operators and integrators must ensure that different RAN elements (e.g., CU, DU, RU, Core interfaces) work together reliably. RideNext’s interoperability testing services help verify this before live deployments.
                    </p>
                </div>

                {/* Lab IOT & TAC3 */}
                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="rounded-2xl shadow-md hover:shadow-xl transition border border-blue-100 bg-gradient-to-br from-blue-50 to-white">
                        <CardContent className="p-5">
                            <h3 className="text-xl font-semibold mb-3 text-blue-700">
                                Scope of Lab IOT Support:
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-black-700 text-lg">
                                <li>
                                    Commissioning of Radio units, checking physical connection from Radio (converting OTA to conducted type).
                                </li>
                                <li>Performing Manual Software Upgrade.</li>
                                <li>
                                    Providing tools support, troubleshooting S/M/CU plane issues.
                                </li>
                                <li>Supporting Mplane features testing.</li>
                                <li>Provide Auto-Commissioning verification support.</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl shadow-md hover:shadow-xl transition border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white">
                        <CardContent className="p-5">
                            <h3 className="text-xl font-semibold mb-3 text-indigo-700">
                                Scope of TAC3 Support:
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-black-700 text-lg">
                                <li>Handling Field query, Field incident reported from production site.</li>
                                <li>Suggesting possible workaround to resolve the issues.</li>
                                <li>Support CR maintenance window.</li>
                                <li>Providing RMA support in case of faulty Hardware.</li>
                                <li>Supporting new radio integration in case of RMA radio replacement.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Engineering Services */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-2xl p-6 shadow-sm">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-pink-600 rounded-full"></span>
                        Engineering Services for Wireless Domain
                    </h2>

                    <ul className="list-disc pl-6 space-y-2 text-black-700 text-lg">
                        <li>Functional specification validation,</li>
                        <li>RAN protocol testing frameworks,</li>
                        <li>Support for custom network integration tasks and test automation.</li>
                    </ul>
                </div>

            </section>
        </div>
    );
}
const overviewItems = [
    {
        icon: Network,
        title: "End-to-End Network Functioning",
        desc: "Seamless integration across radios, baseband, transport, and core for reliable service delivery.",
        bg: "from-blue-50 to-white",
        border: "border-blue-200",
        iconColor: "text-blue-600",
    },
    {
        icon: Activity,
        title: "Performance & QoE",
        desc: "Optimized latency, throughput, and handovers improving user experience.",
        bg: "from-green-50 to-white",
        border: "border-green-200",
        iconColor: "text-green-600",
    },
    {
        icon: Zap,
        title: "Faster Rollouts",
        desc: "Accelerated deployment, configuration, and commissioning of network sites.",
        bg: "from-yellow-50 to-white",
        border: "border-yellow-200",
        iconColor: "text-yellow-600",
    },
    {
        icon: Layers,
        title: "Multi-Vendor Enablement",
        desc: "Ensures interoperability across vendors, supporting Open RAN adoption.",
        bg: "from-purple-50 to-white",
        border: "border-purple-200",
        iconColor: "text-purple-600",
    },
    {
        icon: Settings,
        title: "Cost Efficiency",
        desc: "Reduces CAPEX and OPEX through streamlined integration processes.",
        bg: "from-pink-50 to-white",
        border: "border-pink-200",
        iconColor: "text-pink-600",
    },
    {
        icon: Cpu,
        title: "5G & Future Ready",
        desc: "Supports Massive MIMO, slicing, URLLC, and edge computing.",
        bg: "from-indigo-50 to-white",
        border: "border-indigo-200",
        iconColor: "text-indigo-600",
    },
    {
        icon: ShieldCheck,
        title: "Operational Simplicity",
        desc: "Centralized monitoring and fault management for higher availability.",
        bg: "from-teal-50 to-white",
        border: "border-teal-200",
        iconColor: "text-teal-600",
    },
    {
        icon: Radio,
        title: "Scalability",
        desc: "Enables easy expansion and evolution toward 5G-Advanced and 6G.",
        bg: "from-orange-50 to-white",
        border: "border-orange-200",
        iconColor: "text-orange-600",
    },
];

