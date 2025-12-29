interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative bg-slate-900 py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
