import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Home
          </a>
          <a href="#modules" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Modules
          </a>
          <a href="#faqs" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            FAQs
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 shadow-glow">
            Book a Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            <a href="#" className="text-foreground font-medium py-2">Home</a>
            <a href="#modules" className="text-foreground font-medium py-2">Modules</a>
            <a href="#faqs" className="text-foreground font-medium py-2">FAQs</a>
            <a href="#contact" className="text-foreground font-medium py-2">Contact</a>
            <Button className="bg-primary text-primary-foreground w-full mt-2">
              Book a Demo
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;