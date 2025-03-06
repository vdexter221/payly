import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Book, FileText, Video, MessageSquare } from "lucide-react";

const resources = [
  {
    title: "Documentation",
    description: "Comprehensive guides and API references",
    icon: Book,
    items: [
      "API Documentation",
      "Integration Guides",
      "Best Practices",
    ],
  },
  {
    title: "Tutorials",
    description: "Step-by-step video tutorials and demos",
    icon: Video,
    items: [
      "Getting Started",
      "Advanced Features",
      "Use Cases",
    ],
  },
  {
    title: "Blog",
    description: "Latest updates and industry insights",
    icon: FileText,
    items: [
      "Product Updates",
      "Industry Trends",
      "Success Stories",
    ],
  },
  {
    title: "Support",
    description: "Get help from our expert support team",
    icon: MessageSquare,
    items: [
      "24/7 Support",
      "Community Forum",
      "FAQ",
    ],
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Resources</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed with Payly.lat's payment solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <resource.icon className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-semibold">{resource.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{resource.description}</p>
                  <ul className="space-y-2 mb-6">
                    {resource.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Explore {resource.title}</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
