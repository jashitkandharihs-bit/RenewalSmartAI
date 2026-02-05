import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

type BannerItem = {
  id: string;
  label: string;
  description: string;
  imageUrl: string;
};

const ITEMS: BannerItem[] = [
  {
    id: "projects",
    label: "Projects",
    description: "Plan campaigns, sprints, and key milestones in one place.",
    imageUrl: "/image (1).png",
  },
  {
    id: "tasks",
    label: "Tasks",
    description: "Track day-to-day work and keep owners accountable.",
    imageUrl: "/image (2).png",
  },
  {
    id: "marketing",
    label: "Marketing",
    description: "Visualize content calendars and launch timelines.",
    imageUrl: "/image (3).png",
  },
  {
    id: "design",
    label: "Design",
    description: "Collaborate on creative assets and brand guidelines.",
    imageUrl: "/image (4).png",
  },
  {
    id: "crm",
    label: "CRM",
    description: "Track leads, opportunities, and customer relationships.",
    imageUrl: "/image (5).png",
  },
  {
    id: "software",
    label: "Software",
    description: "Manage product roadmaps, releases, and bug backlogs.",
    imageUrl: "/image (6).png",
  },
];

const InteractiveBanner = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const baseImageUrl = ITEMS[0]?.imageUrl;
  const activeItem = activeId ? ITEMS.find((i) => i.id === activeId) : null;

  return (
    <section className="relative pb-20">
      <div className="container mx-auto px-4 md:px-6">

        {/* Board with overlay panel */}
        <div className="relative max-w-6xl me-auto overflow-visible">
          <div className="relative aspect-[16/8] w-full overflow-hidden rounded-[32px] bg-gradient-to-br from-primary/10 via-secondary/20 to-background shadow-2xl border border-border/70">
            <div className="absolute inset-0">
                {/* Default blurred base image */}
                {baseImageUrl && (
                  <motion.div
                    className="absolute inset-0"
                    initial={false}
                    animate={{
                      opacity: activeItem ? 0 : 1,
                      filter: "blur(12px)",
                      scale: 1,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0">
                      <img
                        src={baseImageUrl}
                        alt="Default preview"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/5 to-transparent" />
                    </div>
                  </motion.div>
                )}

                {/* Active focused image */}
                <AnimatePresence mode="wait">
                  {activeItem && (
                    <motion.div
                      key={activeItem.id}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                      }}
                      exit={{ opacity: 0, scale: 0.99, filter: "blur(8px)" }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                      <div className="absolute inset-0">
                        <img
                          src={activeItem.imageUrl}
                          alt={activeItem.label}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/5 to-transparent" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            {/* Bottom status pill */}
            <motion.div
              className="absolute bottom-4 left-4 right-4 md:left-6 md:right-6 rounded-2xl bg-background/90 backdrop-blur-md border border-border/60 px-4 py-3 flex flex-wrap items-center justify-between gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              <div className="space-y-0.5">
                <p className="text-xs font-medium text-muted-foreground">
                  Currently previewing
                </p>
                <p className="text-sm font-semibold">
                  {activeItem ? activeItem.label : "Hover an insight on the panel"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs text-muted-foreground">
                  Live renewal workspace
                </span>
              </div>
            </motion.div>
          </div>

          {/* Top-right floating buttons panel */}
          <motion.div
            className="absolute right-[-140px] top-[-100px] w-[260px] sm:w-[300px] rounded-[26px] bg-background/95 backdrop-blur-xl shadow-2xl border border-border/70 p-4 flex flex-col gap-4"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onMouseLeave={() => setActiveId(null)}
          >
         

            <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
              {ITEMS.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setActiveId(item.id)}
                    onFocus={() => setActiveId(item.id)}
                    onMouseLeave={() => setActiveId(null)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className={`flex w-full items-center justify-between rounded-2xl border px-3.5 py-3 text-left text-xs sm:text-sm shadow-sm transition-colors ${
                      isActive
                        ? "border-primary/70 bg-primary/5"
                        : "border-border/70 bg-background"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-xl text-primary ${
                          isActive ? "bg-primary/10" : "bg-secondary/60"
                        }`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      </span>
                      <span className="font-medium text-foreground">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">
                      View
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveBanner;

