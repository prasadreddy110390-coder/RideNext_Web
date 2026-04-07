import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Database as DatabaseIcon, TrendingUp, Shield } from "lucide-react";

export default function Database() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Database Engineering"
        subtitle="Enterprise database solutions for data-driven applications."
      />

      <section
        id="database-engineering"
        className="pt-12 bg-slate-50 scroll-mt-16"
      >
        <div className="container mx-auto px-4 md:px-8">

          {/* Title */}
          {/* <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-3 rounded-xl shadow-lg mb-8">
            Database Engineering
          </h2> */}

          {/* Overview */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-10">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-3">
              Overview
            </h3>
            <p className="text-black-700 text-lg leading-relaxed">
              Enterprises today encounter a range of technical, operational, and
              strategic challenges when building and managing databases. These
              challenges include scalability limitations, performance bottlenecks,
              data integrity concerns, and evolving security and compliance
              requirements across complex and distributed environments.
            </p>
          </div>

          {/* Expertise */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">
              Expertise
            </h3>

            <p className="text-black-700 text-lg mb-6 leading-relaxed">
              At RideNext, we deliver enterprise-grade database engineering
              solutions that power scalable, secure, and high-performance digital
              platforms. Our expertise spans leading database technologies including
              <span className="font-medium"> Oracle, MS SQL, MySQL, PostgreSQL, and MongoDB</span>,
              enabling robust data platforms for telecom, IoT, and enterprise ecosystems.
            </p>

            {/* Expertise Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Scalable Architecture */}
              <div className="p-5 bg-indigo-50 rounded-xl shadow hover:shadow-lg transition duration-300">
                <h4 className="text-xl font-semibold text-indigo-700 mb-2">
                  Scalable Database Architecture
                </h4>
                <p className="text-black-700 text-lg ">
                  Design and implementation of high-availability and fault-tolerant
                  database systems to support mission-critical telecom, IoT, and
                  enterprise workloads.
                </p>
              </div>

              {/* Performance */}
              <div className="p-5 bg-blue-50 rounded-xl shadow hover:shadow-lg transition duration-300">
                <h4 className="text-xl font-semibold text-blue-700 mb-2">
                  High-Performance Optimization
                </h4>
                <p className="text-black-700 text-lg">
                  Advanced database tuning, query optimization, and workload
                  management strategies to ensure low latency and high throughput
                  under heavy workloads.
                </p>
              </div>

              {/* Telecom Data */}
              <div className="p-5 bg-purple-50 rounded-xl shadow hover:shadow-lg transition duration-300">
                <h4 className="text-xl font-semibold text-purple-700 mb-2">
                  Telecom & Network Data Management
                </h4>
                <p className="text-black-700 text-lg">
                  Proven expertise in managing large-scale telecom datasets including
                  CDRs, subscriber data, and real-time network performance metrics.
                </p>
              </div>

              {/* Cloud */}
              <div className="p-5 bg-green-50 rounded-xl shadow hover:shadow-lg transition duration-300">
                <h4 className="text-xl font-semibold text-green-700 mb-2">
                  Cloud-Native & Distributed Databases
                </h4>
                <p className="text-black-700 text-lg">
                  Cloud-ready and distributed database architectures supporting
                  elastic scaling, geo-replication, and resilient disaster recovery
                  strategies.
                </p>
              </div>

              {/* Security */}
              <div className="p-5 bg-red-50 rounded-xl shadow hover:shadow-lg transition duration-300">
                <h4 className="text-xl font-semibold text-red-700 mb-2">
                  Security & Compliance
                </h4>
                <p className="text-black-700 text-lg">
                  Implementation of secure-by-design database systems with encryption,
                  role-based access control, auditing, and regulatory compliance
                  alignment.
                </p>
              </div>

              {/* Analytics */}
              <div className="p-5 bg-yellow-50 rounded-xl shadow hover:shadow-lg transition duration-300">
                <h4 className="text-xl font-semibold text-yellow-700 mb-2">
                  Analytics & Intelligence Enablement
                </h4>
                <p className="text-black-700 text-lg">
                  Seamless integration with BI tools, analytics platforms, and AI/ML
                  pipelines to enable intelligent, data-driven decision-making.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
