import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/30 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Agentic <span className="text-gradient">AI for Field Service</span>
              <br />
              plugged into your existing system
            </h1>
          </motion.div>

          <motion.a
            href="#modules"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            <span className="font-medium">Explore Renewals Smart AI</span>
          </motion.a>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="bg-card rounded-2xl shadow-elevated border border-border overflow-hidden">
            <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="ml-4 text-xs text-muted-foreground">Renewals Smart AI Dashboard</span>
            </div>
            <div className="p-6 bg-gradient-to-br from-background to-muted/30">
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-xs text-muted-foreground mb-1">Total Renewals</div>
                  <div className="text-2xl font-bold text-foreground">247</div>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-xs text-muted-foreground mb-1">High Risk</div>
                  <div className="text-2xl font-bold text-primary">23</div>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-xs text-muted-foreground mb-1">Drafts Ready</div>
                  <div className="text-2xl font-bold text-green-600">18</div>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <div className="text-xs text-muted-foreground mb-1">Renewal Rate</div>
                  <div className="text-2xl font-bold text-foreground">87%</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 bg-card rounded-lg p-4 border border-border h-32 flex items-center justify-center">
                  <div className="text-muted-foreground text-sm">Renewal Pipeline Chart</div>
                </div>
                <div className="bg-card rounded-lg p-4 border border-border h-32 flex items-center justify-center">
                  <div className="text-muted-foreground text-sm">Risk Score</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;