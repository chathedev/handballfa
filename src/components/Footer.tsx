import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-handball-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://az729104.cdn.laget.se/emblem_11226722.png;width=480;height=480;paddingWidth=16;mode=pad;scale=both;anchor=middlecenter"
                alt="Härnösands HF"
                className="h-12 w-12"
              />
              <div>
                <div className="font-bold text-xl">Härnösands HF</div>
                <div className="text-gray-400">Handbollsklubb</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Härnösands handbollsklubb skapar ett hållbart och utvecklande
              intresse för handboll genom glädje, gemenskap och ansvar.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-handball-orange">
              Kontakt
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-handball-orange mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">Öbacka Sporthall</div>
                  <a
                    href="https://maps.app.goo.gl/qn8cdXcSRW2pdJ1f6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-handball-orange transition-colors text-sm"
                  >
                    Visa på karta
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-handball-orange" />
                <a
                  href="mailto:info@harnosandshf.se"
                  className="text-gray-400 hover:text-handball-orange transition-colors"
                >
                  info@harnosandshf.se
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-handball-green">
              Snabblänkar
            </h3>
            <div className="space-y-2">
              <Link
                to="/nyheter"
                className="block text-gray-400 hover:text-handball-green transition-colors"
              >
                Nyheter
              </Link>
              <Link
                to="/arena"
                className="block text-gray-400 hover:text-handball-green transition-colors"
              >
                Arena
              </Link>
              <Link
                to="/partners"
                className="block text-gray-400 hover:text-handball-green transition-colors"
              >
                Partners
              </Link>
              <Link
                to="/kontakt"
                className="block text-gray-400 hover:text-handball-green transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Härnösands HF. Alla rättigheter
              förbehållna.
            </p>
            <div className="flex gap-6">
              <Link
                to="/integritetspolicy"
                className="text-gray-400 hover:text-handball-green transition-colors text-sm"
              >
                Integritetspolicy
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-handball-green transition-colors text-sm"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
