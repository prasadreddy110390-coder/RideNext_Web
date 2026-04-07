import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Cloud, Zap, Shield } from "lucide-react";
import { Server, Layers, Cpu, Box } from "lucide-react";
export default function Virtualization() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Virtualization Services"
        subtitle="Cloud infrastructure and virtual environment solutions."
      />
      <section className="pt-14 bg-gradient-to-b from-slate-50 to-white scroll-mt-16 mb-6">

        <div className="max-w-7xl mx-auto space-y-12">

          {/* ================= VIRTUALISATION ================= */}
          <div className="space-y-6">

            <div className="flex items-center gap-3">
              <Cloud className="text-blue-600" />
              <h2 className="text-3xl font-semibold">Virtualisation</h2>
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-black-900 font-semibold text-2xl mb-2">Overview</h3>
              <p className="text-black-700 text-lg">
                Enterprises face several practical and strategic challenges in virtualization, especially as they scale, modernize, or move toward cloud-native architecture.
              </p>
            </div>

            {/* Expertise */}
            <div>
              <h3 className="font-semibold text-xl mb-2">Expertise</h3>

              <p className="text-black-700 text-lg mb-3">
                At RideNext, our technical expertise includes virtualization, particularly in telecommunications networking.
              </p>

              <div className="space-y-3">
                <div className="flex gap-2">
                  <Layers className="text-blue-500" />
                  <p className="text-lg" >
                    <strong>Network Functions Virtualization (NFV):</strong> We work on NFV by decoupling telecom network functions from proprietary hardware and running them as software on general-purpose servers, enabling flexibility, scalability, and resource efficiency.
                  </p>
                </div>

                <div className="flex gap-2">
                  <Cpu className="text-blue-500" />
                  <p className="text-lg">
                    This includes virtualizing elements like <strong>RNC, eNodeB, HNB GW, HeNB GW</strong> — core components in 3G/4G/5G networks — so they can run on virtualized servers rather than dedicated physical infrastructure.
                  </p>
                </div>
              </div>

              {/* Tools */}
              <div className="mt-4">
                <h3 className="font-semibold text-xl mb-2">Expertise with Virtualization Frameworks & Tools</h3>
                <ul className="list-disc pl-6 space-y-1 text-black-700 text-lg">
                  <li>Virtualization frameworks such as VMware and Red Hat Enterprise Linux (RHEL) environments</li>
                  <li>Cloud resource management using OpenStack</li>
                  <li>Performance-focused packet processing stacks like Intel DPDK and Vector Packet Processing (VPP)</li>
                  <li>Support for optimizing and managing virtualized network functions in cloud environments</li>
                </ul>
              </div>

            </div>

          </div>

          {/* Divider */}
          <div className="border-t" />

          {/* ================= KUBERNETES ================= */}
          <div className="space-y-6">

            <div className="flex items-center gap-3">
              <Cloud className="text-blue-600" />
              <h2 className="text-3xl font-semibold">Kubernetes</h2>
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-black-900 font-semibold text-2xl mb-2">Overview</h3>
              <p className="text-lg text-black-700">
                In today’s dynamic business environment, the lack of Kubernetes integration across Docker and Non-RT RIC results in increased complexity and inefficiency.
              </p>
            </div>

            {/* Expertise */}
            <div>
              <h3 className="font-semibold text-xl mb-2">Expertise</h3>
              <p className="text-black-700 text-lg">
                RideNext leverages Kubernetes as a core cloud-native orchestration layer to build, deploy, and operate highly scalable, resilient, and telecom-grade platforms across O-RAN ecosystems, Non-RT RIC, AI/ML workloads, and enterprise microservices, ensuring carrier-class reliability and operational efficiency.
              </p>
            </div>

            {/* BlueFox */}
            <div>
              <h3 className="font-semibold text-xl mb-3">Kubernetes in BlueFox Platform</h3>

              <div className="space-y-2 text-black-700 text-lg">
                <p>BlueFox is RideNext’s cloud-native platform designed for scalable network intelligence and service orchestration.</p>
              </div>

              <div className="grid md:grid-cols-2 text-lg gap-4 mt-3">
                {[
                  "Microservices orchestration: BlueFox services are deployed as containerized microservices on Kubernetes enabling independent scaling, upgrades, and fault isolation",
                  "High Availability & Resilience: Kubernetes self-healing ensures automatic pod restarts and rescheduling supporting telecom-grade uptime",
                  "Dynamic Scaling: Horizontal Pod Autoscaling (HPA) adjusts resources based on traffic and workload demand",
                  "Multi-Environment Deployments: Consistent deployments across dev, test, staging, and production",
                  "CI/CD Integration: Seamless integration with DevOps pipelines for faster and safer releases"
                ].map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <Box className="text-indigo-500" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h4 className="font-semibold text-xl">Business Value</h4>
                <ul className="list-disc pl-6 text-lg text-gray-700">
                  <li>Faster feature rollout</li>
                  <li>Reduced downtime</li>
                  <li>Cloud-agnostic deployments (on-prem, private cloud, public cloud)</li>
                </ul>
              </div>
            </div>

            {/* Non-RT RIC */}
            <div>
              <h3 className="text-black-900 font-semibold text-2xl mb-2">Kubernetes in Docker-Based Non-RT RIC</h3>

              <ul className="space-y-2 text-black-700 text-lg">
                <li>Non-RT RIC Service Hosting: Policy management, rApps, data ingestion, and analytics services run as Kubernetes pods</li>
                <li>Lifecycle Management: Automated deployment, scaling, rolling upgrades, and rollback of Non-RT RIC components</li>
                <li>rApp Enablement: Kubernetes provides a standardized runtime environment for rApps</li>
                <li>Observability & Monitoring: Integrated logging, metrics, and health checks for real-time visibility</li>
                <li>Resource Optimization: Efficient CPU and memory allocation for AI/ML and analytics workloads</li>
                <li>Standards Alignment: O-RAN architecture, cloud-native principles, and vendor-neutral containerized deployments</li>
              </ul>

              <div className="mt-4">
                <h4 className="font-semibold text-xl">Business Value</h4>
                <ul className="list-disc pl-6 text-black-700 text-lg">
                  <li>Faster onboarding of rApps</li>
                  <li>Reduced operational complexity</li>
                  <li>Scalable Non-RT RIC deployments</li>
                </ul>
              </div>
            </div>

            {/* Other Platforms */}
            <div>
              <h3 className="font-semibold text-2xl mb-3">Kubernetes in Other RideNext Platforms & Services</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-xl">5G EMS & Network Management Systems</h4>
                  <p className="text-gray-700 text-lg">Scalable microservices for provisioning, configuration, and fault management with high availability for critical network operations.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-xl">Testing & Validation Platforms</h4>
                  <p className="text-gray-700 text-lg">On-demand spin-up of test environments and parallel test execution using Kubernetes jobs for efficient large-scale testing.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-xl">AI/ML & Analytics Workloads</h4>
                  <p className="text-gray-700 text-lg">Containerized ML pipelines with auto-scaling and GPU-enabled Kubernetes clusters for data-intensive workloads.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-xl">Enterprise & Web Applications</h4>
                  <p className="text-gray-700 text-lg">Secure, scalable backend services with API gateways, service meshes, and zero-downtime deployments.</p>
                </div>
              </div>
            </div>

            {/* Capabilities */}
            <div>
              <h3 className="font-semibold text-xl mb-3">RideNext Kubernetes Capabilities at a Glance</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-lg text-gray-700">
                <li>Kubernetes architecture design & implementation</li>
                <li>Telecom-grade cloud-native deployments</li>
                <li>Docker containerization & orchestration</li>
                <li>CI/CD & DevSecOps integration</li>
                <li>O-RAN & 5G-ready platforms</li>
                <li>Multi-cloud & hybrid cloud support</li>
              </ul>
            </div>

            {/* Why RideNext */}
            <div className="mt-12 mb-20 p-6 hover:shadow-md transition rounded-2xl bg-gradient-to-r from-indigo-50 via-white to-blue-50 border shadow-sm">
              <h3 className="font-semibold text-2xl hover:shadow-md transition mb-4 text-white-600 flex items-center gap-2">
                Why RideNext
              </h3>

              <ul className="space-y-3 text-lg hover:shadow-md transition text-white-700 pl-6 list-disc">
                <li>Accelerate innovation</li>
                <li>Reduce infrastructure lock-in</li>
                <li>Improve reliability and scalability</li>
                <li>Seamlessly align with 5G, O-RAN, and cloud-native ecosystems</li>
              </ul>
            </div>

          </div>

        </div>
      </section>
    </div>
  );

}
