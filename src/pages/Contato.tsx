import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contato = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contato@almasulana.com",
      link: "mailto:contato@almasulana.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+244 947 408 021",
      link: "tel:+244947408021",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Luanda, Angola",
      link: null,
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
              Entre em Contato
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Estamos prontos para transformar suas ideias em brindes corporativos excepcionais
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-border shadow-elegant">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">
                    Envie sua Mensagem
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo</Label>
                        <Input 
                          id="name" 
                          placeholder="Seu nome"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Empresa</Label>
                        <Input 
                          id="company" 
                          placeholder="Nome da empresa"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+258 84 123 4567"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Input 
                        id="subject" 
                        placeholder="Como podemos ajudar?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Conte-nos mais sobre seu projeto..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Enviar Mensagem <Send className="ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">
                    Informações de Contato
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Entre em contato conosco através dos canais abaixo. Nossa equipe está 
                    pronta para atendê-lo e criar soluções personalizadas para sua empresa.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-border shadow-elegant hover:shadow-elegant-hover transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center">
                            <info.icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">
                              {info.title}
                            </h3>
                            {info.link ? (
                              <a 
                                href={info.link}
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="bg-gradient-hero border-0 shadow-elegant-hover">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-primary-foreground">
                      Horário de Atendimento
                    </h3>
                    <div className="space-y-2 text-primary-foreground/90">
                      <p>Segunda a Sexta: 8h00 - 18h00</p>
                      <p>Sábado: 9h00 - 13h00</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
                Perguntas Frequentes
              </h2>
              <div className="space-y-4">
                <Card className="border-border shadow-elegant">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      Qual o pedido mínimo?
                    </h3>
                    <p className="text-muted-foreground">
                      Trabalhamos com pedidos a partir de 50 unidades, mas podemos avaliar 
                      quantidades menores dependendo do produto.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-border shadow-elegant">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      Quanto tempo leva a produção?
                    </h3>
                    <p className="text-muted-foreground">
                      O prazo varia de 15 a 30 dias úteis, dependendo da quantidade e 
                      complexidade da personalização.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-border shadow-elegant">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      É possível personalizar com nosso logo?
                    </h3>
                    <p className="text-muted-foreground">
                      Sim! Todos os nossos produtos podem ser personalizados com o logotipo 
                      da sua empresa através de diversas técnicas de impressão.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
