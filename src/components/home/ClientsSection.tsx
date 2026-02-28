import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/SectionHeader";

const clients = [
  "Sonangol", "TAAG", "BAI", "BCI", "Unitel",
  "Angola Telecom", "ENDE", "BNA", "ENSA", "Multichoice",
];

const ClientsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <SectionHeader
          badge="Clientes"
          title="Empresas que Confiam no Nosso Trabalho"
          description="Orgulhamo-nos de ser parceiros de confiança das maiores empresas de Angola."
        />

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {clients.map((name, i) => (
            <div
              key={name}
              className={`h-20 rounded-xl bg-card border border-border flex items-center justify-center font-semibold text-muted-foreground/70 hover:text-primary hover:border-primary/30 transition-all duration-300 card-hover ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
