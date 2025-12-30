import { PageHeader } from "@/components/PageHeader";
import { useJobs } from "@/hooks/use-jobs";
import { MapPin, Briefcase, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Careers() {
  const { data: jobs, isLoading } = useJobs();

  return (
    <div className="min-h-screen">
      {/* We are Hiring Banner */}
      <div className="bg-gradient-to-r from-primary to-cyan-500 text-white py-6 text-center">
        <h1 className="text-3xl md:text-4xl font-display font-bold">We are Hiring</h1>
      </div>

      <PageHeader 
        title="Join Our Team" 
        subtitle="Build the future with us. We're looking for passionate minds to solve complex challenges." 
      />

      <section className="py-24">
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
      </section>
    </div>
  );
}
