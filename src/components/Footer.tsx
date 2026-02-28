import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-dark">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-extrabold text-lg">NC</span>
              </div>
              <span className="font-bold text-xl text-dark-foreground">NCSISTEMAS</span>
            </div>
            <p className="text-dark-foreground/60 text-sm leading-relaxed mb-6">
              Transformação Digital que Impulsiona o Futuro de Angola. Mais de 10 anos de experiência em TI e inovação tecnológica.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-dark-foreground/10 flex items-center justify-center text-dark-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-dark-foreground/10 flex items-center justify-center text-dark-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-dark-foreground/10 flex items-center justify-center text-dark-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-dark-foreground mb-4">Links Rápidos</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Serviços", path: "/servicos" },
                { label: "Sobre Nós", path: "/sobre" },
                { label: "Blog", path: "/blog" },
                { label: "Clientes", path: "/clientes" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-dark-foreground/60 hover:text-primary text-sm transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-dark-foreground mb-4">Serviços</h4>
            <div className="flex flex-col gap-2 text-sm text-dark-foreground/60">
              <span>Segurança da Informação</span>
              <span>Transformação Digital</span>
              <span>Cloud Computing</span>
              <span>Desenvolvimento de Software</span>
              <span>UX/UI Design</span>
              <span>Monitoramento & ITSM</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-dark-foreground mb-4">Contacto</h4>
            <div className="flex flex-col gap-3 text-sm text-dark-foreground/60">
              <a href="mailto:info@ncsistemas.ao" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={14} /> info@ncsistemas.ao
              </a>
              <a href="tel:+244923000000" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={14} /> +244 923 000 000
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>Luanda, Angola</span>
              </div>
            </div>
            <a
              href="https://wa.me/244923000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gradient mt-6 text-xs !py-2 !px-4 rounded-md inline-block"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-dark-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-dark-foreground/40">
          <span>&copy; {new Date().getFullYear()} NCSISTEMAS. Todos os direitos reservados.</span>
          <div className="flex gap-6">
            <Link to="/privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link>
            <Link to="/termos" className="hover:text-primary transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
