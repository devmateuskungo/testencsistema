import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/30 to-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/20 text-primary mb-6 animate-fade-up">
            Transformação Digital em Angola
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-dark-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Transformação Digital que Impulsiona o{" "}
            <span className="gradient-text">Futuro de Angola</span>
          </h1>

          <p className="text-lg md:text-xl text-dark-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Mais de 10 anos de experiência em TI e inovação tecnológica, ajudando empresas angolanas a alcançar a excelência digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/servicos" className="btn-primary-gradient inline-flex items-center justify-center gap-2 text-base">
              Conheça Nossos Serviços
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-dark-foreground/20 text-dark-foreground font-semibold hover:bg-dark-foreground/10 transition-all text-base"
            >
              Fale Conosco
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "10+", label: "Anos de Experiência" },
              { value: "200+", label: "Projetos Entregues" },
              { value: "50+", label: "Clientes Ativos" },
              { value: "99%", label: "Satisfação" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1">{stat.value}</div>
                <div className="text-dark-foreground/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-dark-foreground/40" size={28} />
      </div>
    </section>
  );
};

export default HeroSection;
