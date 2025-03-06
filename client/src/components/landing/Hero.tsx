import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-16">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Supercharge your business with{" "}
            <span className="text-primary">AI-powered</span> payment solutions
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Build stunning websites with our drag-and-drop builder and integrate secure
            payment gateways that comply with all financial regulations. Get started
            in minutes.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="h-12 px-6">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-6">
              Live Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
