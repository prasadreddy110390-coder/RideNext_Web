import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Cpu, TrendingUp, Gauge, Hand } from "lucide-react";
import Simulator from "../../../public/bluefox/simulator.png";
import Caseerror from "../../../public/bluefox/caseerror.png";
import Engine from "../../../public/bluefox/engine.png";
import Flowchart from "../../../public/bluefox/flowchart.png";
import Protocol1 from "../../../public/bluefox/image (4).png";
import Protocol2 from "../../../public/bluefox/image (5).png";
import Sampleue1 from "../../../public/bluefox/image (6).png";
import Sampleue2 from "../../../public/bluefox/image (7).png";
import { MdNetworkCell } from "react-icons/md";
import { GiAerialSignal } from "react-icons/gi";
import { useLocation } from "wouter";

export default function BLUEFOX() {
    return (
        <div className="min-h-screen">
            <PageHeader
                title="Innovative Products, Scalable Services & Real-World  Impact."
                subtitle=""
            />

            <section className="bg-white py-10 bg-slate-50">
                <div className="container prose-xl px-4 md:px-6">
                    <h2 className="text-4xl text-center font-bold text-black-900 mb-6">
                        BLUEFOX – Advanced Wireless Test Simulator
                    </h2>
                    {/* ========================= OVERVIEW ========================= */}
                    <div className="bg-slate-50 rounded-xl p-4 md:p-6 shadow-sm">

                        {/* Overview */}
                        <div className="mb-2">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                                Overview
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                In today’s fast-paced business landscape, the absence of the Blue Fox AWTS tool results in complex and insufficient operations, impacting efficiency, cost, quality, and time-to-market.
                            </p>
                        </div>

                        {/* 8 Key Challenges */}
                        <div className="grid md:grid-cols-2 gap-6">

                            {[
                                {
                                    title: "1. Heavy Dependence on Physical Test Beds",
                                    description:
                                        "Without BlueFox AWTS, testing relies heavily on real network hardware, simulators, and lab setups, which:",
                                    points: [
                                        "Increases capital and operational costs",
                                        "Limits test coverage due to hardware availability",
                                        "Delays testing cycles when lab resources are shared"
                                    ]
                                },
                                {
                                    title: "2. Limited Protocol Coverage & Scenario Validation",
                                    description:
                                        "Manual or basic testing tools cannot easily simulate:",
                                    points: [
                                        "Complex 3GPP signalling flows",
                                        "Rare corner and failure scenarios",
                                        "Inter-RAT mobility, handovers, and error conditions"
                                    ],
                                    conclusion:
                                        "This results in undetected protocol issues surfacing only in live networks."
                                },
                                {
                                    title: "3. Slow Test Case Creation and Execution",
                                    description:
                                        "Without a GUI-based test case editor:",
                                    points: [
                                        "Test cases must be written manually in scripts or code",
                                        "Test creation takes longer and requires specialized expertise"
                                    ],
                                    conclusion:
                                        "Changes in standards or features demand extensive rework."
                                },
                                {
                                    title: "4. Poor Test Automation & Reusability",
                                    description:
                                        "In the absence of BlueFox AWTS:",
                                    points: [
                                        "Regression testing becomes time-consuming and error-prone",
                                        "Test cases are not easily reusable across releases",
                                        "Automation coverage remains low, impacting delivery timelines"
                                    ]
                                },
                                {
                                    title: "5. Difficulty in Early Defect Detection",
                                    description:
                                        "Without protocol-level simulation:",
                                    points: [
                                        "Defects are detected late in system or field testing",
                                        "Root cause analysis becomes complex and time-consuming",
                                        "Fixing issues post-deployment significantly increases cost"
                                    ]
                                },
                                {
                                    title: "6. Limited Visibility into Protocol Behavior",
                                    description:
                                        "Conventional testing lacks:",
                                    points: [
                                        "Clear visibility into message sequences and state transitions",
                                        "Easy validation of expected vs actual signaling behavior"
                                    ],
                                    conclusion:
                                        "This makes debugging and compliance verification difficult."
                                },
                                {
                                    title: "7. Challenges in 5G & Future-Ready Testing",
                                    description:
                                        "Modern networks (5G, vRAN, O-RAN) require:",
                                    points: [
                                        "Rapid validation of new features",
                                        "Simulation of evolving standards"
                                    ],
                                    conclusion:
                                        "Without BlueFox AWTS, teams struggle to keep pace with fast-evolving wireless technologies."
                                },
                                {
                                    title: "8. Higher Time-to-Market",
                                    description:
                                        "The cumulative effect of manual testing, limited automation, and late defect detection leads to:",
                                    points: [
                                        "Longer development cycles",
                                        "Delayed product launches",
                                        "Reduced competitiveness in the telecom market"
                                    ]
                                }
                            ].map((section, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition duration-300"
                                >
                                    <h3 className="text-xl font-semibold text-black-800 mb-3">
                                        {section.title}
                                    </h3>

                                    <p className="text-black-600 text-lg mb-3">
                                        {section.description}
                                    </p>

                                    <ul className="list-disc list-inside space-y-2 text-black-600 text-lg leading-relaxed">
                                        {section.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>

                                    {section.conclusion && (
                                        <p className="text-black-600 text-lg mt-3">
                                            {section.conclusion}
                                        </p>
                                    )}
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                {/* Engine and Flow Chart Editor with 2 Images */}
                <div className="bg-slate-50 rounded-xl p-6 md:p-10 shadow-sm">

                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Part A */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300 flex flex-col justify-between">

                            <div>
                                <h2 className="text-2xl font-semibold text-black-800 mb-4">
                                    Deployment
                                </h2>

                                <ul className="space-y-3 text-black-700 text-lg leading-relaxed">
                                    <li>
                                        ◘ RideNext's Bluefox is a GUI-based test tool to test 3GPP protocols.
                                    </li>
                                    <li>
                                        ◘ The test tool can execute various scenarios in a simple-to-use Execution Window.
                                    </li>
                                    <li>
                                        ◘ The test tool aims to minimize the time and effort:
                                        <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-black-600">
                                            <li>Quick deployment of the tool</li>
                                            <li>Easy to create new scenarios</li>
                                            <li>Quick and easy to upgrade to different versions of the 3GPP specifications</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            {/* Image */}
                            <div className="flex justify-center">
                                <img
                                    src={Simulator}
                                    alt="Bluefox GUI"
                                    className="w-96 rounded-3xl shadow-xl border"
                                />
                            </div>

                        </div>


                        {/* Part B */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300 flex flex-col justify-between">

                            <div>
                                <h2 className="text-2xl font-semibold text-black-800 mb-4">
                                    Engine
                                </h2>

                                <ul className="space-y-3 text-black-700 text-lg leading-relaxed">
                                    <li>
                                        ◘ The Bluefox AWTS Engine is the launcher for the various functionalities of the tool.
                                    </li>
                                    <li>
                                        ◘ The engine can launch the various windows:
                                        <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-black-600">
                                            <li>
                                                <span className="font-medium text-black-800">Flow Chart Editor:</span>
                                                This window enables creating of test cases and scenarios.
                                            </li>
                                            <li>
                                                <span className="font-medium text-black-800">Case Editor:</span>
                                                This window enables executing and launching of scenarios.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            {/* Image */}
                            <div className="flex justify-center">
                                <img
                                    src={Engine}
                                    alt="Bluefox AWTS Engine"
                                    className="w-96 rounded-3xl shadow-xl border"

                                />
                            </div>

                        </div>

                    </div>
                </div>

                {/* Supported Protocols with Image */}
                <div className="relative bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] rounded-3xl p-10 shadow-2xl overflow-hidden">

                    {/* Glow Background Effect */}
                    <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
                    <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div>

                    <h2 className="relative text-3xl font-semibold text-center text-white mb-16 tracking-wide">
                        Supported Protocols
                    </h2>

                    <div className="relative grid md:grid-cols-2 gap-16">

                        {/* ================= LTE ================= */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 flex items-center justify-center 
                        bg-blue-500/20 text-blue-400 
                        backdrop-blur-md rounded-xl border border-blue-400/30">
                                    <MdNetworkCell size={24} />
                                </div>
                                <h3 className="text-2xl font-semibold text-blue-400 tracking-widest">
                                    LTE
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                                {["S1AP v15.5.0", "RRC v15.6.0", "X2AP v15.5.0"].map((item, i) => (
                                    <div
                                        key={i}
                                        className="bg-white/5 backdrop-blur-xl border border-blue-400/20
                       rounded-2xl p-6 text-center 
                       shadow-lg hover:shadow-blue-500/40
                       hover:-translate-y-2 transition duration-300"
                                    >
                                        <p className="text-blue-300 font-semibold text-lg">
                                            {item.split(" ")[0]}
                                        </p>
                                        <p className="text-gray-400 text-sm mt-1">
                                            {item.split(" ")[1]}
                                        </p>
                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* ================= 5G ================= */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 flex items-center justify-center 
                        bg-purple-500/20 text-purple-400 
                        backdrop-blur-md rounded-xl border border-purple-400/30
                        animate-pulse">
                                    <GiAerialSignal size={24} />
                                </div>
                                <h3 className="text-2xl font-semibold text-purple-400 tracking-widest">
                                    5G
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                                {[
                                    "NGAP v15.5.0",
                                    "F1AP v15.6.0",
                                    "E1AP v15.4.0",
                                    "XnAP v15.4.0"
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="bg-white/5 backdrop-blur-xl border border-purple-400/20
                       rounded-2xl p-6 text-center 
                       shadow-lg hover:shadow-purple-500/40
                       hover:-translate-y-2 transition duration-300"
                                    >
                                        <p className="text-purple-300 font-semibold text-lg">
                                            {item.split(" ")[0]}
                                        </p>
                                        <p className="text-gray-400 text-sm mt-1">
                                            {item.split(" ")[1]}
                                        </p>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>
                </div>

                {/* Specifications with Image */}
                <div className="bg-slate-50 rounded-2xl p-8 md:p-12 shadow-sm">

                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        {/* Left Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
                                BLUEFOX – AWTS Specifications
                            </h2>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                O-RAN open interfaces facilitate multi-vendor network deployments, enabling a more competitive supplier system, thus introducing a strong demand for conformance, interoperability, and performance testing for all these components.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Bluefox simulator can simulate the RAN nodes of O-DU, O-CU-CP, O-CU-UP along with AMF and UPF for simulating and testing of the F1-C, F1-U, NG-C and NG-U interfaces.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                For testing the O-CU (CU-CP and CU-UP), the BlueFox tool can simulate the DU, AMF and UPF.
                            </p>

                            <div className="bg-white border border-gray-200 rounded-xl p-6 mt-6 space-y-3 shadow-sm">
                                <p className="text-gray-700">
                                    <span className="font-semibold text-gray-900">DU-Sim:</span> Simulates the DU for the F1-C and F1-U interfaces towards the CU-CP and CU-UP respectively.
                                </p>

                                <p className="text-gray-700">
                                    <span className="font-semibold text-gray-900">AMF-Sim:</span> Simulates the AMF for the NG-C interface towards the CU-CP.
                                </p>

                                <p className="text-gray-700">
                                    <span className="font-semibold text-gray-900">UPF-Sim:</span> Simulates the UPF for the NG-U interface towards the CU-UP.
                                </p>

                                <p className="text-gray-700">
                                    The simulators are highly scalable and can emulate multiple DUs, AMFs and UPFs as required and is targeted to test the scalability of the architectures and functionalities of CU-CP and CU-UP.
                                </p>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center">
                            <img
                                src={Flowchart}
                                alt="Bluefox AWTS Architecture"
                                className="w-full max-w-xl rounded-2xl shadow-xl border border-gray-200"
                            />
                        </div>

                    </div>
                </div>

                {/* Product Capabilities with Image */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-14 shadow-sm">

                    <div className="grid md:grid-cols-2 gap-12 items-start">

                        {/* Left Image */}
                        <div className="flex flex-col gap-8">
                            <img
                                src={Protocol1}
                                alt="Bluefox Product Capabilities"
                                className="w-full max-w-xl rounded-2xl shadow-xl border border-gray-200"
                            />
                            <img
                                src={Protocol2}
                                alt="Bluefox Performance"
                                className="w-full rounded-2xl shadow-xl border border-gray-200"
                            />
                        </div>

                        {/* Right Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
                                Product Capabilities
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">

                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    GUI based tool with capability to simulate multiple scenarios quickly.
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    Supports NGAP, NAS, RRC, F1AP and GTPv1 protocols to simulate F1-C/U and NG-C/U interfaces.
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    Supports easy extension for multiple ASN.1 protocols.
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    Ready-to-use scenario pack: Register / Deregister / Authentication / Session Establishment and Release.
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    Linux-based Docker images in a Kubernetes environment.
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    Simulation of multiple sessions across multiple emulated DUs, AMFs and UPFs.
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    Simulation to achieve 200 calls per second with 100 UEs on 1 DU.
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    Number of instances of DUs, AMFs and UPFs can be increased as desired to test the CU-CP and CU-UP.
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    Simulates network behaviour and message flows.
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    Supports protocol testing and system validation.
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                                    Enables early defect detection and performance benchmarking.
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                {/* Hardware with Image */}
                <div className="bg-slate-50 rounded-2xl p-8 md:p-12 shadow-sm">

                    {/* Section Header */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8 text-center">
                        Hardware Specifications
                    </h2>

                    {/* Description */}
                    <div className="mb-8 grid md:grid-cols-2 gap-8">

                        {/* Control Node */}
                        <div className="bg-white border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">

                            <h3 className="text-xl font-semibold text-blue-700 mb-4">
                                Control Node
                            </h3>

                            <p className="text-gray-600 mb-4 text-lg">
                                Test case editor used for designing Call flow and generating scripts
                            </p>

                            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                                <li>Single instance will be required</li>
                                <li>4 CPUs</li>
                                <li>16GB RAM</li>
                                <li>x86 Server</li>
                                <li>Common Storage on host of 40GB for logging and stats</li>
                            </ul>

                        </div>


                        {/* Payload Node */}
                        <div className="bg-white border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">

                            <h3 className="text-xl font-semibold text-green-700 mb-4">
                                Payload Node
                            </h3>

                            <p className="text-gray-600 mb-4 text-lg">
                                O-DU / AMF Sim call processing container
                            </p>

                            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                                <li>Nodes can be scaled up according to need (number of O-DU and AMF instances)</li>
                                <li>2 CPUs</li>
                                <li>4GB RAM</li>
                                <li>x86 Server</li>
                                <li>Common Storage</li>
                            </ul>

                        </div>

                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
                            <thead className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                                <tr>
                                    <th className="py-3 px-6 text-left font-medium">Node Type</th>
                                    <th className="py-3 px-6 text-left font-medium">CPU</th>
                                    <th className="py-3 px-6 text-left font-medium">RAM</th>
                                    <th className="py-3 px-6 text-left font-medium">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-blue-50 transition duration-200">
                                    <td className="py-4 px-6 text-gray-800 font-medium">Control Node</td>
                                    <td className="py-4 px-6 text-gray-700">4 CPUs</td>
                                    <td className="py-4 px-6 text-gray-700">16GB RAM</td>
                                    <td className="py-4 px-6 text-gray-700">Single instance for test case editing</td>
                                </tr>
                                <tr className="hover:bg-green-50 transition duration-200">
                                    <td className="py-4 px-6 text-gray-800 font-medium">Payload Node</td>
                                    <td className="py-4 px-6 text-gray-700">2 CPUs</td>
                                    <td className="py-4 px-6 text-gray-700">4GB RAM</td>
                                    <td className="py-4 px-6 text-gray-700">Scalable based on number of O-DU and AMF instances</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                {/* Business Value with Image */}
                <div className="bg-slate-50 rounded-2xl p-8 md:p-12 shadow-sm">

                    <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">
                        Business Value
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300 text-center">
                            <p className="text-xl font-semibold">Lower Testing Costs</p>
                        </div>

                        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300 text-center">
                            <p className="text-xl font-semibold">Reduced Production Risks</p>
                        </div>

                        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300 text-center">
                            <p className="text-xl font-semibold">Faster Go-to-Market</p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
