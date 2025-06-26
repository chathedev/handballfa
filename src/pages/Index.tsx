import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SponsorCarousel } from "@/components/SponsorCarousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { teamData } from "@/data/teams";
import {
  MapPin,
  Target,
  Heart,
  Users,
  TrendingUp,
  Calendar,
  Trophy,
  Clock,
  ArrowRight,
  Ticket,
  Star,
  Zap,
  Award,
} from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState<{
    [key: string]: boolean;
  }>({});

  const heroRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const aboutRef = useScrollAnimation();
  const quickLinksRef = useScrollAnimation();

  const totalTeams = teamData.reduce(
    (sum, category) => sum + category.teams.length,
    0,
  );

  useEffect(() => {
    setIsVisible(true);

    // Staggered section animations
    const timeouts = [
      setTimeout(
        () => setSectionsVisible((prev) => ({ ...prev, hero: true })),
        100,
      ),
      setTimeout(
        () => setSectionsVisible((prev) => ({ ...prev, quickLinks: true })),
        600,
      ),
      setTimeout(
        () => setSectionsVisible((prev) => ({ ...prev, main: true })),
        1000,
      ),
      setTimeout(
        () => setSectionsVisible((prev) => ({ ...prev, sponsors: true })),
        1400,
      ),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://az316141.cdn.laget.se/2317159/11348130.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-handball-black/90 via-handball-orange/20 to-handball-black/90" />
        </div>
        <div
          ref={heroRef.ref}
          className={`relative z-10 text-center text-white max-w-7xl mx-auto px-6 transition-all duration-1000 ${
            heroRef.isVisible
              ? "animate-fade-in-up"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-12 animate-delay-100">
            <img
              src="https://az729104.cdn.laget.se/emblem_11226722.png;width=480;height=480;paddingWidth=16;mode=pad;scale=both;anchor=middlecenter"
              alt="Härnösands HF"
              className="h-32 w-32 mx-auto mb-8 drop-shadow-2xl hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h1 className="text-mega mb-8 leading-none tracking-wide animate-delay-200">
            <span className="block text-white drop-shadow-2xl leading-none">
              LAGET
            </span>
            <span className="block bg-gradient-to-r from-handball-green via-handball-orange to-handball-green bg-clip-text text-transparent drop-shadow-2xl leading-none">
              FÖRE ALLT
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto animate-delay-300">
            Härnösands HF - En handbollsklubb med stolthet, gemenskap och
            passion för sporten
          </p>
          <div className="flex gap-6 justify-center animate-delay-400">
            <Button
              size="lg"
              className="bg-handball-orange hover:bg-handball-orange/90 text-white font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/teams">
                <Users className="mr-2 h-5 w-5" />
                Våra {totalTeams} Lag
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-handball-black font-bold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/arena">
                <MapPin className="mr-2 h-5 w-5" />
                Besök Arenan
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-bounce-slow">
          <div className="w-4 h-4 bg-handball-orange rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce-slow animate-delay-200">
          <div className="w-6 h-6 bg-handball-green rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce-slow animate-delay-400">
          <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
        </div>
      </section>

      {/* Team Statistics Bar */}
      <section
        ref={statsRef.ref}
        className={`py-16 bg-gradient-to-r from-handball-green via-handball-orange to-handball-green transition-all duration-1000 ${
          statsRef.isVisible
            ? "animate-slide-in-right"
            : "opacity-0 translate-x-10"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white max-w-6xl mx-auto">
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-white/20 rounded-full">
                  <Users className="h-8 w-8" />
                </div>
              </div>
              <div className="text-4xl font-black mb-2">{totalTeams}</div>
              <div className="text-lg font-medium opacity-90">Totalt Lag</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-white/20 rounded-full">
                  <Trophy className="h-8 w-8" />
                </div>
              </div>
              <div className="text-4xl font-black mb-2">
                {teamData[0].teams.length}
              </div>
              <div className="text-lg font-medium opacity-90">A-lag</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-white/20 rounded-full">
                  <Star className="h-8 w-8" />
                </div>
              </div>
              <div className="text-4xl font-black mb-2">
                {teamData[1].teams.length}
              </div>
              <div className="text-lg font-medium opacity-90">Ungdomslag</div>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 bg-white/20 rounded-full">
                  <Award className="h-8 w-8" />
                </div>
              </div>
              <div className="text-4xl font-black mb-2">50+</div>
              <div className="text-lg font-medium opacity-90">
                År av Historia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section
        ref={quickLinksRef.ref}
        className={`py-12 bg-gradient-to-r from-handball-orange-light via-white to-handball-green-light border-b border-handball-orange/20 transition-all duration-1000 ${
          quickLinksRef.isVisible
            ? "animate-fade-in-up"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
            <div
              className="group cursor-pointer hover:transform hover:scale-105 transition-all duration-300 py-6 px-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl border border-handball-orange/20"
              onClick={() =>
                window.open(
                  "https://www.laget.se/HarnosandsHF/Event/Month",
                  "_blank",
                )
              }
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-handball-orange/10 rounded-full">
                  <Calendar className="h-8 w-8 text-handball-orange" />
                </div>
              </div>
              <h3 className="text-lg font-black text-handball-orange mb-2 tracking-wide">
                KOMMANDE MATCHER
              </h3>
              <p className="text-sm text-gray-600 font-medium">
                Se våra kommande matcher och evenemang
              </p>
            </div>
            <div
              className="group cursor-pointer hover:transform hover:scale-105 transition-all duration-300 py-6 px-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl border border-handball-green/20"
              onClick={() =>
                window.open("https://www.laget.se/HHK-dam-utv", "_blank")
              }
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-handball-green/10 rounded-full">
                  <Trophy className="h-8 w-8 text-handball-green" />
                </div>
              </div>
              <h3 className="text-lg font-black text-handball-green mb-2 tracking-wide">
                HANDBOLLSLIGAN DAM
              </h3>
              <p className="text-sm text-gray-600 font-medium">
                Följ vårt A-lag Dam i Handbollsligan
              </p>
            </div>
            <div
              className="group cursor-pointer hover:transform hover:scale-105 transition-all duration-300 py-6 px-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl border border-handball-orange/20"
              onClick={() =>
                window.open("https://www.laget.se/HarnosandsHFHerr", "_blank")
              }
            >
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-handball-orange/10 rounded-full">
                  <Zap className="h-8 w-8 text-handball-orange" />
                </div>
              </div>
              <h3 className="text-lg font-black text-handball-orange mb-2 tracking-wide">
                SVENSKA CUPEN 25/26
              </h3>
              <p className="text-sm text-gray-600 font-medium">
                Följ vårt A-lag Herr i Svenska Cupen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef.ref}
        className={`py-20 bg-gradient-to-br from-white via-handball-green-light to-handball-orange-light transition-all duration-1000 ${
          aboutRef.isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-ultra mb-6 text-handball-black">
                  <span className="text-handball-green">Härnösands HF</span>
                  <br />
                  <span className="text-handball-orange">Handbollsklubb</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Vi är en handbollsklubb som värnar om gemenskap, utveckling
                  och sund konkurrens. Med våra {totalTeams} lag från ungdom
                  till seniorer erbjuder vi handboll för alla åldrar och nivåer.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Vår vision är att vara den ledande handbollsklubben i regionen
                  genom att skapa en miljö där varje spelare kan utvecklas och
                  trivas.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <Card className="p-6 text-center border-handball-green/20 hover:border-handball-green transition-all duration-300 hover:shadow-lg">
                  <Heart className="h-8 w-8 text-handball-green mx-auto mb-3" />
                  <h3 className="font-bold text-handball-green mb-2">
                    Passion
                  </h3>
                  <p className="text-sm text-gray-600">
                    Vi brinner för handboll
                  </p>
                </Card>
                <Card className="p-6 text-center border-handball-orange/20 hover:border-handball-orange transition-all duration-300 hover:shadow-lg">
                  <Target className="h-8 w-8 text-handball-orange mx-auto mb-3" />
                  <h3 className="font-bold text-handball-orange mb-2">
                    Utveckling
                  </h3>
                  <p className="text-sm text-gray-600">Alla kan bli bättre</p>
                </Card>
                <Card className="p-6 text-center border-handball-green/20 hover:border-handball-green transition-all duration-300 hover:shadow-lg">
                  <Users className="h-8 w-8 text-handball-green mx-auto mb-3" />
                  <h3 className="font-bold text-handball-green mb-2">
                    Gemenskap
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tillsammans är vi starka
                  </p>
                </Card>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-handball-orange hover:bg-handball-orange/90 font-bold"
                  asChild
                >
                  <Link to="/teams">
                    Våra Lag <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-handball-green text-handball-green hover:bg-handball-green hover:text-white font-bold"
                  asChild
                >
                  <Link to="/kontakt">Kontakta Oss</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://az316141.cdn.laget.se/2317159/11348130.jpg"
                  alt="Härnösands HF"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-handball-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-2xl font-black">Härnösands HF</div>
                  <div className="text-lg opacity-90">Handbollsklubb</div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-6 -right-6 bg-handball-orange text-white p-6 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-3xl font-black">{totalTeams}</div>
                <div className="text-sm font-medium">Lag Totalt</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-handball-black mb-4">
              Våra <span className="text-handball-orange">Partners</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vi är stolta över att samarbeta med lokala företag och
              organisationer som stödjer vår verksamhet.
            </p>
          </div>
          <SponsorCarousel />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
