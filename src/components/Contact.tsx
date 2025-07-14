import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Crown, Star, Gift, Clock, Shield } from "lucide-react";

const Contact = () => {
  const benefits = [
    "Acceso inmediato al curso completo",
    "15+ horas de video en HD",
    "Manual PDF descargable",
    "Certificado profesional",
    "Comunidad exclusiva",
    "Soporte 24/7",
    "Actualizaciones gratuitas",
    "Garantía de 30 días"
  ];

  const bonuses = [
    {
      icon: <Gift className="w-6 h-6 text-primary" />,
      title: "Kit de Herramientas Digital",
      description: "Plantillas y guías adicionales",
      value: "$49"
    },
    {
      icon: <Crown className="w-6 h-6 text-primary" />,
      title: "Masterclass Exclusiva",
      description: "Sesión en vivo con expertos",
      value: "$99"
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Diseños Premium",
      description: "50+ diseños profesionales",
      value: "$79"
    }
  ];

  const urgencyFeatures = [
    {
      icon: <Clock className="w-5 h-5 text-orange-500" />,
      text: "Oferta por tiempo limitado"
    },
    {
      icon: <Shield className="w-5 h-5 text-green-500" />,
      text: "Garantía de satisfacción"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Obtén tu Curso
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comienza tu transformación
            <span className="bg-gradient-primary bg-clip-text text-transparent"> hoy mismo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Únete a miles de estudiantes que ya han transformado su pasión por la manicura en una profesión exitosa.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Benefits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Lo que obtienes hoy:
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Bonos exclusivos:
                </h3>
                <div className="space-y-4">
                  {bonuses.map((bonus, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-background rounded-lg border border-border/50">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {bonus.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-foreground">{bonus.title}</h4>
                          <span className="text-sm text-muted-foreground line-through">{bonus.value}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{bonus.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Pricing Card */}
            <div className="lg:sticky lg:top-24">
              <Card className="border-2 border-primary/20 shadow-glow">
                <CardHeader className="text-center bg-gradient-primary text-primary-foreground rounded-t-lg">
                  <CardTitle className="text-2xl font-bold">OFERTA ESPECIAL</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Precio de lanzamiento - Solo hoy
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-3xl text-muted-foreground line-through">$297</span>
                      <span className="text-5xl font-bold text-foreground">$97</span>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6">
                      <p className="text-red-700 font-semibold">¡Ahorras $200!</p>
                      <p className="text-red-600 text-sm">Esta oferta expira en 24 horas</p>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {urgencyFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center justify-center space-x-2">
                          {feature.icon}
                          <span className="text-sm text-muted-foreground">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg py-6"
                      onClick={() => window.open('https://wa.me/1234567890?text=Hola, quiero obtener el curso MANICURA PRO', '_blank')}
                    >
                      Obtener Curso Ahora
                    </Button>
                    
                    <div className="text-center text-sm text-muted-foreground">
                      <p>Pago 100% seguro</p>
                      <p>Acceso inmediato después del pago</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/50">
                    <h4 className="font-semibold text-foreground mb-4 text-center">
                      Otras formas de contacto:
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                      >
                        WhatsApp
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => window.open('mailto:info@manicurapro.com', '_blank')}
                      >
                        Email
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;