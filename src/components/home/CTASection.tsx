import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-dark">
      <div className="container mx-auto px-4 py-20 md:py-28" ref={ref}>
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark-foreground mb-6">
            Pronto para Transformar o Seu{" "}
            <span className="gradient-text">Negócio?</span>
          </h2>
          <p className="text-lg text-dark-foreground/60 mb-10 max-w-xl mx-auto">
            Entre em contacto com a nossa equipa e descubra como podemos acelerar a transformação digital da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="btn-primary-gradient inline-flex items-center justify-center gap-2 text-base">
              Fale Conosco <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/244923000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-dark-foreground/20 text-dark-foreground font-semibold hover:bg-dark-foreground/10 transition-all text-base"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
