import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Lightbulb, Users, TrendingUp } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding geometric-pattern">
      <div className="container mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary mb-4">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
              Liderando a Inovação Tecnológica em Angola
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A NCSISTEMAS é uma empresa angolana especializada em transformação digital, segurança da informação e soluções tecnológicas de ponta. Com mais de 10 anos de experiência, ajudamos organizações a modernizar seus processos, proteger seus dados e alcançar resultados excepcionais.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nosso compromisso é com o desenvolvimento do talento angolano, promovendo a inovação local e conectando Angola ao futuro digital global.
            </p>
          </div>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="rounded-2xl overflow-hidden mb-6 shadow-xl">
              <img src={aboutTeam} alt="Equipa NCSISTEMAS colaborando" className="w-full h-64 object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, title: "Segurança", desc: "Proteção avançada para seus dados" },
                { icon: Lightbulb, title: "Inovação", desc: "Soluções tecnológicas de ponta" },
                { icon: Users, title: "Talento Local", desc: "Investimento no capital humano angolano" },
                { icon: TrendingUp, title: "Resultados", desc: "Crescimento mensurável para o negócio" },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl bg-card border border-border card-hover">
                  <item.icon className="text-primary mb-3" size={28} />
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
