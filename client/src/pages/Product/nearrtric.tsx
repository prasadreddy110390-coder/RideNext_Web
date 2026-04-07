import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Cpu, TrendingUp, Gauge } from "lucide-react";
import { motion } from "framer-motion";
import Oranstandards from "../../../public/nearrtric/oranstandards.png";
import Architecture from "../../../public/nearrtric/architecture.png";

import { useLocation } from "wouter";

"use client";
export default function NEARRTRIC() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Innovative Products, Scalable Services & Real-World  Impact."
        subtitle=""
      />

      <section className="bg-white py-10 bg-black-50">

        {/* Heading */}
        <div className="container prose-xl px-4 md:px-6">
          <h2 className="text-4xl text-center font-bold text-black-900 mb-6">
            NEAR RT RIC
          </h2>
          <h3 className="text-3xl font-semibold bg-gray-400 text-center">Overview</h3>
          <p className="text-black-600 leading-relaxed mb-4">
            We at RideNext play a key role in enabling and validating Near-Real-Time RAN Intelligent Controller
            (Near-RT RIC) solutions as part of the evolving 5G Open RAN ecosystem. Leveraging deep expertise in
            wireless protocols, RAN testing, and network intelligence, RideNext supports the development, integration,
            and validation of intelligent RAN control functions.
          </p>
        </div>
        <div className="max-w-7xl mx-auto space-y-12">

          {/* ================= HEADER ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900">
              Key Contributions
            </h2>
          </motion.div>


          {/* ================= ROW 1 ================= */}
          <div className="grid md:grid-cols-3 gap-10">

            {/* System */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-5">
                System
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-lg text-slate-700">
                <li>Feature Feasibility Study</li>
                <li>System FRS</li>
              </ul>
            </motion.div>

            {/* Development */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-5">
                Development
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-lg text-slate-700">
                <li>xApp Development</li>
                <li>RIC Platform Development</li>
              </ul>
            </motion.div>

            {/* System Integration & Testing */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-5">
                System Integration & Testing
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-lg text-slate-700">
                <li>Platform & inetgration Testing</li>
              </ul>
            </motion.div>

          </div>


          {/* ================= ROW 2 ================= */}
          <div className="grid md:grid-cols-2 gap-10">



            {/* ================= LEFT COLUMN ================= */}
            <div className="space-y-8">

              {/* Top Row – Side by Side */}
              <div className="grid sm:grid-cols-2 gap-6">

                {/* Other Activities */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                    Other Activities
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-lg text-slate-700">
                    <li>ORAN Standards</li>
                  </ul>
                </motion.div>

                {/* Automation */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition flex items-center justify-center text-center"
                >
                  <h3 className="text-xl font-semibold text-indigo-700">
                    Automation for IT Regression
                  </h3>
                </motion.div>

              </div>

              {/* Image Below */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-xl border border-slate-200"
              >
                <img
                  src={Oranstandards}   // <-- replace with your image path
                  alt="Near-RT RIC Architecture"
                  className="w-full h-full object-cover"
                />
              </motion.div>

            </div>


            {/* ================= RIGHT COLUMN (UNCHANGED) ================= */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-50 to-slate-100 rounded-2xl shadow-xl p-10 border border-slate-200"
            >
              <h3 className="text-2xl font-semibold text-indigo-800 mb-6">
                Near-RT RIC Architecture & Integration Support
              </h3>

              <p className="text-lg text-slate-700 leading-relaxed">
                RideNext provides specialized engineering support for Near-Real-Time RAN Intelligent Controller (Near-RT RIC)
                architecture, ensuring seamless integration with O-RAN compliant RAN components such as O-CU, O-DU, and O-RU.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mt-6">
                Our expertise covers standardized O-RAN interfaces including E2 for near-real-time control and telemetry
                exchange, A1 for policy guidance from Non-RT RIC, and O1 for management and performance monitoring.

              </p>
              <p className="text-lg text-slate-700 leading-relaxed mt-6">
                We focus on enabling interoperable, scalable, and vendor-neutral RAN ecosystems aligned with O-RAN Alliance
                specifications.

              </p>
              <p className="text-lg text-slate-700 leading-relaxed mt-6">
                Our teams assist in validating control loops, telemetry exchange, and policy enforcement mechanisms critical for
                near-real-time RAN optimization.
              </p>

              {/* <p className="text-lg text-slate-700 leading-relaxed mt-6">

                In addition, RideNext supports cloud-native Near-RT RIC deployments on Kubernetes-based platforms, enabling CI/CD-driven
                xApp onboarding and automated regression validation. We conduct interoperability testing, latency profiling, and
                scalability assessments to ensure robust performance under real-world traffic conditions, helping operators achieve
                intelligent, near-real-time RAN optimization with operational reliability.
              </p> */}
            </motion.div>

          </div>


          {/* ================= xApp Enablement ================= */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-3xl shadow-2xl p-12"
          >
            <h3 className="text-2xl font-semibold mb-6">
              xApp Development Enablement & Validation
            </h3>

            <p className="text-lg mb-6 font-semibold  opacity-95">
              We support the development and testing of xApps hosted on the Near-RT RIC by enabling:
            </p>

            <ul className="list-disc pl-6 space-y-4 text-lg opacity-95">
              <li>Validation of RAN data ingestion and analytics</li>
              <li>Testing of control actions for radio resource optimization</li>
              <li>Performance and stability testing under near-real-time constraints</li>
            </ul>

            <p className="text-lg mt-8 opacity-95">
              This ensures xApps operate reliably across diverse network scenarios.
            </p>

          </motion.div>

        </div>

        <div className="container max-w-6xl mx-auto px-4 md:px-6 space-y-10">

          {/* ================= RAN Simulation ================= */}
          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              RAN Simulation & Testing Frameworks
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Through RideNext’s advanced wireless simulation and testing platforms,
              we enable realistic RAN behavior emulation for Near-RT RIC validation.
              These platforms help test:
            </p>

            <ul className="space-y-3 text-lg text-gray-800">
              <li className="flex gap-3 items-start">
                <span className="text-primary mt-1">•</span>
                RIC-RAN signaling flows
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary mt-1">•</span>
                Load, latency, and scalability scenarios
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary mt-1">•</span>
                Interoperability across multi-vendor Open RAN environments
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary mt-1">•</span>
                Interoperability & Compliance Testing
              </li>
            </ul>

          </div>

          {/* ================= Interoperability & Compliance ================= */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Interoperability & Compliance Testing
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              RideNext delivers comprehensive interoperability and conformance testing
              services to ensure Near-RT RIC solutions align with O-RAN Alliance
              specifications. Our testing approach reduces deployment risks and
              accelerates commercial readiness for operators and vendors.
            </p>

          </div>

          {/* ================= Strategic Impact ================= */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-6 md:p-8 shadow-md space-y-4">

            <h2 className="text-3xl text-slate-200 md:text-4xl font-bold">
              Driving Intelligent, Open and Automated RAN
            </h2>

            <p className="text-lg leading-relaxed text-slate-200">
              By combining wireless domain expertise, robust testing capabilities, and
              Open RAN integration know-how, RideNext enables Near-RT RIC solutions
              that deliver intelligent, automated, and optimized RAN operations—a
              critical foundation for scalable 5G and future networks.
            </p>

          </div>

        </div>


        <div className="container max-w-7xl mx-auto px-4 md:px-6 space-y-12">

          {/* ===================== OVERVIEW ===================== */}
          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              O-RAN Architecture Overview
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              In the O-RAN architecture, the radio side includes Near-RT RIC, O-CU-CP,
              O-CU-UP, O-DU, and O-RU. The management side includes the Service
              Management and Orchestration (SMO) Framework, which contains the
              Non-RT RIC function.
            </p>

            {/* Image Placeholder */}
            <div className="w-full rounded-xl overflow-hidden border border-slate-200">
              <img
                src={Architecture}
                alt="O-RAN Architecture Diagram"
                className="w-full h-auto object-contain"
              />
            </div>

          </div>


          {/* ===================== COMPONENT DEFINITIONS ===================== */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-10">

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Components Definition
            </h3>

            <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-700 leading-relaxed">

              <div className="space-y-4">
                <p><span className="font-semibold text-gray-900">near-RT RIC:</span> O-RAN near-real-time RAN Intelligent Controller enabling near-real-time control and optimization of O-RAN elements via fine-grained data collection and actions over the E2 interface.</p>

                <p><span className="font-semibold text-gray-900">non-RT RIC:</span> O-RAN non-real-time RAN Intelligent Controller enabling non-real-time optimization, AI/ML workflows (model training and updates), and policy guidance for near-RT RIC applications.</p>

                <p><span className="font-semibold text-gray-900">NMS:</span> Network Management System.</p>

                <p><span className="font-semibold text-gray-900">O-CU:</span> O-RAN Central Unit hosting RRC, SDAP, and PDCP protocols.</p>

                <p><span className="font-semibold text-gray-900">O-CU-CP:</span> Central Unit – Control Plane hosting RRC and control-plane PDCP.</p>

                <p><span className="font-semibold text-gray-900">O-CU-UP:</span> Central Unit – User Plane hosting user-plane PDCP and SDAP.</p>
              </div>

              <div className="space-y-4">
                <p><span className="font-semibold text-gray-900">O-DU:</span> Distributed Unit hosting RLC, MAC, and High-PHY layers based on lower-layer functional split.</p>

                <p><span className="font-semibold text-gray-900">O-RU:</span> Radio Unit hosting Low-PHY and RF processing including FFT/iFFT and PRACH extraction.</p>

                <p><span className="font-semibold text-gray-900">O1:</span> Interface between SMO and O-RAN managed elements enabling FCAPS, software, and file management.</p>

                <p><span className="font-semibold text-gray-900">O1*:</span> Interface between SMO and Infrastructure Management Framework supporting O-RAN virtual network functions.</p>

                <p><span className="font-semibold text-gray-900">xAPP:</span> Independent software plug-in for the Near-RT RIC platform enabling third-party RAN functional extensibility.</p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
