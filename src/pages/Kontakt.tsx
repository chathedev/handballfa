import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, User } from "lucide-react";

const Kontakt = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-handball-black mb-6 animate-fade-in-up">
              <span className="text-handball-green">Kontakt</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up animate-delay-200">
              Har du frågor eller vill komma i kontakt med oss? Vi hjälper
              gärna!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-handball-black mb-8">
                Få kontakt med oss
              </h2>

              <div className="space-y-6">
                <Card className="p-6 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 animate-slide-in-left animate-delay-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-handball-green-light rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-handball-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-handball-black mb-2">
                        E-post
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Skicka dina frågor till oss via e-post
                      </p>
                      <a
                        href="mailto:info@harnosandshf.se"
                        className="text-handball-green hover:text-handball-green/80 font-medium"
                      >
                        info@harnosandshf.se
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 animate-slide-in-left animate-delay-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-handball-green-light rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-handball-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-handball-black mb-2">
                        Besöksadress
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Hitta oss på våra träningar
                      </p>
                      <p className="text-handball-green font-medium">
                        Öbacka Sporthall, Härnösand
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 animate-slide-in-left animate-delay-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-handball-green-light rounded-lg flex items-center justify-center">
                      <User className="h-6 w-6 text-handball-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-handball-black mb-2">
                        Styrelse
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Kontakta vår styrelse för föreningsfrågor
                      </p>
                      <p className="text-handball-green font-medium">
                        Via e-post eller på träningarna
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-handball-green-light rounded-lg">
                <h3 className="font-semibold text-handball-green mb-3">
                  Vanliga frågor
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700">
                    • <strong>Nya spelare:</strong> Kontakta oss för
                    provträningar
                  </p>
                  <p className="text-gray-700">
                    • <strong>Sponsring:</strong> E-posta för
                    partnerskapsmöjligheter
                  </p>
                  <p className="text-gray-700">
                    • <strong>Hallar:</strong> Information om våra
                    träningsanläggningar
                  </p>
                  <p className="text-gray-700">
                    • <strong>Matcher:</strong> Schema finns på lagspecifika
                    sidor
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 animate-slide-in-right animate-delay-100">
                <h3 className="text-2xl font-bold text-handball-black mb-6">
                  Skicka meddelande
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Förnamn
                      </label>
                      <Input
                        id="firstName"
                        placeholder="Ditt förnamn"
                        className="border-gray-300 focus:border-handball-green focus:ring-handball-green"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Efternamn
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Ditt efternamn"
                        className="border-gray-300 focus:border-handball-green focus:ring-handball-green"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      E-post
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="din.epost@exempel.se"
                      className="border-gray-300 focus:border-handball-green focus:ring-handball-green"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Ämne
                    </label>
                    <Input
                      id="subject"
                      placeholder="Vad gäller ditt meddelande?"
                      className="border-gray-300 focus:border-handball-green focus:ring-handball-green"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Meddelande
                    </label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Skriv ditt meddelande här..."
                      className="border-gray-300 focus:border-handball-green focus:ring-handball-green"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-handball-green hover:bg-handball-green/90 text-white"
                  >
                    Skicka meddelande
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;
