import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import ceoImg from "@assets/stock_images/ceo.png";
import cioImg from "@assets/stock_images/Manohar_Palukuru.png";
import cooImg from "@assets/stock_images/Manish_Tiwari.png";
import ctoImg from "@assets/stock_images/Srirangan_Photo.jpg";
import { useLocation } from "wouter";
const managers = [
  {
    name: "Mutte Nanibabu",
    position: "CHIEF EXECUTIVE OFFICER",
    bio: "Overall 21 years of Software Development and Management experience. Over 15 years of experience on Wireless domain. (2G, 3G, 4G & 5G). Responsible for delivery of various wireless products. Worked with big TEMs to generate Requirements, Architect, Design wireless products like MSC, VLR, Femto GWs. Experience in Onsite coordination and Customer interaction.",
    message:"Our journey is built on a strong foundation of trust, technology, and teamwork. We are committed to delivering reliable, future-ready solutions with a clear vision and a passionate team. We continue to grow responsibly and create meaningful value for our customers, partners, and communities",
    image: ceoImg
  },
  {
    name: "Manohar Palukuru",
    position: "CHIEF INFORMATION OFFICER",
    bio: "Overall 21 years of Software Development and Management experience. Over 15 years of experience on Wireless Core. (3G, 4G & 5G) architecting complex platform, stack development and performance tuning features. Rich experience in developing 3G, 4G and 5G products, architecting OAI EPC Productization for custom deployments.",
    message:"As technology is a key enabler of business growth and innovation, we are committed to build a robust IT systems, ensuring information security, and enabling digital initiatives that support our strategic goals and future readiness",
    image: cioImg
  },
  {
    name: "Manish Tiwari",
    position: "CHIEF OPERATIONS OFFICER",
    bio: "Manish graduated from NIT Durgapur and has an extensive experience in the wireless and telecommunications industry with expertise in IOT, IMS, Sigtran, 3G, 4G & 5G. Prior to RideNext, he has worked with ARICENT and TECH MAHINDRA.",
    message:"We strongly believe that operations are built on empowered teams and collaboration. By fostering accountability, continuous improvement, and process excellence, we aim to deliver seamless experiences for our customers and partners",
    image: cooImg
  },
  {
    name: "Srirangan ",
    position: "CHIEF TECHNOLOGY OFFICER",
    bio: "Overall 18+ Years of broad experience in Design, Development, Maintenance and porting in Telecom Wireless domain 2G, 3G, 4G & CUPS. Responsible for various engagements like Control and User Plane Separation (CUPS), LTE Femto GW green field development, HeNB Gateway Feature enhancements and maintenance, IOT platform enhancements, MSC feature enhancements and maintenance, ODC setups. Onsite co-ordination.",
    message:"We lead the company’s technology vision with a strong focus on innovation and scalability. By leveraging emerging technologies and robust engineering practices, we aim to build secure, future-ready solutions that create lasting value for our customers",
    image: ctoImg 
  }
];

export default function Management() {
  return (
    <div className="min-h-screen">
    
      <PageHeader 
        title="Meet Our Senior Visionary Leaders" 
        subtitle="" 
      />

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {managers.map((manager, i) => (
              <Card key={i} className="group border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white hover:bg-[#c3ccd9] text-slate-900 hover:text-black flex flex-col items-center p-6 rounded-2xl">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-100 group-hover:border-white mb-6 shrink-0 shadow-inner bg-slate-50 group-hover:bg-white/10 transition-colors duration-300">
                  <img 
                    src={manager.image} 
                    alt={manager.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-2xl text-[#313163] font-bold mb-1">{manager.name}</h3>
                  <p className="text-[#0f0f0f] group-hover:text-[#313163]/90 font-semibold text-xl transition-colors duration-300">{manager.position}</p>
                </div>
                <div className="text-center text-xl leading-relaxed opacity-90 transition-all duration-300">
                  {manager.bio}
                </div>
                <div className="text-center text-[#313163] font-bold text-xl italic leading-relaxed opacity-90 transition-all duration-300 md:px-6 mt-4">
                  "{manager.message}"
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
