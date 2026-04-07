import { Header } from "@radix-ui/react-accordion"
// ------------------------Vertical Lines--------------------
interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div
      className="
        relative overflow-hidden
        min-h-[260px] md:min-h-[320px]
        flex items-center
        pt-[80px]
        bg-gradient-to-r
        from-[#4564ad]
        via-[#0b1e3a]
        to-[#0b1e3a]
      "
    >
      {/* Animated Vertical Lines Background */}
      <div className="absolute inset-0 flex justify-around items-end pointer-events-none z-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={`w-[2px] bg-gradient-to-t from-blue-500 via-cyan-400 to-transparent opacity-60 animate-line ${
              i % 2 === 0 ? "animation-delay-even" : "animation-delay-odd"
            }`}
            style={{
              height: `${Math.random() * 70 + 30}%`,
            }}
          />
        ))}
      </div>

      {/* Overlay Glow Effect */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Text Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 text-center pt-6 md:pt-10">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  );
}



