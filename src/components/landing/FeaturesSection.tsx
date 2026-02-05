import { motion } from "framer-motion";
import { 
  RefreshCw, 
  Bell, 
  Shield, 
  LineChart, 
  Users, 
  Zap 
} from "lucide-react";

const features = [
  {
    icon: RefreshCw,
    title: "Automated Renewal Tracking",
    description: "Real-time monitoring of all renewal deadlines and statuses across your entire customer base.",
  },
  {
    icon: Bell,
    title: "Proactive Notifications",
    description: "Sending reminders at the perfect time to maximize renewal rates and minimize churn.",
  },
  {
    icon: Shield,
    title: "Revenue Loss Prevention",
    description: "Get real-time insights and recommendations to protect your recurring revenue.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "AI-powered forecasting to identify at-risk renewals before they become problems.",
  },
  {
    icon: Users,
    title: "Customer Health Scores",
    description: "Comprehensive scoring system that combines usage, engagement, and satisfaction metrics.",
  },
  {
    icon: Zap,
    title: "Instant Integrations",
    description: "Connect with your existing CRM, ERP, and billing systems in minutes.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Renewals are predictable,
            <br />
            <span className="text-gradient">Until they AREN'T</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay ahead of every renewal with AI that never misses a beat
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-card hover:border-primary/20 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;