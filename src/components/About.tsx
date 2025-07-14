import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award, BookOpen, Video, Download } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Video className="w-8 h-8 text-primary" />,
      title: "15+ Horas de Video",
      description: "Contenido completo en alta definición con técnicas paso a paso"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Manual PDF",
      description: "Guía completa descargable con todos los fundamentos teóricos"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Certificado",
      description: "Certificado de finalización reconocido profesionalmente"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Comunidad Exclusiva",
      description: "Acceso a grupo privado con otros estudiantes y mentores"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Acceso de por Vida",
      description: "Sin límites de tiempo, estudia a tu propio ritmo"
    },
    {
      icon: <Download className="w-8 h-8 text-primary" />,
      title: "Recursos Descargables",
      description: "Plantillas, guías y herramientas para practicar"
    }
  ];

  const modules = [
    {
      title: "Fundamentos Básicos",
      topics: ["Anatomía de las uñas", "Herramientas esenciales", "Preparación del espacio de trabajo", "Higiene y seguridad"]
    },
    {
      title: "Técnicas Profesionales",
      topics: ["Limado perfecto", "Cutículas y cuidado", "Técnicas de esmaltado", "Acabados profesionales"]
    },
    {
      title: "Diseños Avanzados",
      topics: ["Nail art básico", "Decoraciones especiales", "Tendencias actuales", "Efectos especiales"]
    },
    {
      title: "Negocio y Emprendimiento",
      topics: ["Cómo iniciar tu negocio", "Precios y costos", "Marketing personal", "Atención al cliente"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Acerca del Curso
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Todo lo que necesitas para ser una
            <span className="bg-gradient-primary bg-clip-text text-transparent"> experta</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestro curso integral te llevará desde principiante hasta profesional, 
            con técnicas probadas y el apoyo de expertos en la industria.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-soft">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Course Modules */}
        <div className="bg-background rounded-3xl p-8 md:p-12 shadow-soft">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Módulos del Curso
            </h3>
            <p className="text-lg text-muted-foreground">
              Programa estructurado y progresivo para tu aprendizaje
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-semibold">{module.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;