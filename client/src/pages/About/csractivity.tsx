import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import Image1 from "../../../public/csr/image1.png";
import Image2 from "../../../public/csr/image2.png";
import { motion } from "framer-motion";
import { BadgeCheck, CalendarDays } from "lucide-react";


export default function CSRActivity() {
    return (
        <div className="min-h-screen bg-white">

            <PageHeader title="CSR Activity" subtitle="" />

            <section className="px-6 py-12">
                <div className="container mx-auto max-w-5xl">

                    {/* Timeline Wrapper */}
                    <div className="relative border-l-2 border-indigo-200 pl-6 space-y-12">

                        {/* ITEM 1 */}
                        <div className="relative">

                            {/* Dot */}
                            <div className="absolute -left-[11px] top-2 w-5 h-5 bg-indigo-600 rounded-full border-4 border-white"></div>

                            <div className="grid md:grid-cols-2 gap-8 items-center">

                                {/* TEXT */}
                                <motion.div
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Card className="rounded-2xl shadow-md border hover:shadow-xl">
                                        <CardContent className="p-6 space-y-4">

                                            <h3 className="text-xl font-semibold text-indigo-600">
                                                Community Development
                                            </h3>

                                            <p className="text-gray-700 text-lg leading-relaxed">
                                                RideNext, as part of its CSR initiative, constructed a toilet
                                                for an underprivileged family in rural Warangal, Telangana,
                                                restoring dignity and basic sanitation.
                                            </p>

                                            <p className="text-gray-700 text-lg leading-relaxed">
                                                The initiative supports a physically challenged student and
                                                was recognized by media for its social impact.
                                            </p>

                                            {/* BADGES */}
                                            <div className="flex gap-3 flex-wrap">
                                                <span className="flex items-center gap-1 text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                                    <BadgeCheck size={16} /> CSR Impact
                                                </span>
                                                <span className="flex items-center gap-1 text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                                                    <BadgeCheck size={16} /> Media Recognition
                                                </span>
                                            </div>

                                        </CardContent>
                                    </Card>
                                </motion.div>

                                {/* IMAGE */}
                                <motion.div whileHover={{ scale: 1.04 }}>
                                    <Card className="overflow-hidden rounded-2xl shadow-md border hover:shadow-xl">
                                        <img
                                            src={Image1}
                                            alt="CSR Activity - Sanitation Initiative"
                                            className="w-full h-72 object-cover"
                                        />
                                    </Card>
                                </motion.div>

                            </div>
                        </div>

                        {/* ITEM 2 */}
                        <div className="relative">

                            {/* Dot */}
                            <div className="absolute -left-[11px] top-2 w-5 h-5 bg-indigo-600 rounded-full border-4 border-white"></div>

                            <div className="grid md:grid-cols-2 gap-8 items-center">

                                {/* IMAGE (LEFT for zig-zag) */}
                                <motion.div
                                    whileHover={{ scale: 1.04 }}
                                    className="order-2 md:order-1"
                                >
                                    <Card className="overflow-hidden rounded-2xl shadow-md border hover:shadow-xl">
                                        <img
                                            src={Image2}
                                            alt="CSR Activity - Flood Relief Support"
                                            className="w-full h-72 object-cover"
                                        />
                                    </Card>
                                </motion.div>

                                {/* TEXT */}
                                <motion.div
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="order-1 md:order-2"
                                >
                                    <Card className="rounded-2xl shadow-md border hover:shadow-xl">
                                        <CardContent className="p-6 space-y-4">

                                            <h3 className="text-xl font-semibold text-indigo-600">
                                                Disaster Relief Support
                                            </h3>

                                            {/* DATE BADGE */}
                                            <div className="flex items-center gap-2 text-sm text-indigo-600 font-medium">
                                                <CalendarDays size={16} />
                                                11th Sep 2024
                                            </div>

                                            <p className="text-gray-700 text-lg leading-relaxed">
                                                On 11th Sep 2024, as part of its CSR initiatives, RideNext
                                                extended support by contributing INR 41120 to Andhra Pradesh
                                                CM Relief Fund to communities affected by the floods in
                                                Andhra Pradesh and Telangana.
                                            </p>

                                            {/* ENHANCEMENT */}
                                            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-xl">
                                                <p className="text-gray-700 text-base leading-relaxed">
                                                    This initiative demonstrates RideNext’s commitment to
                                                    supporting communities during natural disasters and
                                                    enabling timely recovery through meaningful contributions.
                                                </p>
                                            </div>

                                            {/* BADGE */}
                                            <span className="inline-block text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                                                CSR Contribution
                                            </span>

                                        </CardContent>
                                    </Card>
                                </motion.div>

                            </div>
                        </div>

                    </div>

                    {/* CTA */}
                    <div className="mt-16 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-2xl p-6 text-center shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">
                            Creating Sustainable Impact at the Grassroots Level
                        </h3>
                        <p className="max-w-2xl mx-auto text-lg md:text-base">
                            RideNext continues to empower communities through focused CSR
                            initiatives that promote dignity, resilience, and long-term
                            development.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
}