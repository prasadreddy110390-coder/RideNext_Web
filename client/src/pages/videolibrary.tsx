import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";

const videos = [
  {
    title: "5G RAN Integration Overview",
    description: "A quick walkthrough of our RAN integration capabilities.",
    url: "https://www.youtube.com/embed/UteidGTgPC0",
    category: "Tech",
  },
  {
    title: "RideNext CSR Initiative",
    description: "Highlights from our CSR activities and community impact.",
    url: "https://www.youtube.com/embed/h98HWppA3FQ",
    category: "CSR",
  },
  {
    title: "Network Optimization Demo",
    description: "Live demo showcasing optimization strategies.",
    url: "https://www.youtube.com/embed/dzhDJciYGTs",
    category: "Demos",
  },
  {
    title: "Automation in Telecom",
    description: "How automation is transforming telecom operations.",
    url: "https://www.youtube.com/embed/VIDEO_ID_4",
    category: "Tech",
  },
];

const categories = ["All", "Tech", "CSR", "Demos"];

export default function YouTubeVideos() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const filteredVideos = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || video.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <PageHeader
        title="Our Insights & Videos"
        subtitle="Explore technical demos, CSR initiatives, and innovation stories"
      />

      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            
            {/* Search */}
            <input
              type="text"
              placeholder="Search videos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/3 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm transition ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-md"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map((video, index) => (
              <div
                key={index}
                onClick={() => setSelectedVideo(video)}
                className="cursor-pointer group bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden border border-slate-100"
              >
                <div className="aspect-video bg-black flex items-center justify-center">
                  <span className="text-white text-sm opacity-70">
                    ▶ Click to Play
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-800 group-hover:text-primary">
                    {video.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-2">
                    {video.description}
                  </p>
                  <span className="inline-block mt-3 text-xs bg-slate-100 px-3 py-1 rounded-full">
                    {video.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredVideos.length === 0 && (
            <div className="text-center text-slate-500 mt-16">
              No videos found.
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl overflow-hidden w-full max-w-4xl relative">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 shadow"
            >
              ✕
            </button>

            {/* Video */}
            <div className="aspect-video">
              <iframe
                src={selectedVideo.url}
                title={selectedVideo.title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>

            {/* Info */}
            <div className="p-5">
              <h3 className="text-xl font-semibold">
                {selectedVideo.title}
              </h3>
              <p className="text-slate-500 mt-2">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}