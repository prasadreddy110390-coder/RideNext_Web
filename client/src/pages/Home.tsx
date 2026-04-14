import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Pointer } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { useServices } from "@/hooks/use-services";
import { useLocation } from "wouter";
import homeImage from "@assets/Home.png";
import visionImage from "@assets/vision_1.png";
import missionImage from "@assets/mission_1.png";
import valuesImage from "@assets/values.png";
import engagementmodelsImage from "@assets/engagementmodels_2.png";
import deliveryapproachImage from "@assets/deliveryapproach_1.png";
import necImage from "@assets/nec.png";
import tejasImage from "@assets/tejas.png";
import corecapabilitiesImage from "@assets/corecapabilities_1.png";
import { useRef } from "react";

/* ================= WIFI ANIMATION ================= */
const WifiAnimation = () => (
  <div className="relative w-32 h-24 flex items-end justify-center">
    {/* Center dot */}
    <motion.div
      className="absolute bottom-0 w-4 h-4 rounded-full bg-white z-10"
      animate={{ scale: [1, 1.4, 1] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Inner arc */}
    <motion.div
      className="absolute bottom-1 w-14 h-14 border-[3px] border-white
      rounded-full border-b-transparent border-l-transparent border-r-transparent"
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
    />

    {/* Middle arc */}
    <motion.div
      className="absolute bottom-1 w-20 h-20 border-[3px] border-white/80
      rounded-full border-b-transparent border-l-transparent border-r-transparent"
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.45 }}
    />

    {/* Outer arc */}
    <motion.div
      className="absolute bottom-1 w-28 h-28 border-[3px] border-white/60
      rounded-full border-b-transparent border-l-transparent border-r-transparent"
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
    />
  </div>
);

export default function Home() {
  const heroRef = useRef<HTMLElement | null>(null);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ================= HERO ================= */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-[60vh] lg:h-screen">
          <img
            src={homeImage}
            alt="Wireless Connectivity"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl text-white lg:text-7xl font-bold italic mb-4">
                "Engineering Telecom
              </h1>
              <h1 className="text-4xl md:text-5xl text-white lg:text-7xl font-bold italic">
                End to End"
              </h1>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          ref={heroRef}
          className="relative flex items-center justify-center py-16 lg:py-0 bg-slate-900 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-primary/30" />

          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">

              {/* WIFI + HEADING */}
              <div className="flex flex-col lg:flex-row items-center gap-6">

                {/* WIFI NOW VISIBLE ON MOBILE */}
                <motion.div
                  className="flex"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <WifiAnimation />
                </motion.div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Leading the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">
                    Future of
                  </span>
                  <br />
                  Connectivity
                </h1>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= COMMON SECTIONS ================= */}
      {[
        {
          title: "OUR VISION", img: visionImage, reverse: false, text: `“To simplify and strengthen global connectivity by providing high-quality,
secure and customer-focused telecom solutions that drive sustainable growth”` },

        {
          title: "OUR MISSION", img: missionImage, reverse: true, text: `“To have talented 'hands-on' pool of engineers in Wireless,
Cloud and Web Technologies domain and empower our employees,
partners and Clients to excel more and grow together”` },

        {
          title: "OUR VALUES", img: valuesImage, reverse: false, text: `“Innovation, Integrity, and Customer Success are at the core of everything we do.
We believe in collaborative growth and excellence.”` },
      ].map((item) => (
        <section key={item.title} className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4 md:px-6">

            <div className="grid lg:grid-cols-2 gap-12 items-stretch">

              {/* IMAGE */}
              <div className={`flex ${item.reverse ? "lg:order-2 justify-start" : "lg:order-1 justify-end"}`}>
                <div className="w-full max-w-xl">
                  <img
                    src={item.img}
                    className="w-full h-full min-h-[300px] md:min-h-[400px] object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className={`flex ${item.reverse ? "lg:order-1 justify-end" : "lg:order-2 justify-start"}`}>
                <div className="w-full max-w-xl h-full flex flex-col justify-center text-center lg:text-left">
                  <h2 className="text-3xl md:text-6xl font-bold mb-6">
                    {item.title}
                  </h2>
                  <p className="text-lg md:text-2xl leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* ================= CORE CAPABILITIES ================= */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">

            {/* CONTENT FIRST */}
            <div className="flex justify-end">
              <div className="w-full max-w-xl h-full flex flex-col justify-center text-center lg:text-left">
                <h2 className="text-3xl md:text-6xl font-bold mb-6">
                  Core Capabilities
                </h2>

                <ul className="text-lg md:text-2xl space-y-5">
                  {[
                    "Telecom & Network Software Engineering ",
                    "Enterprise Application Development ",
                    "Systems Integration & Legacy Modernization",
                    "Cloud & Infrastructure Services",
                    "Cybersecurity & Compliance Frameworks",
                    "Managed Services & Lifecycle Support",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 justify-center lg:justify-start">
                      <ArrowRight className="text-primary w-5 h-5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* IMAGE */}
            <div className="flex justify-start">
              <div className="w-full max-w-xl">
                <img
                  src={corecapabilitiesImage}
                  className="w-full h-full min-h-[300px] md:min-h-[400px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CLIENTS ================= */}
      <section className="py-16 md:py-24 bg-slate-50 text-center">
        <h2 className="text-3xl md:text-6xl font-bold mb-10">
          Clients & Partners
        </h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-4">
          <img
            src={necImage}
            className="w-full max-w-sm h-[300px] object-contain bg-white p-4 rounded-2xl shadow-2xl"
          />
          <img
            src={tejasImage}
            className="w-full max-w-sm h-[300px] object-contain bg-white p-4 rounded-2xl shadow-2xl"
          />
        </div>
      </section>

    </div>
  );
}