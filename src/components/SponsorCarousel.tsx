import { sponsors } from "@/data/sponsors";

interface SponsorCarouselProps {
  className?: string;
}

export const SponsorCarousel = ({ className = "" }: SponsorCarouselProps) => {
  // Duplicate sponsors for seamless infinite scroll
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex animate-scroll-left pause-animation">
        {duplicatedSponsors.map((sponsor, index) => (
          <div
            key={`${sponsor.id}-${index}`}
            className="flex-shrink-0 mx-6 h-16 w-32 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <img
              src={sponsor.imageUrl}
              alt={sponsor.name}
              className="max-h-12 max-w-28 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
