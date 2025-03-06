import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const templates = [
  {
    title: "Professional Service",
    image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24",
  },
  {
    title: "E-commerce Store",
    image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93",
  },
  {
    title: "Business Portfolio",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
  },
];

export default function Templates() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            AI-Generated Templates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of professionally designed templates, 
            optimized by AI for maximum conversion rates and user engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {templates.map((template, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={template.image}
                    alt={template.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold mb-2">{template.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      Optimized for conversion
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
