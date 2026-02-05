import { motion } from "framer-motion";

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-16 bg-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-foreground">
            Start with Upload. Integrate when you are ready!
          </h2>
          <p className="text-primary-foreground/70 mb-10 max-w-2xl mx-auto text-sm">
            Most teams don't want an IT project. Start with CSV/Excel in days. If the results are strong, we integrate with your ERP/FSM/QuickBooks.
          </p>

          {/* Integration logos */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-primary-foreground/80"
            >
              <span className="text-xl font-semibold">N</span>
              <span className="font-medium">NETSUITE</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-2 text-primary-foreground/80"
            >
              <span className="text-green-400 text-xl">●</span>
              <span className="font-medium">QuickBooks</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-primary-foreground/60 font-medium"
            >
              Other ERP/FSM tools
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;