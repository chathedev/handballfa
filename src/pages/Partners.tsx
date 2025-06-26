import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { sponsors } from "@/data/sponsors";
import { Card } from "@/components/ui/card";

const Partners = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-handball-black mb-6 animate-fade-in-up">
              Våra <span className="text-handball-green">Partners</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up animate-delay-200">
              Vi är stolta över att samarbeta med fantastiska lokala och
              regionala företag som stödjer vår verksamhet och hjälper oss att
              utveckla handbollen i Härnösand.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <Card
                key={sponsor.id}
                className="p-6 hover:shadow-xl transition-all duration-500 group border-gray-200 hover:border-handball-green bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:scale-105 animate-scale-in opacity-0"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-square flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden group-hover:bg-handball-green-light transition-colors">
                  <img
                    src={sponsor.imageUrl}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="flex items-center justify-center h-full w-full text-gray-400">
                            <div class="text-center">
                              <div class="text-sm font-medium">${sponsor.name}</div>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-handball-green/90 to-handball-green backdrop-blur-sm animate-fade-in-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Vill du stödja Härnösands HF?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Vi välkomnar nya partners som vill stödja vår verksamhet och bidra
            till utvecklingen av handbollen i regionen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@harnosandshf.se"
              className="bg-white text-handball-green hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Kontakta oss
            </a>
            <a
              href="/kontakt"
              className="border-2 border-white text-white hover:bg-white hover:text-handball-green font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Mer information
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
