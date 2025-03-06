import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Builder() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Drag & Drop Website Builder
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Build your website visually with our intuitive drag-and-drop interface.
            No coding required.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12"
              alt="Website Builder Interface"
              className="w-full h-[600px] object-cover"
            />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
