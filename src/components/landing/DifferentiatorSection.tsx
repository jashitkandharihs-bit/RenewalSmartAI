import { motion } from "framer-motion";
import { Bot, Workflow, Globe, Sparkles } from "lucide-react";

const differentiators = [
  {
    icon: Bot,
    title: "AI that's self-aware questions?",
    description: "Our AI understands context and asks clarifying questions when needed",
  },
  {
    icon: Workflow,
    title: "Built on FIRST PARTY DATA",
    description: "Uses your actual data, not generic models, for accurate predictions",
  },
  {
    icon: Globe,
    title: "Integrated to: well, EVERYTHING",
    description: "Native connections to NetSuite, Salesforce, and 50+ platforms",
  },
  {
    icon: Sparkles,
    title: "Learns & improves with usage",
    description: "Gets smarter over time by learning from your team's decisions",
  },
];

const DifferentiatorSection = () => {
  return (
    <section id="how-it-works" className="py-20 section-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            What makes it different? No "AI Chat".
            <br />
            <span className="text-gradient">A Real Workflow.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border text-center h-full hover:shadow-elevated transition-shadow duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;