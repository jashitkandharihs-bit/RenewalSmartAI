import { motion } from "framer-motion";
import { Users, Mail, Clock, Target } from "lucide-react";

const capabilities = [
  {
    icon: Users,
    title: "Agents, that work with you",
    description: "AI agents that collaborate with your team, not replace them",
  },
  {
    icon: Mail,
    title: "Automated Outreach",
    description: "Personalized communications sent at the perfect time",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Never miss a renewal deadline again",
  },
  {
    icon: Target,
    title: "Revenue Focused",
    description: "Every action optimized for maximum renewal rates",
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            A Renewal System your
            <br />
            <span className="text-gradient">Office Team Can Run</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Renewals Smart AI turns your renewal team into a repeatable workflow. Excel,
            drive existing systems to use at the right customers, with the right message,
            at the right time to drive sales without customization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border h-full hover:shadow-elevated hover:border-primary/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;