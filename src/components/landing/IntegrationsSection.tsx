import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const integrations = [
  { name: "NetSuite", logo: "N" },
  { name: "QuickBooks", logo: "Q" },
  { name: "Salesforce", logo: "S" },
  { name: "HubSpot", logo: "H" },
  { name: "Stripe", logo: "$" },
  { name: "Xero", logo: "X" },
];

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-foreground to-foreground/90 rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Start with Upload. Integrate when you're ready!
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Send reports don't wait on IT projects. Start with CSV files or use it for free with your existing systems.
          </p>

          {/* Integration logos */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-6 py-3 flex items-center gap-2 hover:bg-primary-foreground/20 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-foreground flex items-center justify-center text-foreground font-bold text-sm">
                  {integration.logo}
                </div>
                <span className="text-primary-foreground font-medium">{integration.name}</span>
              </motion.div>
            ))}
          </div>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow"
          >
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;