import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Car, Phone } from "lucide-react";

const Arena = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-handball-black mb-6 animate-fade-in-up">
              <span className="text-handball-green">Öbacka</span> Sporthall
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up animate-delay-200">
              Vår hemmaplan där vi tränar och spelar våra hemmamatcher
            </p>
          </div>
        </div>
      </section>

      {/* Arena Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-handball-black mb-6">
                Om Öbacka Sporthall
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Öbacka Sporthall är vår hemmaplan och huvudsakliga
                träningsanläggning. Här genomförs både träningar och
                hemmamatcher för alla våra lag.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 animate-scale-in opacity-0 animate-delay-100">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="h-6 w-6 text-handball-green" />
                    <h3 className="font-semibold text-handball-black">
                      Adress
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Öbacka Sporthall
                    <br />
                    Härnösand
                  </p>
                </Card>

                <Card className="p-6 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 animate-scale-in opacity-0 animate-delay-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="h-6 w-6 text-handball-green" />
                    <h3 className="font-semibold text-handball-black">
                      Öppettider
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Enligt träningsschema
                    <br />
                    Matchdagar varierar
                  </p>
                </Card>

                <Card className="p-6 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 animate-scale-in opacity-0 animate-delay-300">
                  <div className="flex items-center gap-3 mb-3">
                    <Car className="h-6 w-6 text-handball-green" />
                    <h3 className="font-semibold text-handball-black">
                      Parkering
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Gratis parkering
                    <br />
                    utanför anläggningen
                  </p>
                </Card>

                <Card className="p-6 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 animate-scale-in opacity-0 animate-delay-400">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="h-6 w-6 text-handball-green" />
                    <h3 className="font-semibold text-handball-black">
                      Kontakt
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    info@harnosandshf.se
                    <br />
                    För uthyrning & info
                  </p>
                </Card>
              </div>

              <div className="mt-8">
                <Button
                  className="bg-handball-green hover:bg-handball-green/90 text-white"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/qn8cdXcSRW2pdJ1f6",
                      "_blank",
                    )
                  }
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Visa på karta
                </Button>
              </div>
            </div>

            <div>
              <Card className="p-8 bg-handball-green-light/80 backdrop-blur-sm hover:bg-handball-green-light/90 transition-all duration-300 animate-fade-in-up animate-delay-500">
                <h3 className="text-2xl font-bold text-handball-black mb-6">
                  Besök oss
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Kom gärna och titta på våra matcher eller besök en träning
                    för att se vad vi håller på med!
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-handball-green mb-2">
                      Nästa hemmamatch
                    </h4>
                    <p className="text-gray-600">
                      Information om kommande hemmamatcher finns på våra
                      lagspecifika sidor.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-handball-green mb-2">
                      Träningsbesök
                    </h4>
                    <p className="text-gray-600">
                      Intresserad av att börja spela handboll? Kontakta oss för
                      information om provträningar.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Arena;
