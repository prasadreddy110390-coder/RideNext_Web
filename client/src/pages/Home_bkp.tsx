import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { useServices } from "@/hooks/use-services";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";

import homeImage from "@assets/Home.png";
import visionImage from "@assets/vision.png";
import missionImage from "@assets/mission.png";
import engagementmodelsImage from "@assets/engagementmodels.png";
import deliveryapproachImage from "@assets/deliveryapproach.png";
import necImage from "@assets/nec.png";
import tejasImage from "@assets/tejas.png";
import corecapabilitiesImage from "@assets/corecapabilities.jpg";

import { useEffect, useRef } from "react";

/* ================= WIFI ANIMATION ================= */
const WifiAnimation = () => (
  <div className="relative w-24 h-24 flex items-end justify-center">
    {/* Center dot */}
    <motion.div
      className="absolute bottom-0 w-4 h-4 rounded-full bg-white z-10"
      animate={{ scale: [1, 1.4, 1] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Inner arc */}
    <motion.div
      className="absolute bottom-1 w-10 h-10 border-[3px] border-white
                 rounded-full border-b-transparent border-l-transparent border-r-transparent"
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
    />

    {/* Middle arc */}
    <motion.div
      className="absolute bottom-1 w-14 h-14 border-[3px] border-white/80
                 rounded-full border-b-transparent border-l-transparent border-r-transparent"
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.45 }}
    />

    {/* Outer arc */}
    <motion.div
      className="absolute bottom-1 w-20 h-20 border-[3px] border-white/60
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
  useEffect(() => {
    const target = heroRef.current;
    if (!target) return;

    const startScroll = window.scrollY;
    const targetScroll = target.offsetTop;
    const duration = 4000;
    let startTime: number | null = null;

    const easeInOut = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const animateScroll = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 3);
      const eased = easeInOut(progress);

      window.scrollTo(
        0,
        startScroll + (targetScroll - startScroll) * eased
      );

      if (progress < 1) requestAnimationFrame(animateScroll);
    };

    const timer = setTimeout(
      () => requestAnimationFrame(animateScroll),
      2000
    );

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ================= SPLASH ================= */}
      <section className="h-screen w-full relative overflow-hidden">
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

       

      </section>

      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center pt-20 bg-slate-900 overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-primary/30" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        </div>

        <div className="container col-2 mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
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

            <p className="text-xl text-slate-300 mb-8 max-w-lg">
              Empowering Business with Cutting-Edge IoT Smart Solutions &
              Robust Wireless Infrastructure.
            </p>

            <div className="flex gap-4">
              <Link href="/services">
                <Button size="lg" className="bg-primary text-white">
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>


          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse" />

              {[
                // "Leading the Future of Connectivity.",
                "Wireless Innovative Solutions for 5G & Next-Gen Networks.",
                "Smart Solutions for a Connected World.",
                "Complete Test Solutions & Technical Assistance.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-white text-sm mb-4"
                >
                  {text}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="bg-slate-800/50 backdrop-blur-md rounded-2xl border border-white/10 p-8"
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["99.9% Uptime", <CheckCircle2 />],
                    ["IoT Ready", <ArrowRight />],
                    ["Scalable", <CheckCircle2 />],
                    ["Secure", <ArrowRight />],
                  ].map(([label, icon], i) => (
                    <div
                      key={i}
                      className="bg-primary/10 rounded-xl p-6 text-white"
                    >
                      {icon}
                      <div className="font-bold mt-3">{label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      {/* <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-primary uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Technology Solutions
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading
              ? Array(3)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-64 bg-slate-100 rounded-xl animate-pulse" />
                ))
              : services?.slice(0, 3).map((s, i) => (
                <ServiceCard
                  key={s.id}
                  title={s.title}
                  description={s.description}
                  icon={s.icon}
                  index={i}
                />
              ))}
          </div>
        </div>
      </section> */}

      {/* ================= Vision ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 place-items-center">
          <img
            src={visionImage}
            className="rounded-2xl shadow-2xl h-[250px] object-cover"
          />

          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              OUR VISION
            </h2>
            <p className="text-black text-lg mb-6">
              “To simplify and strengthen global connectivity by providing high-quality,
              secure and customer-focused telecom solutions that drive sustainable growth”

            </p>

            {/* <ul className="space-y-4 mb-8">
              {[
                "Expertise in 5G and Wireless Protocols",
                "End-to-End IoT System Design",
                "Automated Testing & QA Services",
                "Cloud-Native Application Development",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-center">
                  <CheckCircle2 className="text-primary" />
                  {item}
                </li>
              ))}
            </ul> */}

            {/* <Link href="/about">
              <Button className="bg-slate-900 text-white">
                Read More About Us
              </Button>
            </Link> */}
          </div>
        </div>
      </section>
      {/* ================= MISSION ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 place-items-center">

          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              OUR MISSION
            </h2>
            <p className="text-black text-lg mb-6">
              “To have talented 'hands-on' pool of engineers in Wireless,
              IOT, Cloud and Web Technologies domain and empower our employees,
              partners and Clients to excel more and grow together”
            </p>
          </div><img
            src={missionImage}
            className="rounded-2xl shadow-2xl h-[250px] object-cover"
          />


        </div>
      </section>
      {/* =================Core Capabilities ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 place-items-center">
          <img
            src={corecapabilitiesImage}
            className="rounded-2xl shadow-2xl h-[250px] object-cover"
          />

          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Core Capabilities
            </h2>
            {/* <p className="text-black text-lg mb-6">
              “To simplify and strengthen global connectivity by providing high-quality,
              secure and customer-focused telecom solutions that drive sustainable growth”

            </p> */}
            <ul className="space-y-4 mb-8">
              {[
                "Telecom & Network Software Engineering ",
                "Enterprise Application Development ",
                "Systems Integration & Legacy Modernization",
                "Cloud & Infrastructure Services",
                "Cybersecurity & Compliance Frameworks",
                "Managed Services & Lifecycle Support",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-center">
                  <CheckCircle2 className="text-primary" />
                  {item}
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
      {/* ================= Engagement Models ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 place-items-center">
          

          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Engagement Models
            </h2>
            {/* <p className="text-black text-lg mb-6">
              “To simplify and strengthen global connectivity by providing high-quality,
              secure and customer-focused telecom solutions that drive sustainable growth”

            </p> */}


            <ul className="space-y-4 mb-8">
              {[
                "Project-based delivery ",
                "Dedicated engineering teams ",
                " Managed services with SLAs",
                " Offshore / Onshore / Hybrid models",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-center">
                  <CheckCircle2 className="text-primary" />
                  {item}
                </li>
              ))}
            </ul>
             
            {/* <Link href="/about">
              <Button className="bg-slate-900 text-white">
                Read More About Us
              </Button>
            </Link> */}
          </div>
           <img
            src={engagementmodelsImage}
            className="rounded-2xl shadow-2xl h-[250px] object-cover"
          />
        </div>
      </section>
      {/* ================= Delivery Approach ================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 place-items-center">
              <img
            src={deliveryapproachImage}
            className="rounded-2xl shadow-2xl h-[250px] object-cover"
          />
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Delivery Approach
            </h2>
            {/* <p className="text-black text-lg mb-6">
           
            </p> */}
            <ul className="space-y-4 mb-8">
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
          
        </div>
      </section>
      {/* ================= Clients & Partners================= */}
      {/* <section className="py-24 bg-slate-50">
       <div><h2 className="text-3xl md:text-4xl font-bold mb-6">
              Clients & Partners
            </h2></div>
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 place-items-center">
              <img
            src={necImage}
            className="rounded-2xl shadow-2xl h-[250px] object-cover"
          />
          <img
            src={tejasImage}
            className="rounded-2xl shadow-2xl h-[250px] object-cover"
          />
       </div>
      </section> */}
      {/* <section className="py-24 bg-slate-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Clients & Partners
          </h2>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            autoplay={{ delay: 2500 }}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <a href="https://www.nec.com" target="_blank" rel="noreferrer">
                <img
                  src={necImage}
                  className="mx-auto rounded-2xl shadow-2xl h-[250px] object-cover hover:scale-105 transition"
                />
              </a>
            </SwiperSlide>

            <SwiperSlide>
              <a href="https://www.tejasnetworks.com" target="_blank" rel="noreferrer">
                <img
                  src={tejasImage}
                  className="mx-auto rounded-2xl shadow-2xl h-[250px] object-cover hover:scale-105 transition"
                />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </section> */}
      <section className="py-24 bg-slate-50 ">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Clients & Partners
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center px-6">
          <a href="https://www.nec.com" target="_blank" rel="noreferrer">
            <img
              src={necImage}
              className="w-[300px] h-[250px] rounded-2xl shadow-2xl 
             object-contain bg-white p-4 
             hover:scale-105 transition"
            />
          </a>

          <a href="https://www.tejasnetworks.com" target="_blank" rel="noreferrer">
            <img
              src={tejasImage}
              className="w-[300px] h-[250px] rounded-2xl shadow-2xl 
             object-contain bg-white p-4 
             hover:scale-105 transition"
            />
          </a>
        </div>


      </section>


      {/* ================= PARTNERS ================= */}
      {/* <section className="py-20 bg-white text-center">
        <p className="text-muted-foreground mb-8">
          TRUSTED BY INNOVATIVE COMPANIES
        </p>
        <div className="flex flex-wrap justify-center gap-12 opacity-60">
          {["TechCorp", "InnovateSystems", "FutureNet", "SmartIoT", "DataFlow"].map(
            (p) => (
              <div key={p} className="text-2xl font-bold text-slate-400">
                {p}
              </div>
            )
          )}
        </div>
      </section> */}
    </div>
  );
}
