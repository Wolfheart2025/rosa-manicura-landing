import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Necesito experiencia previa para tomar este curso?",
      answer: "No, nuestro curso está diseñado para principiantes. Comenzamos desde lo más básico y avanzamos gradualmente. Solo necesitas ganas de aprender y dedicación."
    },
    {
      question: "¿Qué herramientas necesito para empezar?",
      answer: "Incluimos una lista completa de herramientas básicas en el primer módulo. Muchas de ellas las puedes encontrar en casa o conseguir fácilmente en tiendas locales. También recomendamos kits específicos para mejores resultados."
    },
    {
      question: "¿Cuánto tiempo tengo para completar el curso?",
      answer: "Tienes acceso de por vida al curso. Puedes estudiar a tu propio ritmo, repetir las lecciones cuantas veces necesites y acceder al contenido cuando quieras."
    },
    {
      question: "¿Recibiré un certificado al finalizar?",
      answer: "Sí, al completar todos los módulos y las evaluaciones prácticas, recibirás un certificado digital que podrás usar para demostrar tus habilidades profesionales."
    },
    {
      question: "¿Hay soporte si tengo dudas durante el curso?",
      answer: "Absolutamente. Tendrás acceso a nuestra comunidad exclusiva donde puedes hacer preguntas, compartir tu progreso y recibir retroalimentación de instructores y otros estudiantes."
    },
    {
      question: "¿Puedo acceder al curso desde mi teléfono?",
      answer: "Sí, el curso está optimizado para todos los dispositivos. Puedes estudiar desde tu computadora, tablet o smartphone con la misma calidad de experiencia."
    },
    {
      question: "¿Qué formas de pago aceptan?",
      answer: "Aceptamos todas las principales tarjetas de crédito y débito, PayPal, y transferencias bancarias. También ofrecemos planes de pago flexibles para mayor comodidad."
    },
    {
      question: "¿Hay garantía de devolución?",
      answer: "Sí, ofrecemos una garantía de satisfacción de 30 días. Si no estás completamente satisfecha con el curso, te devolvemos el 100% de tu dinero sin preguntas."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Preguntas Frecuentes
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Resolvemos todas tus
            <span className="bg-gradient-primary bg-clip-text text-transparent"> dudas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aquí encontrarás respuestas a las preguntas más comunes sobre nuestro curso de manicura.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-2xl px-6 hover:border-primary/20 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 shadow-soft">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Estamos aquí para ayudarte. Contáctanos y resolveremos todas tus dudas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </a>
              <a 
                href="mailto:info@manicurapro.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;