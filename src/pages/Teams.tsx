import { useState } from "react";
import { Users, Trophy, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { teamData, TeamCategory } from "@/data/teams";
import { cn } from "@/lib/utils";

const Teams = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredTeam, setHoveredTeam] = useState<string | null>(null);

  const handleTeamClick = (link: string) => {
    window.open(link, "_blank");
  };

  const getCategoryIcon = (categoryName: string) => {
    return categoryName === "A-lag" ? Trophy : Users;
  };

  const totalTeams = teamData.reduce(
    (sum, category) => sum + category.teams.length,
    0,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-handball-white via-handball-gray to-handball-green-light">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-handball-black via-handball-green to-handball-orange">
        <div className="container mx-auto px-4">
          <div className="text-center text-white animate-fade-in-up">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-handball-orange-light hover:text-white transition-colors mb-6 group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Tillbaka till startsidan
            </Link>
            <h1 className="text-mega font-black mb-6 bg-gradient-to-r from-white via-handball-orange to-handball-green-light bg-clip-text text-transparent">
              VÅRA LAG
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Härnösands HF har{" "}
              <span className="text-handball-orange font-bold">
                {totalTeams} lag
              </span>{" "}
              från ungdom till seniorer. Klicka på ett lag för att besöka deras
              officiella sida.
            </p>
            <div className="flex items-center justify-center gap-8 text-handball-orange-light">
              <div className="text-center">
                <div className="text-3xl font-black">
                  {teamData[0].teams.length}
                </div>
                <div className="text-sm">A-lag</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-black">
                  {teamData[1].teams.length}
                </div>
                <div className="text-sm">Ungdomslag</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-black">{totalTeams}</div>
                <div className="text-sm">Totalt</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {teamData.map((category: TeamCategory, categoryIndex) => {
              const Icon = getCategoryIcon(category.name);
              return (
                <div
                  key={category.name}
                  className={cn(
                    "bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up border-2",
                    category.name === "A-lag"
                      ? "border-handball-orange"
                      : "border-handball-green",
                  )}
                  style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                >
                  {/* Category Header */}
                  <div
                    className={cn(
                      "p-8 cursor-pointer transition-all duration-300",
                      category.name === "A-lag"
                        ? "bg-gradient-to-r from-handball-orange to-handball-orange/80 text-white"
                        : "bg-gradient-to-r from-handball-green to-handball-green/80 text-white",
                      hoveredCategory === category.name &&
                        "from-handball-black to-handball-black/80",
                    )}
                    onMouseEnter={() => setHoveredCategory(category.name)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-2xl">
                        <Icon className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-black tracking-wide mb-2">
                          {category.name}
                        </h2>
                        <p className="text-white/80 text-lg">
                          {category.teams.length} lag i kategorin
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-black opacity-80">
                          {category.teams.length}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Teams Grid */}
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.teams.map((team, teamIndex) => (
                        <button
                          key={team.name}
                          onClick={() => handleTeamClick(team.link)}
                          className={cn(
                            "group relative p-6 rounded-2xl transition-all duration-300 text-left border-2 border-transparent",
                            "hover:shadow-xl hover:scale-105 hover:-translate-y-1",
                            category.name === "A-lag"
                              ? "bg-handball-orange-light hover:border-handball-orange hover:bg-white"
                              : "bg-handball-green-light hover:border-handball-green hover:bg-white",
                            hoveredTeam === team.name &&
                              "shadow-2xl scale-105 -translate-y-1",
                          )}
                          style={{
                            animationDelay: `${categoryIndex * 0.2 + teamIndex * 0.1}s`,
                          }}
                          onMouseEnter={() => setHoveredTeam(team.name)}
                          onMouseLeave={() => setHoveredTeam(null)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h3
                                className={cn(
                                  "font-bold text-lg mb-2 group-hover:text-handball-black transition-colors",
                                  category.name === "A-lag"
                                    ? "text-handball-orange"
                                    : "text-handball-green",
                                )}
                              >
                                {team.name}
                              </h3>
                              <p className="text-sm text-gray-600 group-hover:text-gray-800">
                                Besök lagets sida
                              </p>
                            </div>
                            <ExternalLink
                              className={cn(
                                "h-5 w-5 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110",
                                category.name === "A-lag"
                                  ? "text-handball-orange"
                                  : "text-handball-green",
                              )}
                            />
                          </div>

                          {/* Hover effect overlay */}
                          <div
                            className={cn(
                              "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300",
                              category.name === "A-lag"
                                ? "bg-handball-orange"
                                : "bg-handball-green",
                            )}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Teams;
