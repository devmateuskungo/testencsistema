import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/SectionHeader";
import { Shield, Cloud, Server, Code, Palette, BarChart3, ArrowRight } from "lucide-react";
import servicesTeam from "@/assets/services-team.jpg";

const services = [
  { icon: Shield, title: "Segurança da Informação", desc: "Auditoria, compliance, pentest e gestão de riscos para proteger seu negócio." },
  { icon: Cloud, title: "Transformação Digital", desc: "Migração para nuvem, automação com RPA/BPM, IA e Machine Learning." },
  { icon: Server, title: "Infraestrutura & Cloud", desc: "Arquitetura de redes, data centers, Docker, Kubernetes e recuperação de desastres." },
  { icon: Code, title: "Desenvolvimento & DevOps", desc: "Microsserviços, serverless, CI/CD, Scrum e code review com SonarQube." },
  { icon: Palette, title: "UX/UI & Design Thinking", desc: "Pesquisa de usuários, prototipagem, testes de usabilidade e acessibilidade." },
  { icon: BarChart3, title: "Monitoramento & ITSM", desc: "Zabbix, Grafana, Dynatrace, ServiceDesk, JIRA e integração ITIL." },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding section-dark">
      <div className="container mx-auto">
        {/* Header with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <SectionHeader
              badge="Serviços"
              title="Soluções Completas de TI"
              description="Oferecemos uma gama completa de serviços tecnológicos para impulsionar a transformação digital da sua empresa."
              light
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={servicesTeam} alt="Equipa a planear soluções tecnológicas" className="w-full h-64 object-cover" />
          </div>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`p-8 rounded-xl border border-dark-foreground/10 bg-dark-foreground/5 hover:bg-dark-foreground/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-5">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold text-dark-foreground mb-3">{service.title}</h3>
              <p className="text-dark-foreground/60 text-sm leading-relaxed mb-4">{service.desc}</p>
              <Link to="/servicos" className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all">
                Saiba mais <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
