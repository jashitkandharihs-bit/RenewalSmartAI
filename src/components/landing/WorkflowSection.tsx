import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from "lucide-react";

const WorkflowSection = () => {
  return (
    <section id="contact" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground leading-tight">
              Works with your existing system.
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient leading-tight">
              Integrate Later if you Love it.
            </h2>
            <p className="text-muted-foreground mb-8 text-base">
              See your renewal pipeline in one day
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-full shadow-glow group"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-3xl shadow-elevated border border-dashed border-border/60 p-8">
              <form className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-base"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-base"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message:"
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-base"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-5 rounded-full shadow-glow"
                >
                  Send
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;