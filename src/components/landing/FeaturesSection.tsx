import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  CalendarX,
  MessageSquareOff,
  UserX,
  KeyRound
} from "lucide-react";

const painPoints = [
  {
    icon: FileSpreadsheet,
    description: "Expiring contracts sit in spreadsheets with no clear next action",
  },
  {
    icon: CalendarX,
    description: "Follow-ups get missed during busy weeks",
  },
  {
    icon: MessageSquareOff,
    description: "Messaging is inconsistent across customers",
  },
  {
    icon: UserX,
    description: "Best customers churn quietly unless someone catches it early",
  },
  {
    icon: KeyRound,
    description: "Renewals depend on one person who knows the system",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Renewals are predictable,
              <br />
              <span className="text-gradient">Until they AREN'T</span>
            </h2>
          </motion.div>

          {/* Right side - Pain points grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-card rounded-xl p-4 shadow-soft border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;