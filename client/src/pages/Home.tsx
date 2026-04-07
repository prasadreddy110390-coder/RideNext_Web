import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Pointer } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { useServices } from "@/hooks/use-services";
import { useLocation } from "wouter";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";

import homeImage from "@assets/Home.png";
import visionImage from "@assets/vision_1.png";
import missionImage from "@assets/mission_1.png";
import valuesImage from "@assets/values.png";
import engagementmodelsImage from "@assets/engagementmodels_2.png";
import deliveryapproachImage from "@assets/deliveryapproach_1.png";
import necImage from "@assets/nec.png";
import tejasImage from "@assets/tejas.png";
import corecapabilitiesImage from "@assets/corecapabilities_1.png";

import { useEffect, useRef } from "react";

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
  const { data: services, isLoading } = useServices();
  const heroRef = useRef<HTMLElement | null>(null);

  /* ================= AUTO SCROLL ================= */
  // useEffect(() => {
  //   const target = heroRef.current;
  //   if (!target) return;

  //   const startScroll = window.scrollY;
  //   const targetScroll = target.offsetTop;
  //   const duration = 1000;
  //   let startTime: number | null = null;

  //   const easeInOut = (t: number) =>
  //     t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  //   const animateScroll = (time: number) => {
  //     if (!startTime) startTime = time;
  //     const progress = Math.min((time - startTime) / duration, 2);
  //     const eased = easeInOut(progress);

  //     window.scrollTo(
  //       0,
  //       startScroll + (targetScroll - startScroll) * eased
  //     );

  //     if (progress < 1) requestAnimationFrame(animateScroll);
  //   };

  //   const timer = setTimeout(
  //     () => requestAnimationFrame(animateScroll),
  //     2000
  //   );

  //   return () => clearTimeout(timer);
  // }, []);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div className="flex flex-col min-h-screen">
      {/* ================= SPLASH ================= */}
      <section className="h-screen w-full relative grid lg:grid-cols-2 overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={homeImage}
            alt="Wireless Connectivity"
            className="w-full h-full object-cover opacity-150"
          />

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold text-white italic leading-tight mb-6">
                "Engineering Telecom
              </h1>
              <h1 className="text-5xl md:text-5xl lg:text-7xl font-bold text-white italic leading-tight mb-6">
                End to End"
              </h1>
              <p className="text-lg md:text-xl">

              </p>
            </div>
          </div>
        </div>
        <section
          ref={heroRef}
          className="relative min-h-[90vh] flex items-center pt-20 bg-slate-900 overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-primary/30" />
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10  gap-12 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col items-center text-center"
            >

              {/* HEADING + WIFI SIDE BY SIDE */}
              <div className="flex items-start gap-8">
                {/* WIFI */}
                <motion.div
                  className="hidden lg:flex mt-6"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <WifiAnimation />
                </motion.div>

                {/* TEXT */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                  Leading the  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">
                    Future of
                  </span>
                  <br />
                  Connectivity
                </h1>
              </div>
            </motion.div>


            {/* RIGHT */}
          </div>
        </section>


      </section>
      {/* ================= Vision ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 place-items-center">
          <img
            src={visionImage}
            className="rounded-2xl shadow-2xl h-[400px] object-cover"
          />

          <div className="text-center lg:text-left">
            <h2 className="text-3xl text-center md:text-6xl font-bold mb-6">
              OUR VISION
            </h2>
            <p className="text-2xl space-y-6 mb-10 space-y-4 mb-8">
              “To simplify and strengthen global connectivity by providing high-quality,
              secure and customer-focused telecom solutions that drive sustainable growth”

            </p>
          </div>
        </div>
      </section>
      {/* ================= MISSION ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 place-items-center">

          <div className="text-center lg:text-left">
            <h2 className="text-3xl text-center md:text-6xl font-bold mb-6">
              OUR MISSION
            </h2>
            <p className="text-2xl space-y-6 mb-10 space-y-4 mb-8">
              “To have talented 'hands-on' pool of engineers in Wireless,
              Cloud and Web Technologies domain and empower our employees,
              partners and Clients to excel more and grow together”
            </p>
          </div><img
            src={missionImage}
            className="rounded-2xl shadow-2xl h-[400px] object-cover"
          />


        </div>
      </section>
      {/* ================= VALUES ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 place-items-center">
          <img
            src={valuesImage}
            className="rounded-2xl shadow-2xl h-[400px] object-cover"
          />
          <div className="text-center lg:text-left">
            <h2 className="text-3xl text-center md:text-6xl font-bold mb-6">
              OUR VALUES
            </h2>
            <p className="text-2xl space-y-6 mb-10 space-y-4 mb-8">
              “Innovation, Integrity, and Customer Success are at the core of everything we do.
              We believe in collaborative growth and excellence.”
            </p>
          </div>


        </div>
      </section>
      {/* =================Core Capabilities ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 place-items-center">


          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-6xl font-bold mb-6">
              Core Capabilities
            </h2>

            <ul className="text-2xl space-y-6 mb-10 space-y-4 mb-8">
              {[
                "Telecom & Network Software Engineering ",
                "Enterprise Application Development ",
                "Systems Integration & Legacy Modernization",
                "Cloud & Infrastructure Services",
                "Cybersecurity & Compliance Frameworks",
                "Managed Services & Lifecycle Support",
              ].map((item) => (

                <li key={item} className="flex gap-3 items-center group">
                  <ArrowRight className="text-primary w-5 h-5 transition-transform group-hover:translate-x-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>


          </div>
          <img
            src={corecapabilitiesImage}
            className="rounded-2xl shadow-2xl h-[400px] object-cover"
          />
        </div>
      </section>
      {/* ================= Engagement Models ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 place-items-center">
          <img
            src={engagementmodelsImage}
            className="rounded-2xl shadow-2xl h-[400px] object-cover"
          />

          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-6xl font-bold mb-6">
              Engagement Models
            </h2>
            {/* <p className="text-black text-lg mb-6">
              “To simplify and strengthen global connectivity by providing high-quality,
              secure and customer-focused telecom solutions that drive sustainable growth”

            </p> */}


            <ul className="text-2xl space-y-6 mb-10 space-y-4 mb-8">
              {[
                "Project-based delivery ",
                "Dedicated engineering teams ",
                " Managed services with SLAs",
                " Offshore / Onshore / Hybrid models",
              ].map((item) => (
                // <li key={item} className="flex gap-3 items-center">
                //   <CheckCircle2 className="text-primary" />
                //   {item}
                // </li>
                <li key={item} className="flex gap-3 items-center">
                  <Pointer className="text-primary w-5 h-5" />
                  <span>{item}</span>
                </li>

              ))}
            </ul>

            {/* <Link href="/about">
              <Button className="bg-slate-900 text-white">
                Read More About Us
              </Button>
            </Link> */}
          </div>

        </div>
      </section>
      {/* ================= Delivery Approach ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 place-items-center">

          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-6xl font-bold mb-6">
              Delivery Approach
            </h2>
            {/* <p className="text-black text-lg mb-6">
           
            </p> */}
            <ul className="text-2xl space-y-6 mb-10">
              {[
                "Requirement Assessment  ",
                "Architecture Design",
                "Agile Development ",
                "Secure Deployment ",
                "Continuous Support"
              ].map((item) => (
                <li key={item} className="flex gap-3 items-center">
                  <CheckCircle2 className="text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={deliveryapproachImage}
            className="rounded-2xl shadow-2xl h-[400px] object-cover"
          />
        </div>
      </section>
      {/* ================= Clients & Partners================= */}

      <section className="py-24 bg-slate-50 ">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-bold mb-6">
            Clients & Partners
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center px-6">
          <a href="https://www.nec.com" target="_blank" rel="noreferrer">
            <img
              src={necImage}
              className="w-[400px] h-[375px] rounded-2xl shadow-2xl 
             object-contain bg-white p-4 
             hover:scale-105 transition"
            />
          </a>

          <a href="https://www.tejasnetworks.com" target="_blank" rel="noreferrer">
            <img
              src={tejasImage}
              className="w-[400px] h-[375px] rounded-2xl shadow-2xl 
             object-contain bg-white p-4 
             hover:scale-105 transition"
            />
          </a>
        </div>


      </section>
    </div>
  );
}
