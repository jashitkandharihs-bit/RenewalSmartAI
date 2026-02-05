import { motion } from "framer-motion";
import { Shield, Brain, UserCheck } from "lucide-react";

const trustBadges = [
  { icon: Shield, label: "Tenant-isolated" },
  { icon: Brain, label: "No model training" },
  { icon: UserCheck, label: "Human approval required" },
];

const stats = [
  {
    value: "12%",
    label: "Renewal Lift",
  },
  {
    value: "Save A/B",
    label: "Customers First",
  },
  {
    value: "30→10 mins",
    label: "Admin Time Per Contract",
  },
];

const StatsSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6">
        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <badge.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;