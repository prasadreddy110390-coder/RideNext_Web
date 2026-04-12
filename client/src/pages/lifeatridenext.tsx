import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Brain, Heart, Users, Sparkles, Globe, } from "lucide-react";
import { motion } from "framer-motion";
import Image from "../../public/Life@ridenext/Picture2.png";
import Image2 from "../../public/Life@ridenext/Picture1.png";
import Manjunath from "../../public/Life@ridenext/Employees/Manjunath.jpg";
import SreeKeerthana from "../../public/Life@ridenext/Employees/Sreekeerthana.jpg";
import Ajit from "../../public/Life@ridenext/Employees/Ajit.jpg";
import Prasad from "../../public/Life@ridenext/Employees/Prasad.png";
import MamathaM from "../../public/Life@ridenext/Employees/MamathaM.jpg";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";


export default function LifeAtRideNext() {

  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [activeGallery, setActiveGallery] = useState<any>(null);
  const [selected, setSelected] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  type EmployeeVoice = {
    name: string;
    role: string;
    image: string;
    message: string;
  };
  const employeeVoices: EmployeeVoice[] = [
    {
      name: "Manjunath",
      role: "Tech Lead",
      image: Manjunath,
      message: `"It has been a truly fascinating experience being associated with RideNext for last three year both professionally as well as personally. As a core member, have seen growth of RideNext from being 11 members team to present 30 members team, which will further increase in the coming time. Best thing about working with RideNext is that management here give more importance to human values which I feel is very important for any organisation because human resources make the company what it is. RideNext is also providing grooming platform for new Engineers to explore host of exciting opportunities in IT/Telecom Industry. I feel very happy being associated with RideNext and enjoying working for growth of the company."`,
    },
    {
      name: "Prasad",
      role: "Sr Software Engineer",
      image: Prasad,
      message: `"Being part of RideNext since its early days as a core member has been an incredibly rewarding journey. I’ve seen the organization evolve from a small team into a growing and impactful company. Throughout this journey, I’ve had continuous opportunities to learn, contribute, and take ownership of meaningful work. The collaborative culture and strong support system make it a place where I’m proud to continue building my career."`,
    },
    {
      name: "Mamatha M",
      role: "RAN Engineer",
      image: MamathaM,
      message: `"Over the past three years, I have grown within the organization as a Senior Technical 4G Femtocell Engineer, building strong expertise in troubleshooting, network optimization, and ensuring reliable connectivity solutions. My role has provided continuous opportunities to learn, adapt to new technologies, and take on increasing responsibilities. With the constant support and guidance from my managers, I have been able to strengthen my technical and professional skills, which has significantly contributed to my growth within the organization. I remain committed to delivering high-quality work and contributing to the team’s success."`,
    },
    {
      name: "Sree Keerthana",
      role: "QA Engineer",
      image: SreeKeerthana,
      message: `"I have an excellent experience working with Ridenext, which consistently provides a supportive and motivating environment. The positive atmosphere encouraged me to upskill and advance my career with confidence. My team has been highly collaborative, always ready to help and share knowledge, which made every project smoother and more enjoyable. The company culture promotes learning, innovation, and professional growth, ensuring that employees feel valued and engaged. Strong leadership and well‑structured processes further enhance productivity and create a sense of stability. Overall, this organization has given me both personal satisfaction and professional development, making it a truly inspiring place to work."`,
    },
    {
      name: "Ajit Kumar",
      role: "Lead",
      image: Ajit,
      message: `"I have been associated with RideNext Soft Solution for the past six years, where I have received ample opportunities to grow and contribute in the field of 5G radio technology. With the guidance of highly supportive team members and mentors, and the unwavering commitment of a management team that upholds strong human values, my journey has been both enriching and rewarding. I was entrusted with opportunities to showcase my talent in 5G radio integration across onsite and offshore projects, which significantly enhanced my expertise and broadened my professional perspective. RideNext Soft Solution has provided an environment that fosters innovation, collaboration, and excellence, making it a truly remarkable place to build a career."`,
    },
  ];
  const scrollingVoices = [...employeeVoices, ...employeeVoices];


  const diwaliImages = Object.values(
    import.meta.glob("../../public/Life@ridenext/Diwali/*.{jpg,png,jpeg}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ) as string[];

  const christmasImages = Object.values(
    import.meta.glob("../../public/Life@ridenext/christmas/*.{jpg,png,jpeg}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ) as string[];

  const birthdayImages = Object.values(
    import.meta.glob("../../public/Life@ridenext/Birthday/*.{jpg,png,jpeg}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ) as string[];

  const eventImages = Object.values(
    import.meta.glob("../../public/Life@ridenext/events/*.{jpg,png,jpeg}", {
      eager: true,
      query: "?url",
      import: "default",
    })
  ) as string[];

  const gallery = [
    {
      title: "Diwali Celebrations",
      cover: diwaliImages[0],
      images: diwaliImages,
    },
    {
      title: "Christmas Celebrations",
      cover: christmasImages[0],
      images: christmasImages,
    },
    {
      title: "Birthday Celebrations",
      cover: birthdayImages[0],
      images: birthdayImages,
    },
    {
      title: "Office Events",
      cover: eventImages[0],
      images: eventImages,
    },
  ];
  const nextImage = () => {
    if (!activeGallery) return;
    setCurrentIndex((prev) =>
      prev === activeGallery.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!activeGallery) return;
    setCurrentIndex((prev) =>
      prev === 0 ? activeGallery.images.length - 1 : prev - 1
    );
  };
  useEffect(() => {
    const handleKey = (e: any) => {
      if (e.key === "Escape") {

        // If image is open → close image
        if (currentImage) {
          setCurrentImage(null);
          return;
        }

        // If gallery is open → close gallery
        if (activeGallery) {
          setActiveGallery(null);
          return;
        }
      }

      // Navigation only when image is open
      if (currentImage && activeGallery) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentImage, activeGallery]);


  const openGallery = (item: any) => {
    setSelected(item);
    setCurrentIndex(0);
  };

  const next = () => {
    setCurrentIndex((prev) =>
      prev === selected.images.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? selected.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <PageHeader title="Life@RideNext" subtitle="" />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* ================= INTRO ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-16 items-center mb-24"
          >
            <div>
              <h3 className="text-5xl font-bold mb-6 leading-tight">
                Where Innovation Meets{" "}
                <span className="text-orange-500">
                  Human-Centric Culture
                </span>
              </h3>

              <p className="text-gray-600 mb-6 text-lg">
                At RideNext, we build an ecosystem where people thrive through
                AI-driven innovation, engineering excellence, and a strong focus
                on employee well-being.
              </p>

              <p className="text-gray-500">
                From telecom transformation to cloud-native platforms, our teams
                collaborate using intelligent tools and automation.
              </p>
            </div>

            <motion.img
              src={Image2}
              alt=""
              className="rounded-2xl shadow-xl"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          {/* ================= CULTURE ================= */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              {
                icon: <Brain size={28} />,
                title: "AI-Driven Innovation",
                desc: "Enhancing productivity through automation and AI-powered insights.",
              },
              {
                icon: <Heart size={28} />,
                title: "People First Culture",
                desc: "Flexible, inclusive, and well-balanced work environment.",
              },
              {
                icon: <Users size={28} />,
                title: "Collaborative Ecosystem",
                desc: "Strong teamwork across telecom, cloud, and software.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <Card className="border hover:shadow-xl transition rounded-2xl">
                  <CardContent className="p-8">
                    <div className="text-orange-500 mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* ================= AI SECTION ================= */}
          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div>
              <h3 className="text-4xl font-bold mb-4">
                AI-Powered Workplace Experience
              </h3>

              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <Zap className="text-orange-500" />
                  Intelligent DevOps automation
                </li>
                <li className="flex gap-3">
                  <Sparkles className="text-orange-500" />
                  AI-assisted debugging
                </li>
                <li className="flex gap-3">
                  <Globe className="text-orange-500" />
                  Global collaboration tools
                </li>
              </ul>
            </div>

            <img src={Image} className="rounded-2xl shadow-lg" />
          </motion.div>

          {/* ================= IMAGE GALLERY ================= */}
          <div className="mb-24">
            <h3 className="text-3xl font-bold mb-10 text-center">
              Life Moments @ RideNext
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {gallery.map((item, i) => (
                <div
                  key={i}
                  className="relative cursor-pointer group"
                  onClick={() => setActiveGallery(item)}
                >
                  <img
                    src={item.cover}
                    className="rounded-xl shadow-md w-full h-[250px] object-cover group-hover:scale-105 transition"
                  />

                  <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <p className="text-white text-lg font-semibold">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {selected && (
            <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center">

              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 text-white"
              >
                <X size={30} />
              </button>

              <h3 className="text-white text-2xl mb-4">
                {selected.title}
              </h3>

              <div className="relative flex items-center justify-center w-full max-w-4xl">

                <button onClick={prev} className="absolute left-0 text-white p-4">
                  <ChevronLeft size={40} />
                </button>

                <img
                  src={selected.images[currentIndex]}
                  className="rounded-xl max-h-[70vh]"
                />

                <button onClick={next} className="absolute right-0 text-white p-4">
                  <ChevronRight size={40} />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-6 overflow-x-auto px-6">
                {selected.images.map((img: any, i: number) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-20 h-16 object-cover rounded cursor-pointer border ${i === currentIndex
                      ? "border-orange-500"
                      : "border-transparent"
                      }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ================= EMPLOYEE STORIES ================= */}
          <div className="flex gap-6 [animation:scroll_25s_linear_infinite]">
            {scrollingVoices.map((emp, i) => (
              <div
                key={i}
                className="min-w-[300px] p-6 border rounded-2xl shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={emp.image}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{emp.name}</h4>
                    <p className="text-sm text-gray-500">{emp.role}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm">
                  {emp.message}
                </p>
              </div>
            ))}
          </div>

          {/* ================= HIGHLIGHTS ================= */}
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "Flexible Work",
              "24/7 Learning",
              "Global Teams",
              "AI Culture",
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 border rounded-xl hover:shadow-lg"
              >
                <h4 className="text-xl font-bold text-orange-500">
                  {item}
                </h4>
              </div>
            ))}
          </div>


        </div>
        {activeGallery && (
          <div className="fixed inset-0 bg-white z-50 overflow-y-auto">

            {/* Header */}
            <div className="flex justify-between items-center p-6 sticky top-0 bg-white border-b">
              <h2 className="text-2xl font-bold">
                {activeGallery.title}
              </h2>

              <button
                onClick={() => setActiveGallery(null)}
                className="text-2xl hover:text-red-500 transition"
              >
                ✕
              </button>
            </div>

            {/* Masonry Layout */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-6 space-y-4">

              {activeGallery.images.map((img: any, i: number) => (
                <div
                  key={i}
                  onClick={() => {
                    setCurrentImage(img);
                    setCurrentIndex(i);
                  }}
                  className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group cursor-pointer"
                >
                  <img
                    src={img}
                    className="w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
              ))}

            </div>
          </div>
        )}

        {currentImage && activeGallery && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={() => setCurrentImage(null)}
          >

            {/* LEFT */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 text-white text-4xl"
            >
              ‹
            </button>

            {/* IMAGE */}
            <img
              src={activeGallery.images[currentIndex]}   // ✅ FIXED
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-[90vw]"
            />

            {/* RIGHT */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 text-white text-4xl"
            >
              ›
            </button>

            {/* CLOSE */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImage(null);
              }}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              ✕
            </button>
          </div>
        )}
      </section>




    </div>
  );
}