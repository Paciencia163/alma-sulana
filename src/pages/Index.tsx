import { ArrowRight, Sparkles, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-samakaka.jpg";
import samakakaPattern from "@/assets/samakaka-pattern.jpg";
import productNotebook from "@/assets/product-notebook.jpg";
import productPen from "@/assets/product-pen.jpg";
import productBag from "@/assets/product-bag.jpg";
import productAgenda from "@/assets/product-agenda.jpg";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Caderno Executivo Samakaka",
      image: productNotebook,
      description: "Caderno de alta qualidade com capa em padrão Samakaka",
    },
    {
      id: 2,
      name: "Conjunto de Canetas Premium",
      image: productPen,
      description: "Set de canetas elegantes com detalhes em Samakaka",
    },
    {
      id: 3,
      name: "Bolsa Corporativa",
      image: productBag,
      description: "Bolsa espaçosa em tecido Samakaka autêntico",
    },
    {
      id: 4,
      name: "Agenda Empresarial",
      image: productAgenda,
      description: "Agenda premium com capa em padrão tradicional",
    },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Elegância Africana",
      description: "Cada peça celebra a riqueza cultural do tecido Samakaka",
    },
    {
      icon: Heart,
      title: "Feito com Cuidado",
      description: "Produtos refinados que refletem qualidade e autenticidade",
    },
    {
      icon: Globe,
      title: "Conexão Cultural",
      description: "Brindes que conectam sua marca às raízes africanas",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
              À Raiz do Seu Estilo
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Brindes corporativos refinados com o autêntico padrão Samakaka. 
              Elegância africana para elevar sua marca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link to="/produtos">
                  Explorar Produtos <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
                <Link to="/contato">
                  Solicitar Orçamento
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Samakaka Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  O Padrão Samakaka
                </h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  O Samakaka é mais do que um tecido - é uma expressão da identidade cultural africana. 
                  Com seus padrões geométricos vibrantes em tons terrosos e dourados, cada peça conta 
                  uma história de tradição e autenticidade.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Na Alma Sulana, transformamos este tecido icónico em brindes corporativos sofisticados 
                  que conectam sua empresa às raízes culturais africanas, oferecendo elegância e 
                  exclusividade em cada detalhe.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/sobre">
                    Saiba Mais <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src={samakakaPattern} 
                  alt="Padrão Samakaka" 
                  className="rounded-xl shadow-elegant-hover w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
              Por Que Escolher Alma Sulana
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-border shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero mb-6">
                      <feature.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Products Preview Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Nossos Produtos
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Descubra nossa coleção exclusiva de brindes corporativos com o padrão Samakaka
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card 
                  key={product.id} 
                  className="group overflow-hidden border-border shadow-elegant hover:shadow-elegant-hover transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/produtos">
                  Ver Todos os Produtos <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
              Pronto para Elevar Sua Marca?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como nossos brindes corporativos 
              podem transformar a identidade da sua empresa.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/contato">
                Solicitar Orçamento Personalizado <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
