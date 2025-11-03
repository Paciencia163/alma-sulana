import { Target, Heart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import samakakaPattern from "@/assets/samakaka-pattern.jpg";

const Sobre = () => {
  const values = [
    {
      icon: Heart,
      title: "Autenticidade",
      description: "Celebramos a verdadeira essência da cultura africana através do padrão Samakaka",
    },
    {
      icon: Sparkles,
      title: "Excelência",
      description: "Cada produto é cuidadosamente criado para atender os mais altos padrões de qualidade",
    },
    {
      icon: Target,
      title: "Conexão",
      description: "Criamos pontes entre empresas e a rica herança cultural africana",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Sobre a Alma Sulana
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Onde a elegância africana encontra a sofisticação corporativa
            </p>
          </div>
        </section>

        {/* Nossa História */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Nossa História
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    A Alma Sulana nasceu da paixão pela cultura africana e do desejo de compartilhar 
                    a beleza do padrão Samakaka com o mundo corporativo. Nossa jornada começou com 
                    uma visão simples: transformar brindes corporativos em peças de arte cultural.
                  </p>
                  <p>
                    O nome "Alma Sulana" reflete nossa essência - a alma do sul, conectando raízes 
                    africanas com elegância contemporânea. Cada produto que criamos é uma celebração 
                    da identidade cultural e um testemunho da qualidade artesanal.
                  </p>
                  <p>
                    Hoje, servimos empresas que valorizam a autenticidade e buscam brindes que 
                    contam uma história. Nosso lema, "À raiz do seu estilo", resume nosso compromisso 
                    em ajudar marcas a expressarem sua identidade de forma única e significativa.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src={samakakaPattern} 
                  alt="Tecido Samakaka" 
                  className="rounded-xl shadow-elegant-hover w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* O Samakaka */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                O Significado do Samakaka
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O Samakaka é um tecido tradicional africano conhecido por seus padrões geométricos 
                vibrantes e cores ricas. Cada desenho carrega significados profundos, representando 
                histórias, provérbios e valores culturais transmitidos através das gerações.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Card className="border-border shadow-elegant">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    Características do Samakaka
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Padrões geométricos únicos em tons terrosos, dourados e vibrantes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Tecido de alta qualidade que representa autenticidade cultural</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Cada padrão conta uma história da rica herança africana</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Símbolo de elegância e conexão com as raízes culturais</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
              Nossos Valores
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-border shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero mb-6">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
