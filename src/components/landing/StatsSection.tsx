import { motion } from "framer-motion";
import { TrendingUp, Percent, Clock } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "12%",
    label: "Increase in Renewal Rates",
    description: "Average improvement across all customers",
  },
  {
    icon: Percent,
    value: "Save A/R",
    label: "Reduce Outstanding Receivables",
    description: "Proactive renewal management",
  },
  {
    icon: Clock,
    value: "30→10 mins",
    label: "Response Time Reduction",
    description: "From manual to AI-assisted workflow",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 section-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl shadow-elevated border border-border p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center px-6 py-4"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <p className="font-semibold text-foreground mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;