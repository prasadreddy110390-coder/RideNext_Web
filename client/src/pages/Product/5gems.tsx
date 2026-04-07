import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Cpu, TrendingUp, Gauge } from "lucide-react";
import emsarchitecture from "@assets//ems-architecture.png"
import performancedashboard from "@assets//ems-architecture.png"
import OnapLogo from "@assets/onaplogo.png";
import { GitBranch, Box, Cloud } from "lucide-react";
import { RadioTower, Settings, Monitor, ArrowRight, ArrowLeft, ArrowDown, ArrowUp, ChevronDown, Hand } from "lucide-react";
import { useState, useEffect } from "react";
import { Coffee, Code2, Database, Boxes, Server, Globe, Network } from "lucide-react";
import { ShieldCheck, Users, Settings2, Activity } from "lucide-react";
import Home from "../../../public/ems/home.png";
import Performance from "../../../public/ems/performance.png";

import Connect from "../../../public/ems/connect.png";
import Fault from "../../../public/ems/fault.png";
import Maintanance from "../../../public/ems/maintanance.png";
import { useLocation } from "wouter";
import BasicConfig from "../../../public/Config_Page/basic_config1.png";
import CellConfig from "../../../public/Config_Page/cell_config.png";
import CUCPConfig from "../../../public/Config_Page/cucp_config1.png";
import CUUPConfig from "../../../public/Config_Page/cuup_config.png";
import DUConfig from "../../../public/Config_Page/du_config.png";
import Summary from "../../../public/Config_Page/summaryPage.png";
import FaultManagementImage from "../../../public/Fault_App/fault_app1.png";
import Connect2 from "../../../public/Connect_App/connect_app2.png";
import PerformanceDashboard from "../../../public/PerformanceApp/Dashboard.png";
import PerformanceWidgets from "../../../public/PerformanceApp/Widgets.png";
import PerformanceKPIModule from "../../../public/PerformanceApp/KPI.png";
import PerformanceCounters from "../../../public/PerformanceApp/Counter3.png";
import PerformanceCreateKPI from "../../../public/PerformanceApp/create_kpi.png";
import PerfprmanceAddKPI from "../../../public/PerformanceApp/add_kpi.png";
import SoftwareManagementDashboard from "../../../public/Software_Management/Software_ManagementApp.png";
import SoftwareManagement from "../../../public/Software_Management/software_management2.png";
import SoftwareManagementOperations from "../../../public/Software_Management/software_operations.png";





export default function EMS() {
    const [previewImg, setPreviewImg] = useState<string | null>(null);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setPreviewImg(null);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    useEffect(() => {

        const scrollToHash = () => {
            const hash = window.location.hash;

            if (!hash) return;

            const element = document.querySelector(hash);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        };

        // run once when page loads
        scrollToHash();

        // run every time hash changes
        window.addEventListener("hashchange", scrollToHash);

        return () => {
            window.removeEventListener("hashchange", scrollToHash);
        };

    }, []);
    return (
        <div className="min-h-screen">
            <PageHeader
                title="Innovative Products, Scalable Services & Real-World  Impact."
                subtitle=""
            />
            <section className="bg-white py-4 bg-slate-50">
                <div className="container prose-xl px-4 md:px-6">
                    <h2 className="text-4xl text-center font-bold text-black-900 mb-6">
                        5G Element Management System (EMS)
                    </h2>
                    {/* ========================= OVERVIEW ========================= */}
                    <section
                        className="py-4 bg-slate-50 scroll-mt-32 md:scroll-mt-40">
                        <div className="container prose-xl px-4 md:p-6" >
                            <h3 className="text-3xl font-semibold bg-gray-400 text-center">Overview</h3>

                            <p className="text-black-600 leading-relaxed mb-4">
                                Managing a large number of 5G network devices manually is complex, time-consuming, and error-prone.
                                Network operators require a unified management platform to control device configurations, monitor performance,
                                detect faults proactively, and enforce enterprise security policies across distributed network environments.
                            </p>
                            <p className="text-black-600 leading-relaxed mb-4">

                                5G Element Management System (EMS) is a centralized management platform designed to manage and monitor 5G network
                                elements efficiently. The system enables secure onboarding, configuration, monitoring, and fault management of
                                network devices through an intuitive web-based interface. It is integrated with a controller layer (SDNR)
                                to handle device communication and state management.
                            </p>
                            <p className="text-black-600 leading-relaxed mb-4">

                                The 5G Element Management System (EMS) provides a comprehensive, scalable, and secure platform for managing modern
                                telecom network elements. By combining centralized control, real-time monitoring, and strong security practices,
                                the EMS enables organizations to operate, scale, and optimize 5G networks efficiently and reliably.</p>

                            <p className="text-black-600 leading-relaxed mb-4">

                                This EMS is built to support telecom-grade operations and follows standard network management principles.</p>

                        </div>
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="prose prose-xl text-muted-foreground text-slate-900">
                                <p className="text-black-600 leading-relaxed mb-4">
                                    5G Element Management System (EMS) is a centralized management platform designed to manage and monitor
                                    5G network elements efficiently. The system enables secure onboarding, configuration, monitoring, and
                                    fault management of network devices through an intuitive web-based interface.
                                    It is integrated with a controller layer (SDNR) to handle device communication and state management.
                                </p>

                                <p className="text-black-600 leading-relaxed">
                                    This provides a comprehensive, scalable, and secure platform for
                                    managing modern telecom network elements. By combining centralized control, real-time monitoring,
                                    and strong security practices, the EMS enables organizations to operate, scale, and optimize
                                    5G networks efficiently and reliably.
                                </p>
                                <p>This EMS is built to support telecom-grade operations and follows standard network management principles.</p>
                            </div>
                            <img
                                src={Home}
                                className="rounded-2xl shadow-2xl h-[450px] object-cover "
                            />
                        </div>

                        {/* ========================= EXPERTISE ========================= */}
                        <div className="bg-slate-50 rounded-xl  p-4 md:p-6" >
                            <h3 className="text-2xl font-semibold bg-gray-200 text-center">Expertise</h3>
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <img
                                    src={Connect}
                                    className="rounded-2xl shadow-2xl h-[300px] object-cover "
                                />
                                <div className="prose prose-xl text-muted-foreground text-slate-900">
                                    <p className="text-black-700 font-bold mb-4">
                                        RideNext ensures that EMS provides a centralized and automated
                                        solution to manage 5G network elements by:
                                    </p>

                                    <ul className="space-y-3 text-black-700">
                                        <li>• Automating device onboarding through pre-provisioning</li>
                                        <li>• Enabling safe and validated configuration management</li>
                                        <li>• Providing real-time and historical performance visibility</li>
                                        <li>• Detecting and displaying device faults and alarms</li>
                                        <li>• Enforcing role-based access control and security policies</li>
                                    </ul>
                                </div>

                            </div>
                        </div>


                        {/* ========================= HIGH-LEVEL ARCHITECTURE ========================= */}
                        <div className="bg-slate-50 rounded-xl  p-4 md:p-6 ">

                            <h3 className="text-2xl font-semibold bg-gray-200 text-center">
                                High-Level Architecture
                            </h3>

                            {/* Layer Flow Representation */}


                            <div className="bg-slate-50 rounded-xl py-14 px-6 flex justify-center">
                                <div className="flex flex-col lg:flex-row items-center gap-8">

                                    {/* DEVICE */}
                                    <div className="bg-white border border-blue-500 rounded-lg px-6 py-5 text-center shadow-sm w-72">
                                        <RadioTower className="mx-auto mb-2 w-6 h-6 text-blue-600" />
                                        <h4 className="font-semibold text-black-900 text-xl">
                                            5G Network Device
                                        </h4>
                                        <p className="text-l text-black-500">
                                            gNB / Simulator /5G NR Tester

                                        </p>
                                    </div>

                                    {/* SOUTHBOUND CONNECTOR */}
                                    <div className="flex flex-col lg:flex-row items-center text-black-400 text-xl font-medium">

                                        {/* Mobile */}

                                        <div className="lg:hidden flex flex-col items-center gap-2 my-2">
                                            <ArrowUp className="w-5 h-5 text-black-400 flow-up" />

                                            <span className="text-sm font-medium text-black-500">
                                                Southbound Interface
                                            </span>

                                            <ArrowUp className="w-5 h-5 text-black-400 flow-up" />
                                        </div>

                                        {/* Desktop */}
                                        <div className="hidden lg:flex items-center w-60">
                                            <ArrowLeft className="w-7 h-7 text-black-400 flow-left" strokeWidth={3} />

                                            <span className="flex-1 text-center text-black-400 text-xl font-medium">
                                                Southbound Interface
                                            </span>

                                            <ArrowLeft className="w-7 h-7 text-black-400 flow-left" strokeWidth={3} />
                                        </div>

                                    </div>

                                    {/* CONTROLLER */}
                                    <div className="bg-white border border-orange-500 rounded-lg px-6 py-5 text-center shadow-sm w-72">
                                        <Settings className="mx-auto mb-2 w-6 h-6 text-orange-600" />
                                        <h4 className="font-semibold text-black-900 text-xl">
                                            Controller Layer (SDNR)
                                        </h4>
                                        <p className="text-l text-black-500">
                                            • Orchestration • Control Management
                                        </p>
                                    </div>

                                    {/* NORTHBOUND CONNECTOR */}
                                    <div className="flex flex-col lg:flex-row items-center text-black-400 text-xl font-medium">

                                        {/* Mobile */}

                                        <div className="lg:hidden flex flex-col items-center gap-2 my-2">
                                            <ArrowUp className="w-5 h-5 text-black-400 flow-up" />

                                            <span className="text-sm font-medium text-black-500">
                                                Northbound Interface
                                            </span>

                                            <ArrowUp className="w-5 h-5 text-black-400 flow-up" />
                                        </div>



                                        {/* Desktop */}
                                        <div className="hidden lg:flex items-center gap-2">
                                            <ArrowLeft className="w-7 h-7 text-black-400 flow-left" strokeWidth={3} />
                                            <span className="flex-1 text-center text-black-400 text-xl font-medium">Northbound Interface</span>
                                            <ArrowLeft className="w-7 h-7 text-black-400 flow-left" strokeWidth={3} />
                                        </div>
                                    </div>

                                    {/* EMS UI */}
                                    <div className="bg-white border border-green-500 rounded-lg px-6 py-5 text-center shadow-sm w-72">
                                        <Monitor className="mx-auto mb-2 w-6 h-6 text-green-600" />
                                        <h4 className="font-semibold text-black-900 text-xl">
                                            Web-Based EMS UI
                                        </h4>
                                        <p className="text-l text-black-500">
                                            • Monitoring • Config • Visualization
                                        </p>
                                    </div>

                                </div>
                            </div>


                            {/* Detailed Explanation + Image */}
                            <div className="grid lg:grid-cols-2 gap-12 items-center">

                                <div className="space-y-6 text-black-600 leading-relaxed">
                                    {/* <p>
                                    The EMS follows a layered architecture designed to ensure
                                    modularity, scalability, and secure communication across
                                    distributed telecom environments.
                                </p> */}

                                    <div>
                                        <h4 className="font-semibold text-black-900 mb-2">
                                            Device Layer
                                        </h4>
                                        <p>
                                            Represents 5G gNB network elements or simulators.
                                            These devices generate operational data and receive
                                            configuration commands from the controller layer.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-black-900 mb-2">
                                            Controller Layer (SDNR)
                                        </h4>
                                        <p>
                                            Responsible for device connectivity, operational state
                                            management, orchestration, and southbound communication.
                                            It acts as the control plane between the EMS UI and
                                            network devices.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-black-900 mb-2">
                                            EMS UI Layer
                                        </h4>
                                        <p>
                                            Provides visualization, monitoring dashboards,
                                            configuration interfaces, alarm management, and
                                            user interaction through a secure web-based interface.
                                        </p>
                                    </div>

                                </div>

                                {/* Architecture Image */}
                                <div className="flex justify-center">
                                    <img
                                        src={Maintanance}
                                        alt="5G EMS Architecture Diagram"
                                        className="rounded-xl shadow-xl border"
                                    />
                                </div>

                            </div>
                        </div>



                        {/* ========================= SERVICES / KEY FEATURES ========================= */}

                        <div className="bg-slate-50 rounded-xl  p-4 md:p-6">
                            <h3 className="text-2xl font-semibold text-center bg-gray-200 mb-6">
                                Key Features
                            </h3>

                            <div className="grid md:grid-cols-2 gap-3">
                                {[
                                    "Secure device onboarding using pre-provisioning",
                                    "Centralized configuration management based on standard models",
                                    "Configuration validation with summary and change review",
                                    "Performance monitoring with graphical dashboards",
                                    "Fault and alarm management with severity indication",
                                    "Role-based user access and security controls",
                                    "Scalable and modular system design"
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 rounded-md bg-blue-50 border border-blue-200
                                                   hover:bg-blue-100 hover:border-blue-300
                                                   transition-all duration-200 flex items-center gap-3">
                                        <Hand className="w-4 h-4 text-blue-600 flex-shrink-0" />

                                        <p className="text-gray-800 text-l font-medium leading-snug">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>



                        {/* ========================= FCAPS TABLE ========================= */}

                        <div className="bg-slate-50 rounded-xl p-4 md:p-6">
                            {/* <h3 className="text-2xl md:text-3xl font-semibold bg-gray text-center mb-8"> */}
                            <h3 className="text-3xl font-semibold text-center bg-gray-400 mb-6">
                                FCAPS Capability Mapping
                            </h3>

                            {/* Desktop Table */}
                            <div className="hidden md:block overflow-x-auto">
                                <table className="min-w-full border border-black-300 rounded-lg overflow-hidden">
                                    <thead className="bg-slate-200">
                                        <tr>
                                            <th className="text-left px-6 py-3 border-b">FCAPS Area</th>
                                            <th className="text-left px-6 py-3 border-b">EMS Capability</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-black-700">
                                        {[
                                            ["Fault", "Alarm detection, severity classification, visualization"],
                                            ["Configuration", "Device configuration and validation"],
                                            ["Accounting", "Usage and operational statistics (future extensible)"],
                                            ["Performance", "KPI collection, analysis, dashboards"],
                                            ["Security", "Authentication, authorization, audit logging"]
                                        ].map((row, index) => (
                                            <tr key={index} className="hover:bg-slate-100 transition">
                                                <td className="px-6 py-4 border-b font-medium">{row[0]}</td>
                                                <td className="px-6 py-4 border-b">{row[1]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile Card Layout */}
                            <div className="md:hidden space-y-4">
                                {[
                                    ["Fault", "Alarm detection, severity classification, visualization"],
                                    ["Configuration", "Device configuration and validation"],
                                    ["Accounting", "Usage and operational statistics (future extensible)"],
                                    ["Performance", "KPI collection, analysis, dashboards"],
                                    ["Security", "Authentication, authorization, audit logging"]
                                ].map((row, index) => (
                                    <div
                                        key={index}
                                        className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                                    >
                                        <p className="text-sm font-semibold text-blue-600 mb-2">
                                            {row[0]}
                                        </p>
                                        <p className="text-sm text-black-700 leading-relaxed">
                                            {row[1]}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    {/* ---------------------EMS Congiguration Module---------------------------- */}
                    <section id="configuration"
                        className="pt-4 bg-slate-50 scroll-mt-24 md:scroll-mt-32">
                        <div className="container prose-xl px-4 md:p-6">

                            <h3 className="text-3xl font-semibold bg-gray-400 text-center">
                                EMS Configuration Module
                            </h3>

                            <p className="text-black-600 leading-relaxed mb-4">
                                The EMS Configuration Application provides a centralized interface for configuring
                                and managing 5G network elements such as gNB, Central Unit (CU), and Distributed
                                Unit (DU) components. The module enables network operators to define device
                                parameters, manage radio cells, configure control and user plane functions,
                                and maintain network connectivity settings across the network infrastructure.
                            </p>

                            <p className="text-black-600 leading-relaxed mb-6">
                                The configuration workflow is organized into multiple functional modules that
                                allow operators to efficiently configure different components of the 5G network
                                architecture.
                            </p>


                            {/* Configuration Modules */}

                            <div className="flex flex-wrap gap-3 mb-6 justify-center">

                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium shadow-sm">
                                    Basic Configuration
                                </span>

                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium shadow-sm">
                                    Cell Configuration
                                </span>

                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium shadow-sm">
                                    CUCP Configuration
                                </span>

                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium shadow-sm">
                                    CUUP Configuration
                                </span>

                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium shadow-sm">
                                    DU Configuration
                                </span>

                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium shadow-sm">
                                    Configuration Summary
                                </span>

                            </div>

                            <p className="text-black-600 leading-relaxed">
                                Each module provides specialized configuration controls for managing different
                                parts of the 5G network architecture, enabling operators to deploy and maintain
                                telecom infrastructure in a structured, scalable, and reliable manner.
                            </p>

                            {/* Basic Configuration */}

                            <div className="grid lg:grid-cols-2 gap-12 items-start">

                                <div>
                                    <img
                                        src={BasicConfig}
                                        className="rounded-xl shadow-xl border"
                                    />
                                    <ul className="list-disc pl-6 space-y-2 text-black-700">
                                        <li>Configures PLMN information including MCC and MNC to identify the mobile network operator.</li>
                                    </ul>

                                </div>
                                <div>

                                    <h3 className="text-2xl bg-gray-200 text-center font-semibold mb-4">Basic Configuration</h3>

                                    <ul className="list-disc pl-6 space-y-2 text-black-700">
                                        <li>Defines the foundational identity of the network element using DN Prefix and system identifiers.</li>
                                        <li>Configures operational parameters such as priority labels used for scheduling and resource allocation.</li>
                                        <li>Manages performance measurement configuration including reporting intervals and data collection policies.</li>
                                        <li>Specifies default storage locations for performance logs and measurement files.</li>
                                        <li>Defines RRM policy parameters that support efficient radio resource allocation and network slicing.</li>
                                    </ul>

                                </div>

                            </div>
                            <div className="p-0 m-0">

                                <ul className="list-disc pl-6 space-y-2 text-black">

                                </ul>

                            </div>


                            {/* Cell Configuration */}

                            <div className="grid lg:grid-cols-2 gap-12 items-start">

                                <div>

                                    <h3 className="text-2xl bg-gray-200 text-center font-semibold mb-4">Cell Configuration</h3>

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Enables operators to create and manage multiple radio cells within a base station.</li>
                                        <li>Defines cell-level identity parameters including cell ID and operational priority.</li>
                                        <li>Configures Distributed Unit (DU) and Central Unit (CU) related parameters for each cell.</li>
                                        <li>Associates Remote Radio Heads (RRH) with cells to establish radio coverage.</li>
                                        <li>Supports scalable radio deployment by allowing flexible cell configuration and management.</li>
                                    </ul>

                                </div>

                                <div>
                                    <img
                                        src={CellConfig}
                                        className="rounded-xl shadow-xl border"
                                    />
                                    <ul className="list-disc pl-6 space-y-2 text-black-700">
                                        <li>Ensures efficient radio resource distribution across multiple coverage areas.</li>
                                    </ul>
                                </div>
                            </div>


                            {/* CUCP Configuration */}

                            <div className="grid lg:grid-cols-2 gap-12 items-start">
                                <div>
                                    <img
                                        src={CUCPConfig}
                                        className="rounded-xl shadow-xl border"
                                    />
                                    <ul className="list-disc pl-6 space-y-2 text-black-700">
                                        <li>Ensures secure and reliable communication between network components.</li>
                                    </ul>
                                </div>
                                <div>

                                    <h3 className="text-2xl bg-gray-200 text-center font-semibold mb-4">CUCP Configuration</h3>

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Configures the Central Unit Control Plane responsible for signaling and mobility procedures.</li>
                                        <li>Defines gNB identifiers, logical resource types, and configuration priorities.</li>
                                        <li>Supports session control and coordination between radio cells and core network entities.</li>
                                        <li>Implements security mechanisms including ciphering and integrity protection algorithms.</li>
                                        <li>Maps CU control plane parameters to specific NR cells for control signaling.</li>
                                    </ul>

                                </div>

                            </div>


                            {/* CUUP Configuration */}

                            <div className="grid lg:grid-cols-2 gap-12 items-start">

                                <div>

                                    <h3 className="text-2xl bg-gray-200 text-center font-semibold mb-4">CUUP Configuration</h3>

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Manages Central Unit User Plane parameters responsible for processing user data traffic.</li>
                                        <li>Defines resource allocation policies for handling high-volume data communication.</li>
                                        <li>Configures endpoint interfaces including NgU, S1U, and X2U for network connectivity.</li>
                                        <li>Specifies IP addresses, VLAN identifiers, and remote endpoints for inter-node communication.</li>
                                        <li>Supports scalable data forwarding between radio network and core network components.</li>
                                    </ul>

                                </div>
                                <div>
                                    <img
                                        src={CUUPConfig}
                                        className="rounded-xl shadow-xl border"
                                    />
                                    <ul className="list-disc pl-6 space-y-2 text-black-700">
                                        <li>Ensures efficient routing and handling of user data traffic across the network.</li>
                                    </ul>
                                </div>

                            </div>


                            {/* DU Configuration */}

                            <div className="grid lg:grid-cols-2 gap-12 items-start">
                                <div>
                                    <img
                                        src={DUConfig}
                                        className="rounded-xl shadow-xl border"
                                    />
                                    <ul className="list-disc pl-6 space-y-2 text-black-700">
                                        <li>Manages fronthaul communication between the DU and connected radio units.</li>
                                    </ul>
                                </div>

                                <div>

                                    <h3 className="text-2xl bg-gray-200 text-center font-semibold mb-4">DU Configuration</h3>

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Manages Distributed Unit parameters responsible for lower-layer radio processing.</li>
                                        <li>Configures MAC layer functions including DRX, SRB, QoS groups, and buffer status reporting.</li>
                                        <li>Defines sector carrier configuration including bandwidth and subcarrier spacing.</li>
                                        <li>Controls Physical Resource Block (PRB) allocation for efficient spectrum utilization.</li>
                                        <li>Supports beamforming and advanced radio resource management capabilities.</li>
                                    </ul>

                                </div>

                            </div>


                            {/* Configuration Summary */}

                            <div className="grid lg:grid-cols-2 gap-12 items-start">

                                <div>

                                    <h3 className="text-2xl bg-gray-200 text-center font-semibold mb-4">Configuration Summary</h3>

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Provides a consolidated overview of all configuration modules within the EMS.</li>
                                        <li>Displays parameters from Basic, Cell, CUCP, CUUP, and DU configuration sections.</li>
                                        <li>Allows operators to review and validate configuration settings before deployment.</li>
                                        <li>Supports configuration comparison to identify changes from previously stored values.</li>
                                        <li>Reduces the risk of incorrect deployments through validation checks.</li>
                                    </ul>

                                </div>
                                <div>
                                    <img
                                        src={Summary}
                                        className="rounded-xl shadow-xl border"
                                    />
                                    <ul className="list-disc pl-6 space-y-2 text-black-700">
                                        <li>Enables safe submission and activation of configuration updates across network elements.</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </section>
                    {/* ---------------------EMS Connect Module---------------------------- */}

                    <section
                        id="connect"
                        className="pt-4 bg-slate-50 scroll-mt-4 md:scroll-mt-8"
                    >
                        <div className="container prose-xl px-4 md:p-6">

                            <h3 className="text-3xl font-semibold bg-gray-400 text-center">
                                EMS Connect Module
                            </h3>

                            <p className="text-black-600 leading-relaxed mb-4">
                                The EMS Connect Application is a core component of the Element Management System
                                responsible for managing connectivity between the EMS platform and network
                                elements such as gNodeB (gNB), Distributed Units (DU), Central Units (CU),
                                and other radio network devices. It provides a centralized interface that
                                enables operators to monitor, control, and manage device communication
                                across the telecom network infrastructure.
                            </p>

                            <p className="text-black-600 leading-relaxed mb-6">
                                The module supports device discovery, connectivity monitoring, lifecycle
                                management operations, and file server configuration used for software
                                upgrades and device log collection. By integrating these capabilities
                                into a single interface, the EMS Connect module simplifies network
                                management and improves operational efficiency.
                            </p>

                            {/* Functional Modules */}

                            <div className="flex flex-wrap gap-3 mb-6 justify-center">

                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium shadow-sm">
                                    Nodes Management
                                </span>

                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium shadow-sm">
                                    Node Management Actions
                                </span>

                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium shadow-sm">
                                    File Server Configuration
                                </span>

                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium shadow-sm">
                                    Connection Status Monitoring
                                </span>

                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium shadow-sm">
                                    Software Management
                                </span>

                            </div>

                            <p className="text-black-600 leading-relaxed mb-8">
                                These functional modules allow operators to manage network devices,
                                monitor connectivity status, configure external file servers, and
                                perform lifecycle operations across large telecom deployments.
                            </p>

                            {/* Nodes Management */}

                            <div className="grid lg:grid-cols-2 gap-12 items-start">

                                <div>
                                    <img
                                        src={Connect}
                                        className="rounded-xl shadow-xl border"
                                    />

                                    <ul className="list-disc pl-6 space-y-2 text-black-700 mt-4">
                                        <li>Provides a real-time dashboard displaying all network elements registered in the EMS.</li>
                                        <li>Allows operators to monitor connectivity status of each device.</li>
                                        <li>Displays device identity details including vendor, model number, and software version.</li>
                                        {/* <li>Shows communication parameters such as host IP address and management port.</li> */}
                                    </ul>

                                </div>


                                <div>

                                    <h3 className="text-2xl bg-gray-200 text-center font-semibold mb-4">Nodes Management</h3>

                                    <ul className="list-disc pl-6 space-y-2 text-black-700">
                                        <li>Displays a structured table containing detailed information about all connected network nodes.</li>
                                        <li>Tracks connectivity status for management protocols including gNMI, NETCONF, and VES.</li>
                                        <li>Provides device status indicators such as Connected, Connecting, Disconnected, or Unknown.</li>
                                        <li>Identifies each device using a unique Node ID assigned within the EMS platform.</li>
                                        <li>Displays hardware serial numbers, device types, and vendor information.</li>
                                        <li>Helps operators quickly detect connectivity issues and monitor network health.</li>
                                    </ul>
                                </div>

                            </div>
                            <p className="text-black-200 font-bold leading-relaxed m-0 text-center">
                                Shows communication parameters such as host IP address and management port.
                            </p>
                            <div className="bg-slate-50 rounded-xl" >
                                <h3 className="text-2xl font-semibold bg-gray-200 text-center">
                                    Node Management Actions
                                </h3>
                                <div className="grid lg:grid-cols-2 gap-12 items-start">
                                    <div>
                                        <ul className="list-disc pl-6 space-y-2 text-black-700">
                                            <li>Connect and disconnect devices from the EMS management system.</li>
                                            <li>Remove devices from the EMS inventory when they are decommissioned.</li>
                                            <li>Access detailed device information and diagnostics.</li>

                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="list-disc pl-6 space-y-2 text-black-700">
                                            <li>Open related modules such as Configuration, Fault, and Performance.</li>
                                            <li>Perform remote reboot and shutdown operations for maintenance purposes.</li>
                                            <li>Synchronize device configuration with the EMS database.</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            {/* File Server Configuration */}

                            <div className="grid lg:grid-cols-2 gap-12 items-start mt-2">

                                <div>

                                    <h3 className="text-2xl bg-gray-200 text-center font-semibold mb-4">
                                        File Server Configuration
                                    </h3>

                                    <ul className="list-disc pl-6 space-y-2 text-black-700">
                                        <li>Configures external file servers used for software upgrades and device log storage.</li>
                                        <li>Allows EMS to upload diagnostic logs from network elements.</li>
                                        <li>Supports distribution of firmware images and software packages.</li>
                                        <li>Defines server parameters such as IP address, transfer protocol, and storage path.</li>
                                        <li>Supports secure file transfer protocols including FTP and SFTP.</li>
                                        <li>Provides centralized management of operational data and upgrade files.</li>
                                    </ul>

                                </div>
                                <img
                                    src={Connect2}
                                    className="rounded-xl shadow-xl border"
                                />
                            </div>

                            <div className="bg-slate-50 rounded-xl" >
                                <h3 className="text-2xl bg-gray-200 text-center font-semibold mb-4">
                                    Connection Status Monitoring
                                </h3>
                                <div className="grid lg:grid-cols-2 gap-12 items-start">
                                    <div>
                                        <ul className="list-disc pl-6 space-y-2 text-black-700">
                                            <li>Displays total registered devices and their communication status.</li>
                                            <li>Provides a consolidated dashboard of device connectivity across the network.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul className="list-disc pl-6 space-y-2 text-black-700">
                                            <li>Tracks firmware versions, vendor details, and hardware models.</li>
                                            <li>Supports monitoring of large-scale telecom deployments from a centralized interface.</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-black-600 font-bold leading-relaxed m-0 text-center">
                                    Allows operators to identify connected and disconnected nodes quickly.
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* ------------------Fault Managemnt Module ------------------------------ */}
                    <section
                        id="fault"
                        className="pt-4 bg-slate-50 scroll-mt-4 md:scroll-mt-8"
                    >
                        <div className="container prose-xl px-4 md:p-6">

                            <h3 className="text-3xl font-semibold bg-gray-400 text-center py-2 rounded">
                                EMS Fault Management
                            </h3>
                            <p className="text-center mt-4">
                                The EMS Fault Management module monitors, detects, and manages alarms generated by telecom network elements such as gNodeB (gNB), Distributed Units (DU), and Central Units (CU).
                                It enables operators to quickly identify network issues, manage alarm notifications, and analyze historical faults to maintain high network reliability.
                            </p>

                            <img
                                src={FaultManagementImage}
                                className="rounded-xl shadow-xl border mx-auto mt-6"
                            />
                            <div className="grid lg:grid-cols-2 gap-8 bg-slate-100 p-8">

                                {/* Card 1 */}
                                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 transition transform hover:-translate-y-2 hover:shadow-xl">
                                    <h4 className="text-2xl font-semibold text-center mb-4 text-blue-600">
                                        Core Monitoring Capabilities
                                    </h4>
                                    <ul className="list-none space-y-2 text-left">
                                        <li>Real-time monitoring of alarms generated by telecom network devices.</li>
                                        <li>Centralized alarm management across multiple network elements.</li>
                                        <li>Detection of device faults, protocol errors, hardware failures, and connectivity issues.</li>
                                        <li>Identification of the affected node and internal component responsible for the alarm.</li>
                                    </ul>
                                </div>

                                {/* Card 2 */}
                                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 transition transform hover:-translate-y-2 hover:shadow-xl">
                                    <h4 className="text-2xl font-semibold text-center mb-4 text-purple-600">
                                        Alarm Information Details
                                    </h4>
                                    <ul className="list-none space-y-2 text-left">
                                        <li><strong>Node Name</strong> – Identifies the network device that generated the alarm.</li>
                                        <li><strong>Alarm ID</strong> – Unique identifier used for alarm classification.</li>
                                        <li><strong>Severity</strong> – Indicates the seriousness of the alarm condition.</li>
                                        <li><strong>Timestamp</strong> – Shows when the alarm was generated.</li>
                                        <li><strong>Sequence</strong> – Maintains the order of alarm events.</li>
                                        <li><strong>Counter</strong> – Tracks recurring alarm occurrences.</li>
                                        <li><strong>Object ID</strong> – Identifies internal components such as CU, DU, and PDCP.</li>
                                    </ul>
                                </div>

                                {/* Card 3 */}
                                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 transition transform hover:-translate-y-2 hover:shadow-xl">
                                    <h4 className="text-2xl font-semibold text-center mb-4 text-green-600">
                                        Alarm Sections
                                    </h4>
                                    <ul className="list-none space-y-2 text-left">
                                        <li><strong>Current Alarms</strong> – Displays all active alarms requiring operator attention.</li>
                                        <li><strong>Alarm Notifications</strong> – Real-time alerts when new alarms occur.</li>
                                        <li><strong>Alarm History</strong> – Historical alarm records for analysis and auditing.</li>
                                    </ul>
                                </div>

                                {/* Card 4 */}
                                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500 transition transform hover:-translate-y-2 hover:shadow-xl">
                                    <h4 className="text-2xl font-semibold text-center mb-4 text-indigo-600">
                                        Alarm Management Operations
                                    </h4>
                                    <ul className="list-none space-y-2 text-left">
                                        <li><strong>Acknowledge Alarm</strong> – Confirms that an operator has reviewed the alarm.</li>
                                        <li><strong>Unacknowledge Alarm</strong> – Marks alarms for further investigation.</li>
                                        <li><strong>Clear Alarm</strong> – Removes alarms once the fault condition is resolved.</li>
                                    </ul>
                                </div>

                                {/* Card 5 */}
                                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500 transition transform hover:-translate-y-2 hover:shadow-xl">
                                    <h4 className="text-2xl font-semibold text-center mb-4 text-red-600">
                                        Alarm Severity Levels
                                    </h4>
                                    <ul className="list-none space-y-3 text-left">
                                        <li><span className="bg-red-500 text-white px-2 py-1 rounded text-sm mr-2">Critical</span> Severe network failure requiring immediate action.</li>
                                        <li><span className="bg-orange-500 text-white px-2 py-1 rounded text-sm mr-2">Major</span> Significant issue affecting service performance.</li>
                                        <li><span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm mr-2">Minor</span> Limited impact issue.</li>
                                        <li><span className="bg-blue-500 text-white px-2 py-1 rounded text-sm mr-2">Warning</span> Early indication of potential problems.</li>
                                    </ul>
                                </div>

                                {/* Card 6 */}
                                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-500 transition transform hover:-translate-y-2 hover:shadow-xl">
                                    <h4 className="text-2xl font-semibold text-center mb-4 text-teal-600">
                                        Operational Benefits
                                    </h4>
                                    <ul className="list-none space-y-2 text-left">
                                        <li>Real-time monitoring across telecom infrastructure.</li>
                                        <li>Faster fault detection and troubleshooting.</li>
                                        <li>Reduced network downtime and service disruptions.</li>
                                        <li>Historical alarm analysis for root cause investigation.</li>
                                        <li>Centralized alarm management via EMS interface.</li>
                                        <li>Supports telecom FCAPS framework.</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </section>


                    {/* ========================= PERFORMANCE MONITORING ========================= */}
                    {/* <div className="bg-slate-50 rounded-xl  p-2 md:p-4" >
                        <h3 className="text-3xl font-semibold bg-gray-400 text-center">Performance Monitoring</h3>

                        <p className="text-black-600 mb-4">

                            The EMS periodically collects performance metrics from managed devices and stores them in a scalable data store.
                            These metrics are visualized through interactive dashboards, enabling operators to effectively analyze device health,
                            network utilization, and usage trends.
                        </p>
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <img
                                src={Performance}
                                className="rounded-2xl shadow-2xl h-[300px] object-cover "
                            />
                            <div className="bg-slate-50 rounded-xl">
                                <p className="text-black-700 font-bold mb-4 text-center">
                                    The performance monitoring capabilities include visibility into key operational metrics such as:
                                </p>
                                <ul className="space-y-3 text-black-700 ">
                                    <li>• Network throughput at device and cell level</li>
                                    <li>• Number of connected network elements and their operational status</li>
                                    <li>• Cell-level statistics, including active and available cells</li>
                                    <li>• Active user count and usage distribution</li>
                                    <li>• Resource utilization trends across network elements</li>
                                </ul>
                            </div>
                        </div>



                        <p className="text-black-600 mb-4 ">The EMS supports both real-time and historical performance analysis, allowing operators to identify performance degradation, understand long-term trends, and support proactive capacity planning and optimization.</p>
                        <p className="text-black-600 mb-4 ">By providing clear and actionable performance insights, the EMS helps ensure stable network operations, improved service quality, and efficient resource utilization in large-scale telecom environments.</p>
                        <p className="text-black-600 mt-6">
                            Supports real-time and historical analysis for proactive capacity
                            planning and optimization.
                        </p>
                    </div> */}

                    <section
                        id="performance"
                        className="pt-10 bg-slate-50 scroll-mt-4 md:scroll-mt-12"
                    >
                        <div className="container prose-xl px-4 md:p-6">

                            {/* Title */}
                            <h3 className="text-3xl font-semibold bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-center py-2 rounded-lg shadow">
                                EMS Performance Management Module
                            </h3>

                            {/* Intro */}
                            <p className="text-gray-700 leading-relaxed mt-4">
                                The EMS Performance Management module provides comprehensive monitoring,
                                analytics, and performance optimization capabilities for telecom
                                network infrastructure. It enables operators to analyze network
                                health, evaluate system performance, and monitor operational metrics
                                generated by network elements such as gNB, DU, and CU devices.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                The module integrates dashboards, widgets, KPI analytics, counter
                                monitoring, and custom KPI creation tools into a unified interface.
                                This centralized approach enables telecom operators and network
                                engineers to identify performance bottlenecks, troubleshoot issues,
                                and optimize network efficiency through data-driven insights.
                            </p>

                            {/* Feature Tags */}

                            <div className="flex flex-wrap gap-3 mb-8 justify-center">

                                <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg shadow hover:shadow-md">
                                    Performance Dashboard
                                </span>

                                <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg shadow hover:shadow-md">
                                    Performance Widgets
                                </span>

                                <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg shadow hover:shadow-md">
                                    KPI Analytics
                                </span>

                                <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg shadow hover:shadow-md">
                                    Counters Monitoring
                                </span>

                                <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg shadow hover:shadow-md">
                                    Create KPI
                                </span>

                                <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg shadow hover:shadow-md">
                                    Add KPI
                                </span>

                            </div>

                            {/* DASHBOARD */}

                            <div className="grid lg:grid-cols-2 gap-12 items-start bg-white p-6 rounded-xl shadow-md mb-8">

                                <div>
                                    <img
                                        src={PerformanceDashboard}
                                        className="rounded-xl shadow-lg border hover:scale-105 transition duration-300"
                                    />

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                                        <li>Displays real-time network performance indicators.</li>
                                        <li>Shows connected devices and operational cell statistics.</li>
                                        <li>Provides quick visual KPI cards for monitoring system health.</li>

                                    </ul>
                                </div>

                                <div>

                                    <h3 className="text-2xl font-semibold bg-indigo-100 text-indigo-800 text-center py-1 rounded mb-4">
                                        Performance Dashboard
                                    </h3>

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Provides centralized visibility of critical network KPIs.</li>
                                        <li>Displays metrics such as throughput, traffic volume, and device connectivity.</li>
                                        <li>Monitors the total number of connected devices within EMS.</li>
                                        <li>Displays active cells and operational network capacity.</li>
                                        <li>Shows average uplink and downlink throughput values.</li>
                                        <li>Displays uplink PDCP traffic volume processed by the network.</li>
                                        <li>Helps operators quickly detect abnormal network behaviour.</li>
                                        <li>Improves situational awareness for NOC monitoring teams.</li>

                                    </ul>

                                </div>
                            </div>

                            {/* WIDGETS */}

                            <div className="grid lg:grid-cols-2 gap-12 items-start bg-white p-6 rounded-xl shadow-md mb-8">

                                <div>
                                    <h3 className="text-2xl font-semibold bg-purple-100 text-purple-800 text-center py-1 rounded mb-4">
                                        Performance Widgets
                                    </h3>

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Provides graphical visualization of network KPIs.</li>
                                        <li>Displays time-series charts for performance monitoring.</li>
                                        <li>Allows operators to track KPI trends across time intervals.</li>
                                        <li>Supports configurable refresh intervals for real-time monitoring.</li>
                                        <li>Helps detect traffic spikes and network congestion.</li>
                                        <li>Enables historical performance analysis for capacity planning.</li>
                                    </ul>

                                </div>

                                <img
                                    src={PerformanceWidgets}
                                    onClick={() => setPreviewImg(PerformanceWidgets)}
                                    className="rounded-xl shadow-lg border cursor-pointer hover:scale-105 transition duration-300"
                                />

                            </div>
                            {previewImg && (
                                <div
                                    className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/70"
                                    onClick={() => setPreviewImg(null)}
                                >
                                    <div
                                        className="relative max-w-[95vw] max-h-[95vh] flex items-center justify-center"
                                        onClick={(e) => e.stopPropagation()}
                                    >

                                        {/* CLOSE BUTTON */}
                                        <button
                                            onClick={() => setPreviewImg(null)}
                                            className="absolute top-2 right-2 bg-black/60 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold hover:bg-black/80 transition z-20"
                                        >
                                            ✕
                                        </button>

                                        {/* IMAGE */}
                                        <img
                                            src={previewImg}
                                            className="rounded-xl shadow-2xl max-h-[90vh] max-w-[90vw]"
                                        />

                                    </div>
                                </div>
                            )}

                            {/* KPI MODULE */}

                            <div className="bg-white p-6 rounded-xl shadow-md mb-8">

                                <h3 className="text-2xl font-semibold bg-green-100 text-green-800 text-center py-1 rounded mb-4">
                                    KPI Analytics Module
                                </h3>

                                <div className="grid lg:grid-cols-2 gap-12 items-start">

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Analyzes network KPI performance over configurable time intervals.</li>
                                        <li>Provides system-level KPI monitoring for the entire network.</li>
                                        <li>Displays aggregated performance metrics across connected nodes.</li>
                                        <li>Shows KPI percentage values for SLA evaluation.</li>
                                    </ul>

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Supports device-level KPI analysis for individual nodes.</li>
                                        <li>Displays donut charts showing success and failure ratios.</li>
                                        <li>Provides time-series graphs to monitor KPI behaviour.</li>
                                        <li>Helps engineers identify performance degradation patterns.</li>
                                    </ul>

                                </div>

                                <p className="text-black-200 font-bold text-center mt-3">
                                    Enables engineers to analyze performance trends and detect KPI degradations
                                    impacting network reliability.
                                </p>

                            </div>

                            {/* COUNTERS */}

                            <div className="grid lg:grid-cols-2 gap-12 items-start bg-white p-6 rounded-xl shadow-md mb-8">

                                <div>

                                    {/* <img
                                        src={PerformanceCounters}
                                        className="rounded-xl shadow-lg border hover:scale-105 transition duration-300"
                                    /> */}
                                    <div className="group">

                                        <div className="relative">

                                            <img
                                                src={PerformanceCounters}
                                                className="rounded-xl shadow-lg border cursor-pointer"
                                            />

                                        </div>

                                        {/* Full Screen Overlay */}
                                        <div className="fixed inset-0 hidden group-hover:flex items-center justify-center bg-black/80 z-50">

                                            <img
                                                src={PerformanceCounters}
                                                className="max-h-[95vh] max-w-[95vw] rounded-lg shadow-2xl"
                                            />

                                        </div>

                                    </div>

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                                        <li>Displays raw counters collected directly from network devices.</li>
                                        <li>Supports device and cell-level monitoring.</li>
                                    </ul>

                                </div>

                                <div>

                                    <h3 className="text-2xl font-semibold bg-orange-100 text-orange-800 text-center py-1 rounded mb-4">
                                        Counters Monitoring
                                    </h3>

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Provides granular visibility into device-level performance counters.</li>
                                        <li>Includes DRB counters measuring radio bearer performance.</li>
                                        <li>Tracks packet transmission counters across QoS flows.</li>
                                        <li>Monitors PDCP traffic counters over the F1-U interface.</li>
                                        <li>Displays counter values in table or time-series chart formats.</li>
                                        <li>Supports historical analysis across multiple time intervals.</li>
                                        <li>Helps engineers investigate anomalies and troubleshoot network issues.</li>
                                    </ul>

                                </div>

                            </div>

                            {/* CREATE KPI */}

                            <div className="grid lg:grid-cols-2 gap-12 items-start bg-white p-6 rounded-xl shadow-md mb-8">

                                <div>

                                    <h3 className="text-2xl font-semibold bg-blue-100 text-blue-800 text-center py-1 rounded mb-4">
                                        Create KPI
                                    </h3>

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Allows operators to define custom Key Performance Indicators.</li>
                                        <li>Uses formulas derived from raw performance counters.</li>
                                        <li>Supports aggregation types including SUM, AVG, MAX, and MIN.</li>
                                        <li>Enables flexible performance monitoring tailored to SLA requirements.</li>
                                        <li>Transforms raw telemetry data into meaningful operational metrics.</li>
                                    </ul>

                                </div>

                                <img
                                    src={PerformanceCreateKPI}
                                    onClick={() => setPreviewImg(PerformanceCreateKPI)}
                                    className="rounded-xl shadow-lg border cursor-pointer hover:scale-105 transition duration-300"
                                />


                            </div>
                            {previewImg && (
                                <div
                                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                                    onClick={() => setPreviewImg(null)}
                                >
                                    <img
                                        src={previewImg}
                                        className="max-h-[90%] max-w-[90%] rounded-lg shadow-2xl"
                                    />
                                </div>
                            )}

                            {/* ADD KPI */}

                            {/* ADD KPI */}

                            <div className="grid lg:grid-cols-2 gap-12 items-start bg-white p-6 rounded-xl shadow-md mt-8">

                                <div>

                                    <img
                                        src={PerfprmanceAddKPI}
                                        className="rounded-xl shadow-lg border hover:scale-105 transition duration-300"
                                    />

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                                        <li>Provides an interface to register newly created KPIs in the EMS platform.</li>
                                        <li>Displays configuration parameters including KPI name, formula, unit, and aggregation type.</li>
                                        <li>Ensures KPI definitions are validated before being stored in the performance database.</li>
                                    </ul>

                                </div>

                                <div>

                                    <h3 className="text-2xl font-semibold bg-pink-100 text-pink-800 text-center py-1 rounded mb-4">
                                        Add KPI Configuration
                                    </h3>

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Registers newly defined KPIs within the EMS performance monitoring framework.</li>
                                        <li>Stores KPI formulas and calculation logic in the centralized performance database.</li>
                                        <li>Exposes KPI data through backend APIs used by dashboards and analytics modules.</li>
                                        <li>Enables KPIs to be visualized in dashboards, widgets, and KPI analytics pages.</li>
                                        <li>Supports scalable KPI lifecycle management across the EMS platform.</li>
                                        <li>Allows continuous expansion of performance monitoring capabilities.</li>
                                    </ul>

                                </div>

                            </div>


                        </div>
                    </section>

                    {/* ============================ Security Management ===================================== */}

                    <section
                        id="security"
                        className="pt-6 bg-slate-50 scroll-mt-4 md:scroll-mt-8"
                    >
                        <div className="container prose-xl px-4 md:p-6">

                            {/* Title */}
                            <h3 className="text-3xl font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white text-center py-2 rounded-lg shadow">
                                EMS Security Management (User & Access Control)
                            </h3>

                            {/* Overview */}
                            <p className="text-gray-700 leading-relaxed mt-4">
                                The EMS Security Management module provides centralized authentication,
                                authorization, and access control across the EMS platform. It ensures
                                that only authorized users can access critical functionalities such as
                                configuration management, fault monitoring, performance analysis, and
                                software operations.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                The module follows a Role-Based Access Control (RBAC) model, where
                                permissions are assigned based on roles. This ensures secure, scalable,
                                and controlled access to telecom network operations.
                            </p>

                            {/* Core Components */}
                            <div className="flex flex-wrap gap-3 mb-8 justify-center">

                                <span className="bg-red-100 text-red-800 px-4 py-2 rounded-lg shadow">
                                    Realms
                                </span>

                                <span className="bg-red-100 text-red-800 px-4 py-2 rounded-lg shadow">
                                    Clients
                                </span>

                                <span className="bg-red-100 text-red-800 px-4 py-2 rounded-lg shadow">
                                    Roles
                                </span>

                                <span className="bg-red-100 text-red-800 px-4 py-2 rounded-lg shadow">
                                    Users
                                </span>

                            </div>

                            {/* REALMS */}

                            <div className="bg-white p-6 rounded-xl shadow-md mb-8">

                                <h3 className="text-2xl font-semibold bg-red-100 text-red-800 text-center py-1 rounded mb-4">
                                    Realms (Authentication Domains)
                                </h3>

                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Defines isolated authentication domains within EMS.</li>
                                    <li>Each realm contains its own users, roles, clients, and policies.</li>
                                    <li>Enables separation of environments such as admin, vendor, and integrations.</li>
                                    <li>Supports multi-domain authentication for large telecom deployments.</li>
                                    <li>Examples: <b>master</b>, <b>onap</b></li>
                                </ul>

                                <p className="text-black-200 font-bold text-center mt-3">
                                    Realms provide secure boundaries for managing authentication and access control.
                                </p>

                            </div>

                            {/* CLIENTS */}

                            <div className="bg-white p-6 rounded-xl shadow-md mb-8">

                                <h3 className="text-2xl font-semibold bg-pink-100 text-pink-800 text-center py-1 rounded mb-4">
                                    Clients (Applications & Services)
                                </h3>

                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Represents applications interacting with EMS authentication services.</li>
                                    <li>Requests authentication tokens and validates user permissions.</li>
                                    <li>Defines access to EMS APIs and modules.</li>
                                    <li>Examples: account, admin-cli, broker, security-admin-console.</li>
                                    <li>Mapped to specific realms for controlled access.</li>
                                </ul>

                                <p className="text-black-200 font-bold text-center mt-3">
                                    Clients act as secure entry points to EMS services and APIs.
                                </p>

                            </div>

                            {/* ROLES */}

                            <div className="bg-white p-6 rounded-xl shadow-md mb-8">

                                <h3 className="text-2xl font-semibold bg-orange-100 text-orange-800 text-center py-1 rounded mb-4">
                                    Roles (Permission Control)
                                </h3>

                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Defines what actions users can perform within the EMS system.</li>
                                    <li>Implements Role-Based Access Control (RBAC).</li>
                                    <li>Controls permissions such as view, modify, delete, and manage operations.</li>
                                    <li>Examples: manage-account, view-applications, delete-account.</li>
                                    <li>Assigned to users via clients and realms.</li>
                                </ul>

                                <p className="text-black-200 font-bold text-center mt-3">
                                    Roles ensure secure and controlled access to network operations.
                                </p>

                            </div>

                            {/* USERS */}

                            {/* USERS */}

                            <div className="bg-white p-6 rounded-xl shadow-md mb-8">

                                <h3 className="text-2xl font-semibold bg-indigo-100 text-indigo-800 text-center py-1 rounded mb-6">
                                    Users (Access Management)
                                </h3>

                                <div className="grid lg:grid-cols-2 gap-10 items-start">

                                    {/* LEFT SIDE */}

                                    <div>
                                        <h4 className="text-lg font-semibold mb-3 text-indigo-700">User Overview</h4>

                                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                            <li>Represents individual users accessing the EMS platform.</li>
                                            <li>Authenticated using secure login credentials.</li>
                                            <li>Permissions are assigned based on RBAC roles.</li>
                                            <li>Supports user attributes such as name, email, and realm.</li>
                                            <li>Each user is mapped to a specific authentication domain (realm).</li>
                                            <li>Users inherit access rights through assigned roles and clients.</li>
                                            <li>Supports secure login sessions and token-based authentication.</li>
                                            <li>Enables role-based visibility of EMS modules and features.</li>
                                            <li>Maintains user activity tracking for auditing and compliance.</li>
                                            <li>Ensures restricted access to critical telecom operations.</li>
                                        </ul>
                                    </div>

                                    {/* RIGHT SIDE */}

                                    <div>
                                        <h4 className="text-lg font-semibold mb-3 text-indigo-700">User Management Actions</h4>

                                        <div className="space-y-4">

                                            <div className="p-4 bg-indigo-50 rounded-lg shadow-sm hover:shadow-md transition">
                                                <h5 className="font-semibold">Edit User</h5>
                                                <p className="text-sm text-gray-600">Modify user details and update access permissions.</p>
                                            </div>

                                            <div className="p-4 bg-indigo-50 rounded-lg shadow-sm hover:shadow-md transition">
                                                <h5 className="font-semibold">Reset Credentials</h5>
                                                <p className="text-sm text-gray-600">Reset passwords and recover locked accounts.</p>
                                            </div>

                                            <div className="p-4 bg-indigo-50 rounded-lg shadow-sm hover:shadow-md transition">
                                                <h5 className="font-semibold">Delete User</h5>
                                                <p className="text-sm text-gray-600">Remove users and revoke system access.</p>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>

                            {/* RBAC FLOW */}

                            <div className="bg-white p-6 rounded-xl shadow-md mb-8">

                                <h3 className="text-2xl font-semibold bg-purple-100 text-purple-800 text-center py-1 rounded mb-6">
                                    Role-Based Access Control (RBAC)
                                </h3>

                                <div className="grid lg:grid-cols-2 gap-10 items-center">

                                    {/* LEFT SIDE – FLOW */}

                                    <div className="flex flex-col items-center space-y-4">

                                        <div className="px-6 py-2 bg-purple-500 text-white rounded-full shadow-lg">
                                            Realm
                                        </div>

                                        <div className="text-3xl text-purple-400 animate-bounce">↓</div>

                                        <div className="px-6 py-2 bg-pink-500 text-white rounded-full shadow-lg">
                                            Client
                                        </div>

                                        <div className="text-3xl text-pink-400 animate-bounce">↓</div>

                                        <div className="px-6 py-2 bg-orange-500 text-white rounded-full shadow-lg">
                                            Role
                                        </div>

                                        <div className="text-3xl text-orange-400 animate-bounce">↓</div>

                                        <div className="px-6 py-2 bg-indigo-500 text-white rounded-full shadow-lg">
                                            User
                                        </div>

                                    </div>

                                    {/* RIGHT SIDE – EXPLANATION */}

                                    <div>

                                        <h4 className="text-lg font-semibold mb-3 text-purple-700">
                                            Access Flow Explanation
                                        </h4>

                                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                            <li><b>Realm</b> defines the authentication domain.</li>
                                            <li><b>Client</b> represents the application accessing EMS.</li>
                                            <li><b>Role</b> determines permissions and operations.</li>
                                            <li><b>User</b> inherits permissions based on assigned roles.</li>
                                        </ul>

                                        <div className="mt-5 p-4 bg-purple-50 rounded-lg shadow-sm">
                                            <h5 className="font-semibold mb-1">Example</h5>
                                            <p className="text-sm text-gray-700">
                                                User <b>user</b> → Realm <b>master</b> → Client <b>account</b> → Role <b>view-applications</b>
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            {/* FCAPS */}

                            <div className="bg-white p-6 rounded-xl shadow-md mb-8">

                                <h3 className="text-2xl font-semibold bg-teal-100 text-teal-800 text-center py-1 rounded mb-4">
                                    Security in FCAPS Framework
                                </h3>

                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Authentication – Verifies user identity.</li>
                                    <li>Authorization – Controls system access.</li>
                                    <li>Access Control – Restricts operations.</li>
                                    <li>Auditability – Tracks user activities.</li>
                                </ul>

                            </div>

                            {/* BENEFITS */}

                            <div className="bg-white p-6 rounded-xl shadow-md">

                                <h3 className="text-2xl font-semibold bg-green-100 text-green-800 text-center py-1 rounded mb-4">
                                    Telecom Operational Benefits
                                </h3>

                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Secure network management with controlled access.</li>
                                    <li>Granular permission control using RBAC.</li>
                                    <li>Multi-domain authentication using realms.</li>
                                    <li>Centralized user and access management.</li>
                                    <li>Supports compliance and auditing requirements.</li>
                                </ul>

                                <p className="text-black-700 font-bold text-center mt-4">
                                    Ensures secure, reliable, and compliant telecom network operations.
                                </p>

                            </div>

                        </div>
                    </section>


                    {/* ========================= Software MANAGEMENT ========================= */}
                    <section
                        id="software"
                        className="pt-10 bg-slate-50 scroll-mt-4 md:scroll-mt-12"
                    >
                        <div className="container prose-xl px-4 md:p-6">

                            {/* TITLE */}
                            <h3 className="text-3xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-center py-2 rounded-lg shadow">
                                EMS Software Management Module
                            </h3>

                            {/* INTRO */}
                            <p className="text-gray-700 leading-relaxed mt-4">
                                The EMS Software Management module provides centralized control for managing
                                firmware and software versions across telecom network elements such as gNB,
                                DU, and CU devices.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                It enables secure software deployment, validation, activation, rollback,
                                and real-time monitoring of upgrade events, ensuring high availability
                                and network stability.
                            </p>

                            {/* TAGS */}
                            <div className="flex flex-wrap gap-3 mb-8 justify-center">

                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow hover:shadow-md">
                                    Software Slots
                                </span>

                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow hover:shadow-md">
                                    Upgrade Monitoring
                                </span>

                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow hover:shadow-md">
                                    Validation
                                </span>

                                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg shadow hover:shadow-md">
                                    Deployment
                                </span>

                            </div>

                            {/* OVERVIEW (IMAGE LEFT - TEXT RIGHT) */}
                            <div className="grid lg:grid-cols-2 gap-12 items-start bg-white p-6 rounded-xl shadow-md mb-8">

                                <div>
                                    <img
                                        src={SoftwareManagementDashboard}
                                        className="rounded-xl shadow-lg border hover:scale-105 transition duration-300"
                                    />

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">

                                        <li>Ensures safe and controlled deployment</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold bg-blue-100 text-blue-800 text-center py-1 rounded mb-4">
                                        Software Management Overview
                                    </h3>

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Manages software across gNB, DU, CU devices</li>
                                        <li>Controls software download and activation</li>
                                        <li>Supports rollback to previous versions</li>
                                        <li>Tracks software upgrade lifecycle</li>
                                        <li>Ensures compatibility and validation checks</li>
                                        <li>Centralized firmware lifecycle management</li>
                                        <li>Supports validation, activation & rollback</li>
                                    </ul>
                                </div>

                            </div>

                            {/* SLOT MANAGEMENT */}
                            <div className="grid lg:grid-cols-2 gap-12 items-start bg-white p-6 rounded-xl shadow-md mb-8">

                                <div>

                                    <h3 className="text-2xl font-semibold bg-indigo-100 text-indigo-800 text-center py-1 rounded mb-4">
                                        Software Slot Management
                                    </h3>

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Supports dual-slot architecture (PART-A / PART-B)</li>
                                        <li>Allows installation in inactive slot</li>
                                        <li>Enables safe activation without downtime</li>
                                        <li>Provides validation before switching slots</li>
                                        <li>Tracks active and running software</li>
                                    </ul>

                                </div>

                                <img
                                    src={SoftwareManagement}
                                    className="rounded-xl shadow-lg border hover:scale-105 transition duration-300"
                                />

                            </div>

                            {/* OPERATIONS */}
                            <div className="grid lg:grid-cols-2 gap-12 items-start bg-white p-6 rounded-xl shadow-md mb-8">

                                <div>
                                    <img
                                        src={SoftwareManagementOperations}
                                        className="rounded-xl shadow-lg border hover:scale-105 transition duration-300"
                                    />

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">

                                        <li>Reset clears upgrade state</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold bg-red-100 text-red-800 text-center py-1 rounded mb-4">
                                        Software Operations
                                    </h3>

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Validate software compatibility and integrity</li>
                                        <li>Download firmware from file server</li>
                                        <li>Abort stops ongoing upgrade process</li>
                                        <li>Reset clears incomplete operations</li>
                                        <li>Validate ensures integrity before install</li>
                                        <li>Download transfers software to device</li>
                                    </ul>
                                </div>

                            </div>

                            {/* EVENTS */}
                            <div className="bg-white p-6 rounded-xl shadow-md mb-8">

                                <h3 className="text-2xl font-semibold bg-teal-100 text-teal-800 text-center py-1 rounded mb-4">
                                    Software Upgrade Events Monitoring
                                </h3>

                                <div className="grid lg:grid-cols-2 gap-12 items-start">

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Tracks all upgrade events in real time</li>
                                        <li>Displays device type and slot details</li>
                                        <li>Records timestamps for each operation</li>
                                    </ul>

                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Status: STARTED / COMPLETED</li>
                                        <li>Result: SUCCESS / FAILED</li>
                                        <li>Detailed logs for troubleshooting</li>
                                    </ul>

                                </div>

                            </div>

                        </div>
                    </section>

                    {/* ========================= TECHNOLOGIES ========================= */}


                    <div className="bg-slate-50 rounded-xl  p-4 md:p-6">
                        <h3 className="text-3xl bg-gray-400 font-semibold text-center mb-10">
                            Technologies Used
                        </h3>

                        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> */}
                        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"> */}
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {[
                                {
                                    name: "Java & Spring Boot",
                                    icon: Coffee,
                                    accent: "border-t-orange-500 text-orange-600"
                                },
                                {
                                    name: "React",
                                    icon: Code2,
                                    accent: "border-t-blue-500 text-blue-600"
                                },
                                {
                                    name: "Elasticsearch",
                                    icon: Database,
                                    accent: "border-t-yellow-500 text-yellow-600"
                                },
                                {
                                    name: "TimescaleDB",
                                    icon: Database,
                                    accent: "border-t-green-500 text-green-600"
                                },
                                {
                                    name: "Docker",
                                    icon: Box,
                                    accent: "border-t-sky-500 text-sky-600"
                                },
                                {
                                    name: "Kubernetes",
                                    icon: Cloud,
                                    accent: "border-t-indigo-500 text-indigo-600"
                                },
                                {
                                    name: "NetConf",
                                    icon: Network,
                                    accent: "border-t-purple-500 text-purple-600"
                                },
                                {
                                    name: "REST APIs",
                                    icon: Globe,
                                    accent: "border-t-rose-500 text-rose-600"
                                },
                                {
                                    name: "VES",
                                    icon: Activity,
                                    accent: "border-t-pink-500 text-pink-600"
                                },
                                {
                                    name: "ODL",
                                    icon: GitBranch,
                                    accent: "border-t-teal-500 text-teal-600"
                                },
                                {
                                    name: "ONAP",
                                    logo: OnapLogo,
                                    accent: "border-t-red-500 text-red-600"
                                }
                            ].map((tech, index) => {
                                const Icon = tech.icon;

                                return (
                                    <div
                                        key={index}
                                        className={`bg-white rounded-md p-4 
                                                border border-gray-200 border-t-4
                                                ${tech.accent}
                                                flex flex-col items-center justify-center text-center
                                                h-36
                                                transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}
                                    >
                                        {/* Fixed icon container */}
                                        <div className="h-12 flex items-center justify-center mb-2">
                                            {tech.logo ? (
                                                <img
                                                    src={tech.logo}
                                                    alt={tech.name}
                                                    className="max-h-12 object-contain"
                                                />
                                            ) : tech.icon ? (
                                                <tech.icon className="w-8 h-8" strokeWidth={2} />
                                            ) : null}
                                        </div>

                                        <p className="font-medium text-black-800 text-xl tracking-wide">
                                            {tech.name}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>



                    {/* ========================= BUSINESS BENEFITS ========================= */}
                    {/* <div className="bg-slate-50 rounded-xl p-10">
                        <h3 className="text-3xl font-semibold text-center">Business Benefits</h3>

                        <div className="grid md:grid-cols-2 gap-6 text-black-700">
                            <p>• Reduced operational complexity</p>
                            <p>• Faster and safer device onboarding</p>
                            <p>• Improved network reliability</p>
                            <p>• Safer configuration management</p>
                            <p>• Enhanced performance visibility</p>
                            <p>• Secure multi-user operations</p>
                            <p>• Lower operational risk</p>
                        </div>
                    </div> */}
                    <div className="bg-slate-50 rounded-xl  p-4 md:p-6">
                        <h3 className="text-3xl bg-gray-400 font-semibold text-center mb-10">
                            Business Benefits
                        </h3>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {[
                                { text: "Reduced operational complexity", icon: Settings2 },
                                { text: "Faster and safer device onboarding", icon: ShieldCheck },
                                { text: "Improved network reliability and stability", icon: Activity },
                                { text: "Safer configuration management", icon: ShieldCheck },
                                { text: "Enhanced visibility into network performance", icon: TrendingUp },
                                { text: "Secure multi-user operations", icon: Users },
                                { text: "Lower operational risk and improved efficiency", icon: Gauge }
                            ].map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className="bg-white border border-gray-200 rounded-lg p-5
                     flex items-start gap-4
                     transition-all duration-300
                     hover:shadow-md hover:-translate-y-1"
                                    >
                                        <Icon
                                            className="w-7 h-7 text-blue-600 mt-1"
                                            strokeWidth={3}
                                        />

                                        <p className="text-gray-800 text-m font-medium leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ========================= COMPLIANCE ========================= */}
                    <div className="bg-slate-50 rounded-xl p-4 md:p-6">
                        <h3 className="text-3xl font-semibold text-center">
                            Compliance & Security Statement
                        </h3>

                        <p className="text-black-600 leading-relaxed">
                            The EMS is designed following enterprise security best practices and telecom management standards,
                            ensuring safe and controlled operation without exposing sensitive device or customer information.
                        </p>
                    </div>

                </div>
            </section>





        </div>
    );
}
