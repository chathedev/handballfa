import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

const Nyheter = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-handball-black mb-6 animate-fade-in-up">
              <span className="text-handball-green">Nyheter</span> & Händelser
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up animate-delay-200">
              Håll dig uppdaterad med vad som händer i Härnösands HF
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder news items */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card
                key={i}
                className="overflow-hidden hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:scale-105 animate-scale-in opacity-0"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-handball-green to-handball-green/80" />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      15 augusti 2024
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      Admin
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-handball-black">
                    Nyhet nummer {i}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Detta är en placeholder för nyheter som kommer att visas på
                    webbplatsen. Här kommer viktiga uppdateringar om klubben.
                  </p>
                  <button className="text-handball-green hover:text-handball-green/80 font-medium">
                    Läs mer →
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nyheter;
