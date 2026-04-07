import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Cloud, Zap, Shield } from "lucide-react";
import { Server, Layers, Cpu, Box } from "lucide-react";
import Picture1 from "../../public/people_culture/Picture1.png";
import Picture2 from "../../public/people_culture/Picture2.png";
import Picture3 from "../../public/people_culture/Picture3.png";
import { Users, HeartHandshake, Lightbulb, Target, Briefcase, Globe, GraduationCap } from "lucide-react";

export default function PeopleCulture() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="People & Culture"
        subtitle=""
      />
    <section className="w-full py-16 px-6 lg:px-20 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
       
        <p className="mt-6 text-black-600 mx-auto text-lg leading-relaxed">
          At RideNext, our people are at the core of everything we do. We foster a collaborative,
          inclusive, and innovation-driven culture that empowers individuals to grow, contribute,
          and lead. Our work environment encourages continuous learning, ownership, and excellence
          across all levels of the organization.
        </p>
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
         <div className="text-center mb-12">
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6 flex gap-4 items-start">
              <Users className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-xl mb-2">Inclusive & Diverse Workplace</h3>
                <p className="text-gray-600">
                  We foster diversity and inclusion by creating an environment where individuals from different
                  backgrounds feel valued, respected, and empowered to contribute.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6 flex gap-4 items-start">
              <Lightbulb className="w-8 h-8 text-yellow-500" />
              <div>
                <h3 className="font-semibold text-xl mb-2">Innovation-Driven Culture</h3>
                <p className="text-gray-600">
                  We encourage forward-thinking, creativity, and problem-solving to build next-generation
                  solutions across 4G, 5G, and cloud-native ecosystems.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6 flex gap-4 items-start">
              <HeartHandshake className="w-8 h-8 text-red-500" />
              <div>
                <h3 className="font-semibold text-xl mb-2">Collaboration & Teamwork</h3>
                <p className="text-gray-600">
                  Strong collaboration and transparent communication enable seamless teamwork across distributed
                  teams and global stakeholders.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6 flex gap-4 items-start">
              <Target className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="font-semibold text-xl mb-2">Performance & Ownership</h3>
                <p className="text-gray-600">
                  We promote accountability and ownership, enabling individuals to take initiative and deliver
                  high-impact results.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6 flex gap-4 items-start">
              <GraduationCap className="w-8 h-8 text-purple-600" />
              <div>
                <h3 className="font-semibold text-xl mb-2">Continuous Learning & Upskilling</h3>
                <p className="text-gray-600">
                  We invest in employee growth through training, certifications, and hands-on project exposure
                  in emerging technologies.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6 flex gap-4 items-start">
              <Globe className="w-8 h-8 text-indigo-600" />
              <div>
                <h3 className="font-semibold text-xl mb-2">Global Exposure</h3>
                <p className="text-gray-600">
                  Our teams collaborate across geographies, gaining exposure to international projects,
                  diverse cultures, and global best practices.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6 flex gap-4 items-start">
              <Briefcase className="w-8 h-8 text-gray-700" />
              <div>
                <h3 className="font-semibold text-xl mb-2">Work-Life Balance</h3>
                <p className="text-gray-600">
                  We support flexible and healthy work practices that help employees maintain a strong
                  balance between professional and personal commitments.
                </p>
              </div>
            </CardContent>
            </Card>
        </div>

        {/* Right Images */}
        <div className="flex flex-col gap-6">
          <img
            src={Picture1}
            alt="People collaboration"
            className="rounded-2xl shadow-2xl h-[450px] object-cover"
          />
          <img
            src={Picture2}
            alt="Teamwork gears"
            className="rounded-2xl shadow-2xl h-[450px] object-cover"
          />
          {/* <img
            src={Picture3}
            alt="Virtual collaboration"
            className="rounded-2xl shadow-2xl h-[450px] object-cover"
          /> */}
        </div>
      </div>
    </section>
    </div>
    
  );
}

