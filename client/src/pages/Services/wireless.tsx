import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Globe, Zap, Lock } from "lucide-react";

export default function wireless() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Wireless & Network Engineering"
        subtitle=""
      />

      <section
        id="wireless-network-engineering"
        className="pt-14 bg-gradient-to-b from-slate-50 to-white scroll-mt-16"
      >
        <div className="container mx-auto px-4 md:px-8">

          {/* Header */}
          <div className="overflow-hidden mb-6">
            <div className="flex whitespace-nowrap marquee hover:pause-marquee">

              <p className="mx-10 text-2xl md:text-3xl font-bold tracking-wide gradient-text ">
                Powering Next-Gen connectivity through intelligent telecom wireless systems
                across 4G, 5G, and emerging 6G ecosystems.
              </p>
              <p className="mx-10 text-2xl md:text-3xl font-bold tracking-wide gradient-text ">
                Powering Next-Gen connectivity through intelligent telecom wireless systems
                across 4G, 5G, and emerging 6G ecosystems.
              </p>
            </div>
          </div>


          {/* Overview */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Overview</h3>

            <p className="text-black-700 text-lg leading-relaxed mb-4">
              Wireless & Network Engineering plays a critical role in today’s hyper-connected world,
              enabling seamless communication without physical constraints. It forms the backbone of
              modern digital ecosystems including mobile networks, Wi-Fi, IoT platforms, satellite
              communications, and next-generation 5G and emerging 6G technologies.
            </p>

            <p className="text-black-700 text-lg leading-relaxed mb-4">
              As enterprises and telecom operators evolve towards software-defined, cloud-native, and
              highly distributed network architectures, the demand for robust, scalable, and intelligent
              network engineering solutions continues to grow. This domain is central to ensuring
              high availability, low latency, enhanced user experience, and secure data transmission
              across diverse environments.
            </p>

            <ul className="space-y-3 text-lg text-black-700">
              <li className="flex gap-3">
                <span>🌐</span>
                Enables seamless connectivity across heterogeneous networks including cellular, Wi-Fi, and satellite systems
              </li>
              <li className="flex gap-3">
                <span>⚡</span>
                Supports low-latency, high-bandwidth applications such as IoT, real-time analytics, and mission-critical services
              </li>
              <li className="flex gap-3">
                <span>☁️</span>
                Drives adoption of cloud-native and virtualized network functions (NFV, SDN)
              </li>
              <li className="flex gap-3">
                <span>🔐</span>
                Ensures secure and reliable communication across distributed and multi-vendor environments
              </li>
              <li className="flex gap-3">
                <span>📊</span>
                Enables intelligent network monitoring, optimization, and automation using data-driven insights
              </li>
            </ul>
          </div>

          {/* Key Solutions */}
          <div className="mb-6 mt-6">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-3">
              Our Key Solutions & Innovations
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Blue Fox AWTS */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition border-t-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Blue Fox AWTS (Advanced Wireless Testing Simulator)
              </h3>

              <p className="text-black-700 mb-4 leading-relaxed text-lg">
                Blue Fox AWTS is a powerful in-house developed telecom testing platform designed to simulate,
                validate, and analyze complex wireless network behaviors across 3G, 4G LTE, and 5G environments.
              </p>

              <ul className="grid md:grid-cols-2 gap-3 text-black-700 text-lg">
                <li>✔ GUI-based simulation with intuitive drag-and-drop workflow builder</li>
                <li>✔ Full support for control-plane signaling and protocol flows</li>
                <li>✔ Simulation of network elements (DU, CU, AMF, eNodeB, gNodeB)</li>
                <li>✔ Emulation of UE-to-core interactions without physical hardware</li>
                <li>✔ Realistic traffic generation for stress and performance testing</li>
                <li>✔ Integrated Wireshark trace generation for protocol debugging</li>
                <li>✔ Ideal for R&D labs, protocol testing, and conformance validation</li>
                <li>✔ Accelerates development cycles and reduces dependency on physical setups</li>
              </ul>
            </div>

            {/* Open RAN */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition border-t-4 border-green-500">
              <h3 className="text-xl font-semibold text-green-600 mb-4">
                Open RAN Engineering
              </h3>

              <p className="text-black-700 mb-4 leading-relaxed text-lg">
                RideNext contributes to the evolution of Open RAN ecosystems by focusing on software-defined,
                disaggregated network architectures powered by open interfaces and open-source technologies.
              </p>

              <ul className="grid md:grid-cols-2 gap-3 text-black-700 text-lg">
                <li>✔ Expertise in OpenAirInterface (OAI) for RAN & Core development</li>
                <li>✔ Integration of open-source stacks with COTS user equipment</li>
                <li>✔ End-to-end 4G/5G signaling implementation across UE, RAN, and Core</li>
                <li>✔ Protocol stack development, testing, and customization</li>
                <li>✔ Support for multi-vendor interoperability and system validation</li>
                <li>✔ Alignment with O-RAN standards and cloud-native deployments</li>
                <li>✔ Focus on flexibility, cost optimization, and vendor neutrality</li>
                <li>✔ Strong contribution to R&D and experimental telecom environments</li>
              </ul>
            </div>

          </div>

          {/* Footer highlight */}
          <div className="mt-14 mb-14 relative group">

            {/* Outer Glow Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 blur-xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

            {/* Card */}
            <div className="relative rounded-3xl overflow-hidden">

              {/* Animated Gradient Background */}
              <div className="absolute inset-0 animate-gradient bg-[linear-gradient(270deg,#4f46e5,#2563eb,#06b6d4,#4f46e5)] bg-[length:400%_400%]"></div>

              {/* Glass Layer */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>

              {/* Light Effects */}
              <div className="absolute -top-16 -left-16 w-56 h-56 bg-cyan-300 opacity-20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-indigo-300 opacity-20 rounded-full blur-3xl"></div>

              {/* Content */}
              <div className="relative z-10 p-10 text-center text-white">

                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">
                  Driving the Future of Connectivity
                </h3>

                <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-blue-100">
                  From advanced wireless simulations to Open RAN innovation, RideNext empowers organizations
                  to build resilient, scalable, and future-ready telecom ecosystems.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
