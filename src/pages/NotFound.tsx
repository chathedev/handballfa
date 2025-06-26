import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center pt-16">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <div className="text-8xl font-bold text-handball-green mb-4">
              404
            </div>
            <h1 className="text-3xl font-bold text-handball-black mb-4">
              Sidan hittades inte
            </h1>
            <p className="text-gray-600 mb-8">
              Den sida du letar efter existerar inte eller har flyttats.
            </p>
          </div>

          <Button
            onClick={() => (window.location.href = "/")}
            className="bg-handball-green hover:bg-handball-green/90 text-white inline-flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            Tillbaka till startsidan
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
