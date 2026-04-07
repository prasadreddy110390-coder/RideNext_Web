import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ClipboardCheck, Zap, Shield, Cpu, RadioTower, Wrench } from "lucide-react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function qualityengineering() {
  // const x = useMotionValue(0);
  // const contentRef = useRef<HTMLDivElement>(null);

  // const [width, setWidth] = useState(0);
  // const [isPaused, setIsPaused] = useState(false);

  // const speed = 0.15;   // 👉 adjust speed
  // const direction = -1; // 👉 -1 = left, 1 = right

  // useEffect(() => {
  //   if (contentRef.current) {
  //     setWidth(contentRef.current.scrollWidth / 2);
  //   }
  // }, []);

  // useAnimationFrame((t, delta) => {
  //   if (!isPaused && width > 0) {
  //     let moveBy = direction * speed * delta;
  //     let newX = x.get() + moveBy;

  //     if (direction === -1 && Math.abs(newX) >= width) {
  //       newX = 0;
  //     } else if (direction === 1 && newX >= width) {
  //       newX = 0;
  //     }

  //     x.set(newX);
  //   }
  // });

  // const text =
  //   "Addressing modern enterprise testing challenges with structured, scalable, and telecom-focused solutions.";

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Quality Engineering"
        subtitle=""
      />

      <section
        id="quality-engineering"
        className="py-12 bg-gradient-to-br from-slate-50 to-blue-50 scroll-mt-32"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* Header */}
          {/* <div className="text-center mb-6">
            
            <p className="text-black-900  font-bold text-2xl mx-auto">
              Addressing modern enterprise testing challenges with structured, scalable,
              and telecom-focused solutions.
            </p>
          </div> */}
          <div className="overflow-hidden mb-6">
            <div className="flex whitespace-nowrap marquee hover:pause-marquee">

              <p className="mx-10 text-2xl md:text-3xl font-bold tracking-wide gradient-text ">
                Addressing modern enterprise testing challenges with structured,
                scalable, and telecom-focused solutions.
              </p>

              {/* duplicate for infinite loop */}
              <p className="mx-10 text-2xl md:text-3xl font-bold tracking-wide gradient-text ">
                Addressing modern enterprise testing challenges with structured,
                scalable, and telecom-focused solutions.
              </p>

            </div>
          </div>



          {/* Overview */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-10 border border-gray-100 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Overview</h3>
            <p className="text-black-600 text-lg leading-relaxed">
              Enterprises face several practical and strategic challenges in testing,
              including limited automation, insufficient test coverage leading to missed defects,
              unstable environments, and test data issues that slow down testing cycles.
              These challenges impact delivery timelines and overall product quality.
            </p>
          </div>

          {/* Expertise Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-10 items-stretch">

            {/* Testing Services */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Expertise
              </h3>

              <p className="text-black-600 text-lg mb-4">
                At RideNext, we offer comprehensive testing services as part of our
                technology solutions portfolio, providing end-to-end testing support:
              </p>

              <ul className="space-y-3 text-black-600 text-lg">
                <li className="flex gap-2">
                  <span className="text-blue-500">✔</span>
                  Test plan creation based on functional specifications — planning what and how to test
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">✔</span>
                  Test case execution — running the defined tests
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">✔</span>
                  Regression testing — re-testing after changes to ensure existing features still work
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">✔</span>
                  Interoperability tests — ensuring systems/modules work seamlessly together
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">✔</span>
                  Field test execution — testing in real environments outside the lab
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-500">✔</span>
                  Technical assistance throughout the testing lifecycle
                </li>
              </ul>
            </div>

            {/* Technology & Equipment */}

            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition flex flex-col justify-between h-full">

              <div>
                {/* Main Header */}
                <h3 className="text-xl font-semibold text-indigo-600 mb-6 flex items-center justify-center gap-2">
                  <Cpu size={20} />
                  Technology & Equipment Expertise
                </h3>

                {/* Technologies */}
                <div className="mb-8">
                  <p className="text-lg font-semibold text-gray-700 mb-4 flex items-center justify-center gap-2">
                    <RadioTower size={18} className="text-indigo-500" />
                    Technologies
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: "LTE", icon: "📶" },
                      { name: "UMTS", icon: "📡" },
                      { name: "5G RAN", icon: "🚀" },
                      { name: "5G Core", icon: "🧠" },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="relative group p-[2px] rounded-xl bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400"
                      >
                        <div
                          className="flex flex-col items-center justify-center py-4 rounded-xl
                         bg-white/70 backdrop-blur-md
                         text-indigo-700 font-semibold text-base
                         transition duration-300
                         group-hover:scale-105 group-hover:shadow-xl"
                        >
                          <span className="text-2xl mb-1">{item.icon}</span>
                          {item.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment */}
                <div className="mb-6">
                  <p className="text-lg font-semibold text-gray-700 mb-4 flex items-center justify-center gap-2">
                    <Wrench size={18} className="text-blue-500" />
                    Test Equipment
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: "NetHawk East", icon: "⚙️" },
                      { name: "Traffic Generators", icon: "📡" },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="relative group p-[2px] rounded-xl bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
                      >
                        <div
                          className="flex flex-col items-center justify-center py-4 rounded-xl
                         bg-white/70 backdrop-blur-md
                         text-blue-700 font-semibold text-base
                         transition duration-300
                         group-hover:scale-105 group-hover:shadow-xl"
                        >
                          <span className="text-2xl mb-1">{item.icon}</span>
                          {item.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom balancing content */}
              <div className="mt-auto pt-6 border-t border-gray-100">
                <p className="text-black-600 text-sm text-center leading-relaxed">
                  Supporting advanced telecom testing across
                  <span className="font-semibold text-indigo-600"> 3G, 4G, and 5G </span>
                  ecosystems with industry-grade tools.
                </p>
              </div>

            </div>
          </div>

          {/* Advanced Wireless Protocol Testing */}
          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-2xl shadow-lg p-8 mb-10">
            <h3 className="text-2xl font-semibold mb-4">
              Advanced Wireless Protocol Testing
            </h3>

            <p className="text-blue-100 text-lg mb-4">
              Through tools like <span className="font-semibold">Blue Fox AWTS (Advanced Wireless Testing Simulator)</span>,
              we enable simulation and testing of wireless protocol stacks for 3G/4G/5G scenarios.
            </p>

            <ul className="grid md:grid-cols-2 gap-3 text-m">
              <li>✔ Creating and editing test cases via a visual interface</li>
              <li>✔ Simulating telecom network conditions based on standards (3GPP releases)</li>
              <li>✔ Validating network functions and protocol behavior</li>
              <li>✔ Testing in controlled environments before deployment</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition">
              <h4 className="text-lg font-semibold text-indigo-600 mb-2">
                Quality & Reliability
              </h4>
              <p className="text-gray-600 text-lg">
                Ensures telecom and IoT systems meet functional and performance expectations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition">
              <h4 className="text-lg font-semibold text-indigo-600 mb-2">
                Supports Complex Telecom Standards
              </h4>
              <p className="text-gray-600 text-lg">
                Expertise in 3G/4G/5G protocols ensures compliance with global telecom specifications.
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition">
              <h4 className="text-lg font-semibold text-indigo-600 mb-2">
                Saves Time & Risk
              </h4>
              <p className="text-gray-600 text-lg">
                Thorough testing reduces production bugs and enables stable, faster rollouts.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
