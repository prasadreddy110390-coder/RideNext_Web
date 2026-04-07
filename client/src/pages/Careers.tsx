import { PageHeader } from "@/components/PageHeader";
import { useJobs } from "@/hooks/use-jobs";
import { MapPin, Briefcase, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Mail } from "lucide-react";


export default function Careers() {
  const { data: jobs, isLoading } = useJobs();

  return (
    <div className="min-h-screen">


      <PageHeader
        title="Join Our Team"
        subtitle=""
      />
      {/* Build the future with us. We're looking for passionate minds to solve complex challenges. */}
      {/* <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-16">
               <h2 className="text-3xl font-display font-bold mb-4">Current Openings</h2>
               <p className="text-muted-foreground">
                 Explore our open roles and find your fit.
               </p>
             </div>

             {isLoading ? (
               <div className="space-y-4">
                 {[1, 2, 3].map(i => <div key={i} className="h-32 bg-slate-100 rounded-xl animate-pulse" />)}
               </div>
             ) : (
               <div className="space-y-6">
                 {jobs?.map((job) => (
                   <Card key={job.id} className="group hover:border-primary/50 transition-colors shadow-sm hover:shadow-md overflow-hidden">
                     <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                       <div>
                         <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                           {job.title}
                         </h3>
                         <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                           <div className="flex items-center gap-1.5">
                             <MapPin className="w-4 h-4" />
                             {job.location}
                           </div>
                           <div className="flex items-center gap-1.5">
                             <Briefcase className="w-4 h-4" />
                             {job.type}
                           </div>
                         </div>
                         <p className="text-slate-500 line-clamp-2 max-w-xl">
                           {job.description}
                         </p>
                       </div>
                       
                       <Button className="shrink-0">
                         Apply Now <ChevronRight className="w-4 h-4 ml-1" />
                       </Button>
                     </CardContent>
                   </Card>
                 ))}
                 
                 {jobs?.length === 0 && (
                   <div className="text-center py-12 bg-slate-50 rounded-2xl">
                     <p className="text-muted-foreground">No current openings. Please check back later.</p>
                   </div>
                 )}
               </div>
             )}
          </div>
        </div>
      </section> */}

      <section className="py-28 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">

            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl animate-pulse" />
                <div className="relative p-6 rounded-full bg-gradient-to-tr from-primary via-indigo-500 to-cyan-400 shadow-xl">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              No Current Openings
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed">
              We don’t have any open roles right now — but great talent never goes unnoticed.
              Stay connected and be the first to know when new opportunities open up.
            </p>

            {/* Animated Sparkles */}
            <div className="flex justify-center gap-4 mb-12">
              <Sparkles className="text-primary w-5 h-5 animate-bounce" />
              <Sparkles className="text-indigo-500 w-5 h-5 animate-bounce delay-150" />
              <Sparkles className="text-cyan-500 w-5 h-5 animate-bounce delay-300" />
            </div>

            {/* Divider Line */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
              <span className="text-sm text-slate-400 tracking-wide">RideNext Careers</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
            </div>

            {/* Footer Note */}
            <p className="text-sm text-slate-400">
              We’re constantly growing — check back soon 🚀
            </p>

          </div>
        </div>
      </section>
    </div>
  );
}
