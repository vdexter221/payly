import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CreditCard, Globe, Shield, Wallet } from "lucide-react";

const products = [
  {
    title: "Payment Gateway",
    description: "Accept payments globally with our secure payment processing solution",
    icon: CreditCard,
    features: ["Multi-currency support", "Fraud protection", "Real-time reporting"],
  },
  {
    title: "Global Payments",
    description: "Expand your business with international payment processing",
    icon: Globe,
    features: ["Local payment methods", "Currency conversion", "Cross-border payments"],
  },
  {
    title: "Digital Wallets",
    description: "Enable modern payment methods for your customers",
    icon: Wallet,
    features: ["Mobile payments", "QR code payments", "Contactless payments"],
  },
  {
    title: "Security Suite",
    description: "Enterprise-grade security for your payment infrastructure",
    icon: Shield,
    features: ["PCI DSS compliance", "Encryption", "Fraud detection"],
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Payment Solutions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive payment solutions designed to help your business grow and succeed
            in the digital economy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <product.icon className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-semibold">{product.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
