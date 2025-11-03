import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import productNotebook from "@/assets/product-notebook.jpg";
import productPen from "@/assets/product-pen.jpg";
import productBag from "@/assets/product-bag.jpg";
import productAgenda from "@/assets/product-agenda.jpg";

const Produtos = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    { id: "todos", name: "Todos" },
    { id: "escritorio", name: "Escritório" },
    { id: "acessorios", name: "Acessórios" },
    { id: "premium", name: "Premium" },
  ];

  const products = [
    {
      id: 1,
      name: "Caderno Executivo Samakaka",
      category: "escritorio",
      image: productNotebook,
      description: "Caderno de alta qualidade com capa em padrão Samakaka. Ideal para reuniões e anotações importantes.",
      features: ["Capa dura personalizada", "96 páginas pautadas", "Marca-página integrado"],
      tag: "Popular",
    },
    {
      id: 2,
      name: "Conjunto de Canetas Premium",
      category: "premium",
      image: productPen,
      description: "Set de canetas elegantes com detalhes em padrão Samakaka. Perfeitas para brindes executivos.",
      features: ["Acabamento dourado", "Estojo elegante", "Gravação personalizada"],
      tag: "Premium",
    },
    {
      id: 3,
      name: "Bolsa Corporativa Samakaka",
      category: "acessorios",
      image: productBag,
      description: "Bolsa espaçosa em tecido Samakaka autêntico. Ideal para eventos e conferências.",
      features: ["100% tecido Samakaka", "Alças reforçadas", "Compartimento interno"],
      tag: "Exclusivo",
    },
    {
      id: 4,
      name: "Agenda Empresarial",
      category: "escritorio",
      image: productAgenda,
      description: "Agenda premium com capa em padrão tradicional Samakaka. Organização com estilo.",
      features: ["Layout mensal e semanal", "Capa em couro sintético", "Elástico de fechamento"],
      tag: "Novo",
    },
    {
      id: 5,
      name: "Kit Escritório Completo",
      category: "premium",
      image: productNotebook,
      description: "Kit completo incluindo caderno, caneta e marcador, todos com padrão Samakaka.",
      features: ["3 peças coordenadas", "Embalagem gift", "Personalização incluída"],
      tag: "Kit",
    },
    {
      id: 6,
      name: "Bolsa Tote Executiva",
      category: "acessorios",
      image: productBag,
      description: "Bolsa tote versátil com design contemporâneo e padrão Samakaka.",
      features: ["Design versátil", "Grande capacidade", "Acabamento premium"],
      tag: "Tendência",
    },
  ];

  const filteredProducts = selectedCategory === "todos" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Nossos Produtos
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Brindes corporativos exclusivos com o autêntico padrão Samakaka
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border bg-background sticky top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "hero" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="capitalize"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card 
                  key={product.id} 
                  className="group overflow-hidden border-border shadow-elegant hover:shadow-elegant-hover transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    {product.tag && (
                      <Badge className="absolute top-4 right-4 bg-gradient-accent">
                        {product.tag}
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-2 text-foreground">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <p className="text-xs font-semibold text-foreground">Características:</p>
                      <ul className="space-y-1">
                        {product.features.map((feature, index) => (
                          <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button variant="hero" className="w-full">
                      Solicitar Orçamento
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Customization CTA */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Personalização Disponível
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Todos os nossos produtos podem ser personalizados com o logotipo da sua empresa. 
              Entre em contato para criar brindes únicos que representem sua marca.
            </p>
            <Button variant="hero" size="lg">
              Falar com Especialista
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Produtos;
