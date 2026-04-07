import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Database as DatabaseIcon, TrendingUp, Shield } from "lucide-react";

export default function kubernetes() {
    return (
        <div className="min-h-screen">
            <PageHeader
                title="Powering Cloud-Native Platforms with Kubernetes Expertise"
                subtitle=""
            />

            <section id="kubernetes" className="pt-12 bg-slate-50 scroll-mt-16 mb-6">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">

                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                            Overview
                        </h2>
                        <div className="w-full bg-gradient-to-r from-blue-350 to-indigo-450 border border-red-500 mb-6 rounded-2xl p-6 shadow-sm">
                            <p className="text-black-700 text-lg leading-relaxed">
                                RideNext enables enterprises and telecom operators to adopt Kubernetes-based,
                                cloud-native architectures through deep expertise in containerization,
                                orchestration, automation, and lifecycle management. We build scalable,
                                resilient, and production-ready environments for modern applications and
                                network functions.
                            </p>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Cloud-Native Architecture */}
                        <div className="bg-white shadow-md rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                                Cloud-Native Architecture Enablement
                            </h3>
                            <p className="text-black-600 text-lg">
                                We design and implement Kubernetes-native architectures enabling
                                microservices-based deployments for improved scalability, agility,
                                and fault isolation. Our teams assist in decomposing monolithic
                                applications and onboarding them onto Kubernetes platforms.
                            </p>
                        </div>

                        {/* Telecom */}
                        <div className="bg-white shadow-md rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                                Kubernetes for Telecom & Network Functions
                            </h3>
                            <ul className="list-disc pl-5 text-black-600 text-lg space-y-2">
                                <li>Optimized clusters for low latency and high availability</li>
                                <li>Support for stateless and stateful telecom workloads</li>
                                <li>Enablement of CNFs for 5G Core, Open RAN, and edge deployments</li>
                            </ul>
                        </div>

                        {/* CI/CD */}
                        <div className="bg-white shadow-md rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                                Deployment, Automation & CI/CD
                            </h3>
                            <ul className="list-disc pl-5 text-black-600 text-lg space-y-2">
                                <li>Automated container build and image management</li>
                                <li>Seamless deployments with rolling upgrades</li>
                                <li>Canary releases and zero-downtime updates</li>
                            </ul>
                            <p className="text-black-600 text-lg mt-3">
                                Ensuring faster release cycles and operational consistency.
                            </p>
                        </div>

                        {/* Observability */}
                        <div className="bg-white shadow-md rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                                Observability, Reliability & Performance
                            </h3>
                            <ul className="list-disc pl-5 text-black-600 text-lg space-y-2">
                                <li>Centralized logging, monitoring, and alerting</li>
                                <li>Auto-healing, health checks, and auto-scaling</li>
                                <li>Performance and stress testing</li>
                            </ul>
                            <p className="text-black-600 text-lg mt-3">
                                Ensuring predictable performance under dynamic workloads.
                            </p>
                        </div>

                        {/* Security */}
                        <div className="bg-white shadow-md rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                                Security & Governance
                            </h3>
                            <ul className="list-disc pl-5 text-black-600 text-lg space-y-2">
                                <li>Role-Based Access Control (RBAC)</li>
                                <li>Network policies and workload isolation</li>
                                <li>Secure image pipelines and compliance checks</li>
                            </ul>
                            <p className="text-black-600 text-lg mt-3">
                                Enabling secure multi-tenant, enterprise-grade deployments.
                            </p>
                        </div>

                        {/* Testing */}
                        <div className="bg-white shadow-md rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-indigo-600 mb-3">
                                Testing, Validation & Operations Support
                            </h3>
                            <ul className="list-disc pl-5 text-black-600 text-lg space-y-2">
                                <li>Functional and upgrade testing</li>
                                <li>High availability and failover validation</li>
                                <li>Multi-cluster and hybrid deployment validation</li>
                            </ul>
                            <p className="text-black-600 text-lg mt-3">
                                Supporting Day-2 operations including troubleshooting,
                                optimization, and continuous improvement.
                            </p>
                        </div>

                    </div>

                    {/* Footer Section */}
                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            Driving Cloud-Native at Scale
                        </h3>
                        <p className="text-black-600 text-lg max-w-3xl mx-auto">
                            By combining Kubernetes expertise with deep domain knowledge in telecom,
                            networking, and distributed systems, RideNext enables organizations to
                            transition to scalable, resilient, and future-ready cloud-native platforms.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
}
