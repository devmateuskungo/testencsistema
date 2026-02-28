import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar, ArrowRight, Tag } from "lucide-react";

const categories = ["Todos", "Segurança", "Cloud", "Transformação Digital", "DevOps", "Inovação em Angola"];

const posts = [
  {
    title: "Como a IA Está a Transformar o Sector Bancário em Angola",
    summary: "Descubra como a inteligência artificial está a revolucionar os serviços financeiros no mercado angolano.",
    category: "Inovação em Angola",
    date: "15 Fev, 2026",
    color: "bg-blue-500",
  },
  {
    title: "5 Práticas Essenciais de Cibersegurança para Empresas",
    summary: "Proteja a sua organização com estas estratégias comprovadas de segurança da informação.",
    category: "Segurança",
    date: "10 Fev, 2026",
    color: "bg-red-500",
  },
  {
    title: "Migração para a Cloud: Guia Completo para PMEs Angolanas",
    summary: "Tudo o que precisa de saber para migrar a sua infraestrutura para a nuvem de forma segura.",
    category: "Cloud",
    date: "5 Fev, 2026",
    color: "bg-purple-500",
  },
  {
    title: "DevOps em Angola: Desafios e Oportunidades",
    summary: "Uma análise das práticas DevOps e como podem ser aplicadas no contexto angolano.",
    category: "DevOps",
    date: "28 Jan, 2026",
    color: "bg-green-500",
  },
  {
    title: "Transformação Digital: Por Onde Começar?",
    summary: "Um guia prático para empresas que querem iniciar a sua jornada de transformação digital.",
    category: "Transformação Digital",
    date: "20 Jan, 2026",
    color: "bg-orange-500",
  },
  {
    title: "O Papel do Talento Local na Revolução Tecnológica de Angola",
    summary: "Como o investimento em capital humano está a moldar o futuro tecnológico do país.",
    category: "Inovação em Angola",
    date: "15 Jan, 2026",
    color: "bg-teal-500",
  },
];

const Blog = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
      <section className="section-dark pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6">
            Blog & <span className="gradient-text">Artigos</span>
          </h1>
          <p className="text-lg text-dark-foreground/60 max-w-2xl mx-auto">
            Insights, tendências e conhecimento sobre tecnologia e inovação.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-border bg-background sticky top-16 md:top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 py-4 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  cat === "Todos"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <article
                key={post.title}
                className={`group rounded-2xl overflow-hidden bg-card border border-border card-hover transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Color bar */}
                <div className={`h-48 ${post.color}/10 flex items-center justify-center`}>
                  <div className={`w-16 h-16 rounded-full ${post.color}/20 flex items-center justify-center`}>
                    <Tag className={`${post.color.replace("bg-", "text-")}`} size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.summary}</p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all cursor-pointer">
                    Ler mais <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
