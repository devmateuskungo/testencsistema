import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Target, Eye, Heart, Award, Users, Globe } from "lucide-react";

const values = [
  { icon: Award, title: "Excelência", desc: "Buscamos os mais altos padrões em tudo que fazemos." },
  { icon: Heart, title: "Integridade", desc: "Atuamos com ética, transparência e respeito." },
  { icon: Users, title: "Colaboração", desc: "Trabalhamos em equipa com clientes e parceiros." },
  { icon: Globe, title: "Inovação", desc: "Abraçamos a mudança e promovemos soluções criativas." },
];

const About = () => {
  const { ref: historyRef, isVisible: historyVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
      <section className="section-dark pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6">
            Sobre a <span className="gradient-text">NCSISTEMAS</span>
          </h1>
          <p className="text-lg text-dark-foreground/60 max-w-2xl mx-auto">
            Mais de uma década de compromisso com a inovação tecnológica em Angola.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="section-padding" ref={historyRef}>
        <div className="container mx-auto">
          <div className={`max-w-3xl mx-auto transition-all duration-700 ${historyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <SectionHeader badge="Nossa História" title="Uma Jornada de Inovação" />
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Fundada em Angola, a NCSISTEMAS nasceu com a missão de transformar o panorama tecnológico do país. Ao longo de mais de 10 anos, construímos uma reputação sólida como parceiros de confiança para empresas que buscam a excelência digital.
              </p>
              <p>
                A nossa equipa é composta por profissionais altamente qualificados, apaixonados por tecnologia e comprometidos com o desenvolvimento do talento angolano. Acreditamos que a transformação digital é o motor do crescimento económico de Angola.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-card border border-border card-hover">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fornecer soluções tecnológicas inovadoras e seguras que impulsionem a transformação digital das organizações angolanas, contribuindo para o desenvolvimento económico e social do país.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border card-hover">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser a referência em transformação digital em Angola e na região da África Austral, reconhecidos pela excelência, inovação e pelo impacto positivo na sociedade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" ref={valuesRef}>
        <div className="container mx-auto">
          <SectionHeader badge="Valores" title="O que Nos Define" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((item, i) => (
              <div
                key={item.title}
                className={`text-center p-6 rounded-xl bg-card border border-border card-hover transition-all duration-700 ${
                  valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
