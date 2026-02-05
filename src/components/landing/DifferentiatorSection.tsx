import { motion } from "framer-motion";
import { Cog, Wrench, Upload } from "lucide-react";

const differentiators = [
  {
    icon: Cog,
    title: "AI doesn't just answer questions–",
    highlight: "it runs the process",
    subtitle: "(with approvals)",
  },
  {
    icon: Wrench,
    title: "Built for",
    highlight: "field service renewals",
    subtitle: ", not generic CRM sequences",
  },
  {
    icon: Upload,
    title: "Designed to work",
    highlight: "Upload-first",
    subtitle: " and later integrate with ERP/FSM tools",
  },
];

const DifferentiatorSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            What makes it different? No "AI Chat". <span className="text-gradient">A Real Workflow.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border h-full hover:shadow-elevated transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.title} <span className="text-primary font-semibold">{item.highlight}</span>{item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;