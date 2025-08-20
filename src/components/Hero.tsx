import { Button } from "@/components/ui/button";
import { Star, Play, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-manicure.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent/15 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Logo Section */}
        <div className="flex justify-center mb-12">
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft">
            <img
              src="/logo.png" 
              alt="Logo de Manicura Pro"
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="text-sm text-muted-foreground ml-2">
                4.9/5 (1,234 estudiantes)
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              MANICURA
              <span className="bg-gradient-primary bg-clip-text text-transparent"> PRO</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
              Manicura en Casa
            </p>

            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto lg:mx-0">
              Aprende las técnicas profesionales de manicura desde la comodidad de tu hogar. 
              Domina el arte del cuidado de uñas con nuestro curso completo y detallado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
              >
                Obtener Curso Ahora
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Preview
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Acceso de por vida</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Certificado incluido</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Soporte 24/7</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <img
                src={heroImage}
                alt="Manicura profesional"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-background rounded-2xl p-4 shadow-soft">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">En vivo</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-4 shadow-soft">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">100% Práctico</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;