import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeader = ({ badge, title, description, light }: SectionHeaderProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4">
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 ${
          light ? "text-dark-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-lg ${light ? "text-dark-foreground/60" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
