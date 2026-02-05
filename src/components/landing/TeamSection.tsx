import { motion } from "framer-motion";
import { Bell, CheckCircle, Heart } from "lucide-react";

const benefits = [
  { icon: Bell, label: "Never miss a renewal" },
  { icon: CheckCircle, label: "Approve, don't write" },
  { icon: Heart, label: "Save your best customers first" },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
            A Renewal System your Office Team Can Run
          </h2>
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
            Renewals Copilot AI turns your renewal season into a repeatable workflow: track
            every expiring contract, focus on the right customers, and send the right message
            at the right time—without full automation.
          </p>

          {/* Benefit pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 shadow-soft"
              >
                <benefit.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{benefit.label}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-muted-foreground text-sm">
            Renew more service contracts, without chasing people in Excel.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;