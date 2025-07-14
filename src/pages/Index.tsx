import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <FAQ />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="font-display font-bold text-xl">
                MANICURA PRO
              </span>
            </div>
            <p className="text-background/80 mb-6">
              Transformando pasiones en profesiones desde 2024
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/80 hover:text-primary transition-colors"
              >
                WhatsApp
              </a>
              <a 
                href="mailto:info@manicurapro.com"
                className="text-background/80 hover:text-primary transition-colors"
              >
                Email
              </a>
              <a 
                href="#"
                className="text-background/80 hover:text-primary transition-colors"
              >
                Términos y Condiciones
              </a>
              <a 
                href="#"
                className="text-background/80 hover:text-primary transition-colors"
              >
                Política de Privacidad
              </a>
            </div>
            <div className="border-t border-background/20 pt-6">
              <p className="text-background/60 text-sm">
                © 2024 Manicura Pro. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
