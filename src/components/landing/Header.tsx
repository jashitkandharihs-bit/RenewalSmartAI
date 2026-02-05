import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">R</span>
          </div>
          <span className="font-bold text-xl text-foreground">
            Renewals <span className="text-gradient">Smart AI</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            How it Works
          </a>
          <a href="#integrations" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Integrations
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Pricing
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-foreground font-medium">
            Log in
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 shadow-glow">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden border-t border-border bg-background"
        >
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <a href="#features" className="text-foreground font-medium py-2">Features</a>
            <a href="#how-it-works" className="text-foreground font-medium py-2">How it Works</a>
            <a href="#integrations" className="text-foreground font-medium py-2">Integrations</a>
            <a href="#pricing" className="text-foreground font-medium py-2">Pricing</a>
            <Button className="bg-primary text-primary-foreground w-full mt-2">
              Get Started
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;