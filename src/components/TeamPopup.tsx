import { useState, useRef, useEffect } from "react";
import { Users, Trophy, X } from "lucide-react";
import { teamData, TeamCategory } from "@/data/teams";
import { cn } from "@/lib/utils";

interface TeamPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TeamPopup = ({ isOpen, onClose }: TeamPopupProps) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleTeamClick = (link: string) => {
    window.open(link, "_blank");
    onClose();
  };

  const closeModal = () => {
    onClose();
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const getCategoryIcon = (categoryName: string) => {
    return categoryName === "A-lag" ? Trophy : Users;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={closeModal}
      />

      {/* Modal Content */}
      <div
        ref={modalRef}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[85vh] sm:max-h-[80vh] overflow-hidden animate-scale-in mx-auto"
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-handball-green text-white">
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6" />
            <h2 className="text-xl font-black tracking-wide">VÅRA LAG</h2>
          </div>
          <button
            onClick={closeModal}
            className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
            aria-label="Stäng"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(80vh-120px)]">
          {teamData.map((category: TeamCategory) => {
            const Icon = getCategoryIcon(category.name);
            return (
              <div
                key={category.name}
                className="border-b border-gray-100 last:border-b-0"
              >
                <div
                  className={cn(
                    "px-6 py-4 transition-all duration-300 cursor-pointer",
                    "bg-gradient-to-r from-handball-green/10 to-handball-green/5 text-handball-green font-bold text-lg flex items-center gap-3",
                    hoveredCategory === category.name &&
                      "from-handball-green/20 to-handball-green/10",
                  )}
                  onMouseEnter={() => setHoveredCategory(category.name)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <Icon className="h-5 w-5" />
                  {category.name}
                  <span className="ml-auto text-sm bg-handball-green/20 text-handball-green px-3 py-1 rounded-full font-medium">
                    {category.teams.length}
                  </span>
                </div>
                <div className="pb-2">
                  {category.teams.map((team) => (
                    <button
                      key={team.name}
                      onClick={() => handleTeamClick(team.link)}
                      className={cn(
                        "block w-full text-left px-6 py-3 text-gray-700 transition-all duration-200 text-base relative group border-l-4 border-transparent",
                        "hover:bg-handball-green-light hover:text-handball-green hover:border-handball-green hover:pl-8",
                      )}
                    >
                      <span className="relative z-10">{team.name}</span>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="w-2 h-2 bg-handball-green rounded-full" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-handball-green rounded-full" />
            <span>Klicka på ett lag för att besöka deras sida</span>
          </div>
        </div>
      </div>
    </div>
  );
};
