import { motion } from "framer-motion";
import { Upload, BarChart3, Lightbulb, FileEdit } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "1",
    title: "Upload Data",
    description: "Drop your CSV/Excel file with renewal data",
  },
  {
    icon: BarChart3,
    number: "2",
    title: "System Analyzes",
    description: "AI identifies risk levels and opportunities",
  },
  {
    icon: Lightbulb,
    number: "3",
    title: "Renewal Insights",
    description: "Get actionable insights for each customer",
  },
  {
    icon: FileEdit,
    number: "4",
    title: "Smart Draft",
    description: "AI drafts personalized renewal emails",
  },
];

const StepsSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Try this week — <span className="text-gradient">no IT Needed</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes, not months. Our AI adapts to your workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-elevated transition-shadow duration-300 h-full text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground mb-1">{step.number}. {step.title}</div>
                <p className="text-muted-foreground text-xs">{step.description}</p>
              </div>

              {/* Connector arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 text-border">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;