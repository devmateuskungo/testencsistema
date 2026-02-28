import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/SectionHeader";
import { Award, Clock, HeartHandshake, Cpu, Globe, GraduationCap } from "lucide-react";
import differentialsDev from "@/assets/differentials-dev.jpg";

const items = [
  { icon: Award, title: "Excelência Comprovada", desc: "Mais de 200 projetos entregues com sucesso em Angola e na região." },
  { icon: Clock, title: "Suporte 24/7", desc: "Monitoramento contínuo e resposta rápida a incidentes." },
  { icon: HeartHandshake, title: "Parceria Estratégica", desc: "Atuamos como extensão da sua equipa de TI." },
  { icon: Cpu, title: "Tecnologia de Ponta", desc: "Utilizamos as melhores ferramentas e metodologias do mercado." },
  { icon: Globe, title: "Visão Global", desc: "Padrões internacionais adaptados à realidade angolana." },
  { icon: GraduationCap, title: "Capacitação", desc: "Formamos e desenvolvemos o talento local." },
];

const DifferentialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding geometric-pattern">
      <div className="container mx-auto">
        <SectionHeader
          badge="Diferenciais"
          title="Porquê a NCSISTEMAS?"
          description="Compromisso com a inovação, excelência e o desenvolvimento tecnológico de Angola."
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid md:grid-cols-2 gap-8">
            {items.map((item, i) => (
              <div
                key={item.title}
                className={`flex gap-4 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <item.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={differentialsDev} alt="Profissional de TI feliz a trabalhar" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
