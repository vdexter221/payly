import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import PaymentDemo from "./PaymentDemo";
import { Zap, Shield, Rocket } from "lucide-react";

const features = [
  {
    title: "AI-Powered Templates",
    description: "Auto-generated designs optimized for conversion rates",
    icon: Zap,
  },
  {
    title: "Secure Payments",
    description: "PCI compliant payment processing with fraud protection",
    icon: Shield,
  },
  {
    title: "Quick Setup",
    description: "Go live with your site in minutes, not days",
    icon: Rocket,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Accept payments with confidence
            </h2>
            <div className="grid gap-6">
              {features.map((feature, i) => (
                <Card key={i}>
                  <CardContent className="p-6 flex gap-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PaymentDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
