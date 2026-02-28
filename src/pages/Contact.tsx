import Layout from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensagem enviada!", description: "Entraremos em contacto em breve." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-dark pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6">
            Fale <span className="gradient-text">Conosco</span>
          </h1>
          <p className="text-lg text-dark-foreground/60 max-w-2xl mx-auto">
            Estamos prontos para ajudar a transformar o seu negócio.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div
            ref={ref}
            className={`grid lg:grid-cols-5 gap-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Informações de Contacto</h2>
                <p className="text-muted-foreground">
                  Entre em contacto connosco através dos canais abaixo ou preencha o formulário.
                </p>
              </div>

              <div className="space-y-4">
                <a href="mailto:info@ncsistemas.ao" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center"><Mail className="text-primary" size={18} /></div>
                  info@ncsistemas.ao
                </a>
                <a href="tel:+244923000000" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center"><Phone className="text-primary" size={18} /></div>
                  +244 923 000 000
                </a>
                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center"><MapPin className="text-primary" size={18} /></div>
                  Luanda, Angola
                </div>
              </div>

              <a
                href="https://wa.me/244923000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-gradient inline-flex items-center gap-2 text-sm"
              >
                <MessageCircle size={16} /> Falar no WhatsApp
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Nome</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Telefone</label>
                  <input
                    type="tel"
                    maxLength={20}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none transition-all"
                    placeholder="+244 ..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Mensagem</label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none transition-all resize-none"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <button type="submit" className="btn-primary-gradient inline-flex items-center gap-2">
                  <Send size={16} /> Enviar Mensagem
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16 rounded-2xl overflow-hidden border border-border h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.76601892284!2d13.1613!3d-8.8383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc4f02e7%3A0x7e5f26b7f2f5d2a0!2sLuanda%2C%20Angola!5e0!3m2!1spt-BR!2sao!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização NCSISTEMAS - Luanda, Angola"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
