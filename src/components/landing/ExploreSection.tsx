import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, Megaphone, Users, Monitor, Laptop, Sparkles, Bot, AppWindow, Workflow } from "lucide-react";
import { useState } from "react";

const exploreOptions = [
  { id: "projects", label: "Projects & Tasks", icon: ClipboardList },
  { id: "marketing", label: "Marketing", icon: Megaphone },
  { id: "crm", label: "CRM", icon: Users },
  { id: "software", label: "Software", icon: Monitor },
  { id: "it", label: "IT", icon: Laptop },
  { id: "ai-assistant", label: "AI Assistant", icon: Sparkles },
  { id: "ai-agents", label: "AI Agents", icon: Bot },
  { id: "app-builder", label: "AI App builder", icon: AppWindow },
  { id: "workflows", label: "AI Workflows", icon: Workflow },
];

const ExploreSection = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (id: string) => {
    setSelectedOptions(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
             <div>
              <img src="/image.png" alt="Explore Dashboard" className="rounded-2xl shadow-elevated border border-border w-full" />
             </div>


            </motion.div>

            {/* Right side - Explore Options Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl shadow-elevated border border-border p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
                  What <span className="text-primary">would you like</span> to explore?
                </h2>

                {/* Options Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {exploreOptions.map((option, i) => (
                    <motion.button
                      key={option.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      onClick={() => toggleOption(option.id)}
                      className={`
                        relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200
                        ${selectedOptions.includes(option.id) 
                          ? 'border-primary bg-primary/5 shadow-md' 
                          : 'border-border bg-background hover:border-primary/50 hover:bg-secondary/50'
                        }
                      `}
                    >
                      {/* Checkbox indicator */}
                      <div className={`
                        absolute top-2 left-2 w-4 h-4 rounded border-2 flex items-center justify-center transition-all
                        ${selectedOptions.includes(option.id) 
                          ? 'border-primary bg-primary' 
                          : 'border-border'
                        }
                      `}>
                        {selectedOptions.includes(option.id) && (
                          <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      
                      <option.icon className={`w-6 h-6 mb-2 ${selectedOptions.includes(option.id) ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className={`text-xs font-medium text-center ${selectedOptions.includes(option.id) ? 'text-primary' : 'text-foreground'}`}>
                        {option.label}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg shadow-glow group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
