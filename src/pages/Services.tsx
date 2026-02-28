import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Shield, AlertTriangle, Search, BookOpen, UserCheck,
  Cloud, Server, Bot, Brain,
  Network, Database, Container, DollarSign, RotateCcw,
  Code, Layers, Workflow, GitBranch, FileSearch,
  Palette, Users, PenTool, TestTube, Accessibility,
  BarChart3, Terminal, Headphones, Bell, Settings,
} from "lucide-react";
import { ReactNode } from "react";

interface ServiceCategory {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  items: { icon: React.ElementType; title: string; desc: string }[];
}

const categories: ServiceCategory[] = [
  {
    icon: Shield,
    title: "Segurança da Informação",
    description: "Proteção completa para os ativos digitais da sua organização.",
    color: "bg-red-500/10 text-red-500",
    items: [
      { icon: FileSearch, title: "Auditoria e Compliance", desc: "LGPD, GDPR, ISO 27001" },
      { icon: Search, title: "Pentest", desc: "Testes de penetração e vulnerabilidades" },
      { icon: AlertTriangle, title: "Gestão de Riscos", desc: "Identificação e mitigação de riscos" },
      { icon: Shield, title: "Resposta a Incidentes", desc: "Reação rápida e eficaz a ameaças" },
      { icon: BookOpen, title: "Treinamento", desc: "Conscientização em segurança digital" },
    ],
  },
  {
    icon: Cloud,
    title: "Transformação Digital",
    description: "Modernize seus processos com as mais avançadas tecnologias.",
    color: "bg-blue-500/10 text-blue-500",
    items: [
      { icon: Cloud, title: "Migração para Nuvem", desc: "AWS, Azure, Google Cloud" },
      { icon: Server, title: "Modernização Legada", desc: "Atualização de sistemas existentes" },
      { icon: Bot, title: "Automação RPA/BPM", desc: "Automação inteligente de processos" },
      { icon: Brain, title: "IA & Machine Learning", desc: "Inteligência artificial aplicada" },
    ],
  },
  {
    icon: Server,
    title: "Infraestrutura & Cloud Computing",
    description: "Infraestrutura robusta e escalável para o seu negócio.",
    color: "bg-purple-500/10 text-purple-500",
    items: [
      { icon: Network, title: "Arquitetura de Redes", desc: "Design e implementação de redes" },
      { icon: Database, title: "Data Centers", desc: "Gestão e otimização de data centers" },
      { icon: Container, title: "Docker & Kubernetes", desc: "Containerização e orquestração" },
      { icon: DollarSign, title: "Otimização de Custos", desc: "Eficiência em despesas de TI" },
      { icon: RotateCcw, title: "Recuperação de Desastres", desc: "Planos de continuidade de negócio" },
    ],
  },
  {
    icon: Code,
    title: "Desenvolvimento de Software & DevOps",
    description: "Desenvolvimento ágil com práticas DevOps de excelência.",
    color: "bg-green-500/10 text-green-500",
    items: [
      { icon: Layers, title: "Microsserviços", desc: "Arquitetura modular escalável" },
      { icon: Cloud, title: "Serverless", desc: "Computação sem servidor" },
      { icon: GitBranch, title: "CI/CD", desc: "Integração e entrega contínua" },
      { icon: Workflow, title: "Scrum & Kanban", desc: "Metodologias ágeis" },
      { icon: FileSearch, title: "Code Review & SonarQube", desc: "Qualidade de código garantida" },
    ],
  },
  {
    icon: Palette,
    title: "UX, UI & Design Thinking",
    description: "Experiências digitais centradas no utilizador.",
    color: "bg-pink-500/10 text-pink-500",
    items: [
      { icon: Users, title: "Pesquisa de Usuários", desc: "Entendimento profundo do utilizador" },
      { icon: PenTool, title: "Prototipagem", desc: "Protótipos interativos de alta fidelidade" },
      { icon: TestTube, title: "Testes de Usabilidade", desc: "Validação com utilizadores reais" },
      { icon: Accessibility, title: "Acessibilidade Digital", desc: "Design inclusivo para todos" },
    ],
  },
  {
    icon: BarChart3,
    title: "Monitoramento & ITSM",
    description: "Visibilidade total sobre a sua infraestrutura de TI.",
    color: "bg-orange-500/10 text-orange-500",
    items: [
      { icon: BarChart3, title: "Zabbix, Grafana, Dynatrace", desc: "Monitoramento avançado" },
      { icon: Terminal, title: "Automação de Scripts", desc: "Automação de tarefas repetitivas" },
      { icon: Headphones, title: "ServiceDesk & JIRA", desc: "Gestão de chamados e incidentes" },
      { icon: Bell, title: "Alertas Automáticos", desc: "Teams, SMS e notificações" },
      { icon: Settings, title: "Integração ITIL", desc: "Melhores práticas ITSM" },
    ],
  },
];

const CategoryCard = ({ category, index }: { category: ServiceCategory; index: number }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="p-8 rounded-2xl bg-card border border-border card-hover">
        <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mb-6`}>
          <category.icon size={28} />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
        <p className="text-muted-foreground text-sm mb-6">{category.description}</p>

        <div className="space-y-3">
          {category.items.map((item) => (
            <div key={item.title} className="flex gap-3 items-start p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <item.icon className="text-primary shrink-0 mt-0.5" size={18} />
              <div>
                <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-dark pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h1>
          <p className="text-lg text-dark-foreground/60 max-w-2xl mx-auto">
            Soluções tecnológicas completas para cada desafio do seu negócio.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.title} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
