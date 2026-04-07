import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Cpu, TrendingUp, Gauge } from "lucide-react";
import emsarchitecture from "@assets//ems-architecture.png"

export default function EMS() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Innovative Products, Scalable Services & Real-World  Impact."
        subtitle=""
      />

      {/* <section className="py-6 bg-slate-50">
        <div >
          <div className="container prose-xl px-4 md:px-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
              <p className="text-lg  mb-6 leading-relaxed">
                Managing a large number of 5G network devices manually is complex, time-consuming, and error-prone. Network operators require a unified management platform to control device configurations, monitor performance, detect faults proactively, and enforce enterprise security policies across distributed network environments.
              </p>
              <p className="text-lg  mb-6 leading-relaxed">
                **5G Element Management System (EMS)** is a centralized management platform designed to manage and monitor 5G network elements efficiently. The system enables secure onboarding, configuration, monitoring, and fault management of network devices through an intuitive web-based interface. It is integrated with a controller layer (SDNR) to handle device communication and state management.
              </p>
              <p className="text-lg  mb-6 leading-relaxed">
                The 5G Element Management System (EMS) provides a comprehensive, scalable, and secure platform for managing modern telecom network elements. By combining centralized control, real-time monitoring, and strong security practices, the EMS enables organizations to operate, scale, and optimize 5G networks efficiently and reliably.
              </p>
              <p className="text-lg  mb-6 leading-relaxed">
                This EMS is built to support telecom-grade operations and follows standard network management principles.
              </p>
            </div>
           
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-8"></h3>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              {
                icon: TrendingUp,
                title: "Expertise",
                description: [
                  "RideNext ensures that EMS provides a centralized and automated solution to manage 5G network elements by:",
                  "Automating device onboarding through pre-provisioning",
                  "Enabling safe and validated configuration management",
                  "Providing real-time and historical performance visibility",
                  "Detecting and displaying device faults and alarms",
                  "Enforcing role-based access control and security policies"
                ]
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

                <ul className="space-y-2 text-black-600">
                  {item.description.map((line, i) => (
                    <li key={i} className={i === 0 ? "font-medium list-none" : "list-disc ml-5"}>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {[
              {
                icon: TrendingUp,
                title: "High-Level Architecture",
                description: [
                  "The EMS follows a layered architecture:",
                  "5G Network Device (gNB / Simulator)",
                  "↓",
                  "Controller Layer (SDNR)",
                  "↓",
                  "Web-Based EMS UI",
                  "- Device Layer: 5G gNB network elements or simulators",
                  "- Controller Layer (SDNR): Manages device connectivity, operational state, and southbound communication; performs orchestration and control ",
                  "- EMS UI Layer: Provides visualization, monitoring, configuration, and user interaction"
                ]
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

                <ul className="space-y-2 text-black-600">
                  {item.description.map((line, i) => (
                    <li key={i} className={i === 0 ? "font-medium list-none" : "list-disc ml-5"}>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              {
                icon: TrendingUp,
                title: "High-Level Architecture",
                description: [
                  "The EMS follows a layered architecture:",
                  "5G Network Device (gNB / Simulator)",
                  "Controller Layer (SDNR)",
                  "Web-Based EMS UI",
                  "-Device Layer: 5G gNB network elements or simulators",
                  "-Controller Layer (SDNR): Manages device connectivity, operational state, and southbound communication; performs orchestration and control ",
                  "-EMS UI Layer: Provides visualization, monitoring, configuration, and user interaction"
                ]
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

                <div className="space-y-2 text-black-600">
                  {item.description.map((line, i) => (
                    <p key={i} className={i === 0 ? "font-medium" : ""}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            {[
              {
                icon: TrendingUp,
                title: "Expertise",
                description: [
                  "RideNext ensures that EMS provides a centralized and automated solution to manage 5G network elements by:",
                  "Automating device onboarding through pre-provisioning",
                  "Enabling safe and validated configuration management",
                  "Providing real-time and historical performance visibility",
                  "Detecting and displaying device faults and alarms",
                  "Enforcing role-based access control and security policies"
                ]
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

                <div className="space-y-2 text-black-600">
                  {item.description.map((line, i) => (
                    <p key={i} className={i === 0 ? "font-medium" : ""}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>



          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Benefits</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>Reduce development and testing cycle time</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>Identify issues before field deployment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>Cost-effective testing at scale</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>Validate system design and architecture</span>
              </li>
            </ul>
          </div>
        </div>

      </section> */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">

          {/* ================= OVERVIEW ================= */}
          <div className=" container prose-xl px-4 md:px-6">
            <h2 className="text-center">5G Element Management System (EMS)</h2>
            
          </div>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Overview
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Managing a large number of 5G network devices manually is complex,
              time-consuming, and error-prone. Network operators require a unified
              management platform to control configurations, monitor performance,
              detect faults, and enforce enterprise security policies.
            </p>

            <p className="text-gray-600 leading-relaxed">
              The EMS is a centralized, scalable, and secure platform designed to
              manage and monitor modern telecom network elements efficiently through
              an intuitive web-based interface integrated with a controller layer (SDNR).
            </p>
          </div>

          {/* ================= ARCHITECTURE ================= */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                High-Level Architecture
              </h3>

              <p className="text-gray-600 mb-6">
                The EMS follows a layered architecture ensuring modularity,
                scalability, and secure communication between components.
              </p>

              <ul className="space-y-3 text-gray-600">
                <li><strong>Device Layer:</strong> 5G gNB network elements or simulators</li>
                <li><strong>Controller Layer (SDNR):</strong> Orchestration, state management, southbound communication</li>
                <li><strong>EMS UI Layer:</strong> Visualization, monitoring, configuration, and user interaction</li>
              </ul>
            </div>

            {/* Architecture Image */}
            <div className="flex justify-center">
              <img
                src={emsarchitecture}
                alt="5G EMS Architecture"
                className="rounded-xl shadow-lg border"
              />
            </div>
          </div>

          {/* ================= EXPERTISE ================= */}
          <div>
            <h3 className="text-3xl text-center font-semibold mb-6">Expertise</h3>

            <div className="bg-slate-50 text-center rounded-xl p-8">
              <ul className="space-y-3 text-gray-700">
                <li>Automated device onboarding through pre-provisioning</li>
                <li>Safe and validated configuration management</li>
                <li>Real-time and historical performance visibility</li>
                <li>Device fault detection and alarm management</li>
                <li>Role-based access control and enterprise security enforcement</li>
              </ul>
            </div>
          </div>

          {/* ================= KEY FEATURES ================= */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Services / Key Features</h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Secure device onboarding",
                "Centralized configuration management",
                "Configuration validation & change review",
                "Graphical performance dashboards",
                "Fault & alarm management",
                "Role-based access control",
                "Scalable & modular architecture"
              ].map((feature, i) => (
                <div key={i} className="p-6 border rounded-lg hover:shadow-md transition">
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= PERFORMANCE ================= */}
          <div className="max-w-5xl">
            <h3 className="text-2xl font-semibold mb-6">Performance Monitoring</h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              The EMS collects performance metrics periodically and visualizes them
              through interactive dashboards, enabling real-time and historical
              analysis of network behavior.
            </p>

            <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
              <li>Network throughput (device & cell level)</li>
              <li>Connected elements & operational status</li>
              <li>Cell statistics & active cells</li>
              <li>Active user count & distribution</li>
              <li>Resource utilization trends</li>
            </ul>
          </div>

          {/* ================= FAULT MANAGEMENT ================= */}
          <div className="max-w-5xl">
            <h3 className="text-2xl font-semibold mb-6">Fault Management</h3>

            <p className="text-gray-600 leading-relaxed">
              Continuous device monitoring ensures real-time detection of abnormal
              conditions. Alarms are raised with severity levels, timestamps,
              and contextual information for faster fault isolation and mitigation.
            </p>
          </div>

          {/* ================= SECURITY ================= */}
          <div className="max-w-5xl">
            <h3 className="text-2xl font-semibold mb-6">Security & Access Control</h3>

            <ul className="space-y-3 text-gray-600">
              <li>Enterprise-grade authentication</li>
              <li>Role-based access control (RBAC)</li>
              <li>Audit logging for compliance</li>
              <li>Secure configuration & data access</li>
              <li>Protection of critical network elements</li>
            </ul>
          </div>

          {/* ================= BUSINESS BENEFITS ================= */}
          <div className="bg-slate-50 rounded-xl p-10">
            <h3 className="text-2xl font-semibold mb-6">Business Benefits</h3>

            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <p>Reduced operational complexity</p>
              <p>Faster and safer device onboarding</p>
              <p>Improved network reliability</p>
              <p>Enhanced performance visibility</p>
              <p>Secure multi-user operations</p>
              <p>Lower operational risk & improved efficiency</p>
            </div>
          </div>

        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

          {/* ========================= OVERVIEW ========================= */}
          <div className="max-w-5xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              5G Element Management System (EMS)
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Managing a large number of 5G network devices manually is complex,
              time-consuming, and error-prone. Network operators require a unified
              management platform to control device configurations, monitor
              performance, detect faults proactively, and enforce enterprise
              security policies across distributed network environments.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              The EMS is a centralized management platform designed to manage
              and monitor 5G network elements efficiently. It enables secure
              onboarding, configuration, monitoring, and fault management
              through an intuitive web-based interface integrated with a
              controller layer (SDNR).
            </p>

            <p className="text-gray-600 leading-relaxed">
              The system supports telecom-grade operations and follows standard
              network management principles, ensuring scalability, reliability,
              and strong security practices.
            </p>
          </div>

          {/* ========================= EXPERTISE ========================= */}
          <div>
            <h3 className="text-3xl font-semibold mb-8">Expertise</h3>

            <div className="bg-slate-50 p-8 rounded-xl">
              <p className="text-gray-700 mb-4">
                Ride Next ensures that EMS provides a centralized and automated
                solution to manage 5G network elements by:
              </p>

              <ul className="space-y-3 text-gray-700">
                <li>• Automating device onboarding through pre-provisioning</li>
                <li>• Enabling safe and validated configuration management</li>
                <li>• Providing real-time and historical performance visibility</li>
                <li>• Detecting and displaying device faults and alarms</li>
                <li>• Enforcing role-based access control and security policies</li>
              </ul>
            </div>
          </div>

          {/* ========================= ARCHITECTURE ========================= */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-6">
                High-Level Architecture
              </h3>

              <p className="text-gray-600 mb-6">
                The EMS follows a layered architecture:
              </p>

              <div className="space-y-3 text-gray-700">
                <p><strong>Device Layer:</strong> 5G gNB network elements or simulators</p>
                <p><strong>Controller Layer (SDNR):</strong> Manages device connectivity,
                  operational state, orchestration, and southbound communication</p>
                <p><strong>EMS UI Layer:</strong> Visualization, monitoring,
                  configuration, and user interaction</p>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/ems-architecture.png"
                alt="EMS High Level Architecture"
                className="rounded-xl shadow-xl border"
              />
            </div>
          </div>

          {/* ========================= SERVICES / KEY FEATURES ========================= */}
          <div>
            <h3 className="text-3xl font-semibold mb-10">
              Services / Key Features
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
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
                  className="p-6 border rounded-lg hover:shadow-md transition"
                >
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ========================= FCAPS TABLE ========================= */}
          <div>
            <h3 className="text-3xl font-semibold mb-8">FCAPS Capability Mapping</h3>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left px-6 py-3 border">FCAPS Area</th>
                    <th className="text-left px-6 py-3 border">EMS Capability</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="px-6 py-3 border">Fault</td>
                    <td className="px-6 py-3 border">
                      Alarm detection, severity classification, visualization
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 border">Configuration</td>
                    <td className="px-6 py-3 border">
                      Device configuration and validation
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 border">Accounting</td>
                    <td className="px-6 py-3 border">
                      Usage and operational statistics (future extensible)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 border">Performance</td>
                    <td className="px-6 py-3 border">
                      KPI collection, analysis, dashboards
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 border">Security</td>
                    <td className="px-6 py-3 border">
                      Authentication, authorization, audit logging
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ========================= PERFORMANCE MONITORING ========================= */}
          <div className="max-w-5xl">
            <h3 className="text-3xl font-semibold mb-6">Performance Monitoring</h3>

            <p className="text-gray-600 mb-4">
              The EMS periodically collects performance metrics and stores them
              in a scalable data store. Metrics are visualized through interactive
              dashboards enabling analysis of device health, utilization, and trends.
            </p>

            <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mt-6">
              <li>• Network throughput at device and cell level</li>
              <li>• Connected elements and operational status</li>
              <li>• Cell-level statistics</li>
              <li>• Active user count and usage distribution</li>
              <li>• Resource utilization trends</li>
            </ul>

            <p className="text-gray-600 mt-6">
              Supports real-time and historical analysis for proactive capacity
              planning and optimization.
            </p>
          </div>

          {/* ========================= FAULT MANAGEMENT ========================= */}
          <div className="max-w-5xl">
            <h3 className="text-3xl font-semibold mb-6">Fault Management</h3>

            <p className="text-gray-600 leading-relaxed">
              The EMS continuously monitors device status and connectivity,
              detecting abnormal conditions in real time. When faults occur,
              alarms are raised with severity levels, timestamps, and context,
              enabling rapid isolation and mitigation to maintain service stability.
            </p>
          </div>

          {/* ========================= SECURITY ========================= */}
          <div className="max-w-5xl">
            <h3 className="text-3xl font-semibold mb-6">
              Security & Access Control
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>• Enterprise authentication and authorization</li>
              <li>• Role-based access control (RBAC)</li>
              <li>• Secure access to configuration and performance data</li>
              <li>• Audit logging for traceability and compliance</li>
              <li>• Protection against unauthorized access</li>
            </ul>
          </div>

          {/* ========================= TECHNOLOGIES ========================= */}
          <div>
            <h3 className="text-3xl font-semibold mb-8">Technologies Used</h3>

            <div className="grid md:grid-cols-3 gap-6 text-gray-700">
              <p>Java & Spring Boot</p>
              <p>React</p>
              <p>Elasticsearch</p>
              <p>PostgreSQL</p>
              <p>TimeScaleDB</p>
              <p>Docker & Kubernetes</p>
              <p>NetConf</p>
              <p>REST APIs</p>
            </div>
          </div>

          {/* ========================= BUSINESS BENEFITS ========================= */}
          <div className="bg-slate-50 rounded-xl p-10">
            <h3 className="text-3xl font-semibold mb-8">Business Benefits</h3>

            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <p>• Reduced operational complexity</p>
              <p>• Faster and safer device onboarding</p>
              <p>• Improved network reliability</p>
              <p>• Safer configuration management</p>
              <p>• Enhanced performance visibility</p>
              <p>• Secure multi-user operations</p>
              <p>• Lower operational risk</p>
            </div>
          </div>

          {/* ========================= COMPLIANCE ========================= */}
          <div className="max-w-5xl">
            <h3 className="text-3xl font-semibold mb-6">
              Compliance & Security Statement
            </h3>

            <p className="text-gray-600 leading-relaxed">
              The EMS follows enterprise security best practices and telecom
              management standards, ensuring safe and controlled operation
              without exposing sensitive device or customer information.
            </p>
          </div>

        </div>
      </section>


    </div>
  );
}
