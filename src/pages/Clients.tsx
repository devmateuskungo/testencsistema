import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote, Star } from "lucide-react";

const clients = [
  "Sonangol", "TAAG", "Banco BAI", "BCI", "Unitel",
  "Angola Telecom", "ENDE", "Banco Nacional de Angola", "ENSA", "Multichoice Angola",
  "Total Energies", "Chevron Angola",
];

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CTO, Sonangol",
    text: "A NCSISTEMAS transformou a nossa infraestrutura de TI. A equipa demonstrou profissionalismo e competência excepcionais ao longo de todo o projeto.",
  },
  {
    name: "Ana Ferreira",
    role: "Diretora de TI, TAAG",
    text: "A parceria com a NCSISTEMAS permitiu-nos modernizar os nossos sistemas de forma segura e eficiente. Recomendamos sem hesitação.",
  },
  {
    name: "João Silva",
    role: "CISO, Banco BAI",
    text: "A auditoria de segurança realizada pela NCSISTEMAS foi fundamental para fortalecer a nossa postura de cibersegurança. Profissionais de referência.",
  },
];

const Clients = () => {
  const { ref: logosRef, isVisible: logosVisible } = useScrollAnimation();
  const { ref: testRef, isVisible: testVisible } = useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
      <section className="section-dark pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6">
            Nossos <span className="gradient-text">Clientes</span>
          </h1>
          <p className="text-lg text-dark-foreground/60 max-w-2xl mx-auto">
            Empresas que confiam no nosso trabalho e inovação.
          </p>
        </div>
      </section>

      {/* Client logos */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeader badge="Parceiros" title="Quem Confia em Nós" />
          <div ref={logosRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((name, i) => (
              <div
                key={name}
                className={`h-24 rounded-xl bg-card border border-border flex items-center justify-center font-semibold text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-500 card-hover ${
                  logosVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <SectionHeader badge="Depoimentos" title="O que Dizem os Nossos Clientes" />
          <div ref={testRef} className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`p-8 rounded-2xl bg-card border border-border card-hover transition-all duration-700 ${
                  testVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Quote className="text-primary/30 mb-4" size={32} />
                <p className="text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="text-primary fill-primary" size={14} />
                  ))}
                </div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
