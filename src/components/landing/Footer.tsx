import { Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left side - Branding */}
          <div>
            <p className="text-primary-foreground/80 text-sm mb-1">
              A Platform by <span className="font-semibold">Helios Solutions</span>
            </p>
            <a
              href="https://www.heliossolutions.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 text-sm transition-colors"
            >
              www.heliossolutions.co
            </a>
            <p className="text-primary-foreground/60 text-xs mt-2">
              Helping companies achieve more.
            </p>
          </div>

          {/* Right side - Locations & Social */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-end gap-6">
            <div className="text-sm">
              <p className="text-primary-foreground/80 mb-1">
                <span className="font-medium">Europe :</span>{" "}
                <span className="text-primary-foreground/60">Germany | Benelux | Switzerland | Finland</span>
              </p>
              <p className="text-primary-foreground/80 mb-1">
                <span className="font-medium">United States :</span>{" "}
                <span className="text-primary-foreground/60">Seattle</span>
              </p>
              <p className="text-primary-foreground/80">
                <span className="font-medium">India :</span>{" "}
                <span className="text-primary-foreground/60">Vadodara</span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Youtube className="w-4 h-4 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-4 h-4 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-xs">
            Powered by Helios Solutions
          </p>
          <p className="text-primary-foreground/50 text-xs">
            Copyright@HeliosSolutions2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;