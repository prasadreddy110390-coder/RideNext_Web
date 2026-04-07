import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import Image1 from "../../../public/govt/manish.png";
import Image2 from "../../../public/govt/chatur.png";
import Image3 from "../../../public/govt/rnbanner.png";
import { motion } from "framer-motion";
import { BadgeCheck, CalendarDays } from "lucide-react";


export default function CSRActivity() {
    return (
        <div className="min-h-screen bg-white">

            <PageHeader title="Industry & Government Forums" subtitle="" />

            <section className="pt-4 bg-slate-50 scroll-mt-24 md:scroll-mt-32">
                <div className="max-w-7xl mx-auto px-6 py-12">

                    {/* Intro */}
                    {/* <p className="text-center max-w-3xl mx-auto text-gray-600 text-lg mb-12">
                        RideNext actively participates in premier telecom and government forums,
                        showcasing innovation, engaging with industry leaders, and contributing
                        to next-generation connectivity ecosystems.
                    </p> */}

                    {/* Main Section (Content + Images aligned) */}
                    <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">

                        {/* LEFT → Event Content */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4 border border-gray-100">
                            <h3 className="text-2xl font-semibold text-indigo-600">
                                India Mobile Congress 2024
                            </h3>

                            {/* Badges */}
                            <div className="flex flex-wrap gap-3 text-sm">
                                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full">
                                    📅 October 27–29, 2024
                                </span>
                                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                                    📍 Pragati Maidan, New Delhi
                                </span>
                                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full">
                                    🏢 Hall 5 | Pod SU F03
                                </span>
                            </div>

                            <p className="text-black-600 text-lg">
                                At India Mobile Congress 2024, RideNext demonstrated its advanced
                                telecom capabilities including RAN integration, 5G solutions, and
                                network optimization. The event enabled direct engagement with
                                global telecom leaders, government stakeholders, and ecosystem partners.
                            </p>

                            <p className="text-black-600 text-lg">
                                The showcase highlighted our commitment to accelerating digital
                                transformation and building scalable, future-ready network infrastructures.
                            </p>
                        </div>

                        {/* RIGHT → Poster */}
                        <div className="overflow-hidden rounded-2xl shadow-lg">
                            <img
                                src={Image3}
                                alt="India Mobile Congress Poster"
                                width={500}
                                height={400}
                                className="rounded-2xl shadow-2xl h-[450px] object-cover "
                            />
                        </div>

                    </div>

                    {/* Gallery (ONLY 2 images now, aligned) */}
                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="overflow-hidden rounded-2xl shadow-md">
                            <img
                                src={Image1}
                                alt="Event Participation"
                                width={500}
                                height={320}
                                className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
                            />
                        </div>

                        <div className="overflow-hidden rounded-2xl shadow-md">
                            <img
                                src={Image2}
                                alt="Expo Booth"
                                width={500}
                                height={320}
                                className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
                            />
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
}