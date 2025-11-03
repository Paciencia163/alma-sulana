import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import samakakaPattern from "@/assets/samakaka-pattern.jpg";
import heroImage from "@/assets/hero-samakaka.jpg";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "A História e Significado do Tecido Samakaka",
      excerpt: "Descubra as origens do padrão Samakaka e como ele se tornou um símbolo da cultura africana.",
      image: samakakaPattern,
      author: "Alma Sulana",
      date: "15 de Março, 2024",
      category: "Cultura",
    },
    {
      id: 2,
      title: "Como Escolher Brindes Corporativos que Impressionam",
      excerpt: "Dicas essenciais para selecionar brindes que realmente fortalecem a identidade da sua marca.",
      image: heroImage,
      author: "Alma Sulana",
      date: "10 de Março, 2024",
      category: "Negócios",
    },
    {
      id: 3,
      title: "Personalização: Transformando Brindes em Experiências",
      excerpt: "Aprenda como a personalização pode elevar seus brindes corporativos a outro nível.",
      image: heroImage,
      author: "Alma Sulana",
      date: "5 de Março, 2024",
      category: "Dicas",
    },
    {
      id: 4,
      title: "Tendências em Brindes Corporativos para 2024",
      excerpt: "Explore as últimas tendências e como incorporar elementos culturais nos seus brindes.",
      image: samakakaPattern,
      author: "Alma Sulana",
      date: "1 de Março, 2024",
      category: "Tendências",
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
              Blog & Inspiração
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Insights, histórias e dicas sobre brindes corporativos e cultura africana
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden border-border shadow-elegant-hover">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto">
                  <img 
                    src={posts[0].image} 
                    alt={posts[0].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="inline-block mb-4">
                    <span className="px-3 py-1 bg-gradient-accent text-accent-foreground text-xs font-semibold rounded-full">
                      Destaque
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">
                    {posts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {posts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{posts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{posts[0].date}</span>
                    </div>
                  </div>
                  <Button variant="hero">
                    Ler Artigo <ArrowRight className="ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-foreground">
              Artigos Recentes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(1).map((post) => (
                <Card 
                  key={post.id} 
                  className="group overflow-hidden border-border shadow-elegant hover:shadow-elegant-hover transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {post.category}
                    </span>
                    <h3 className="font-semibold text-xl mt-2 mb-3 text-foreground line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-hero border-0 shadow-elegant-hover">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
                  Fique por Dentro
                </h2>
                <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Receba dicas exclusivas, novidades e inspirações sobre brindes corporativos 
                  e cultura africana diretamente no seu email.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Seu melhor email"
                    className="flex-1 px-4 py-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
                  />
                  <Button variant="accent" size="lg">
                    Inscrever-se
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
