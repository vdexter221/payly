import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small businesses",
    features: [
      "Up to 1,000 transactions/month",
      "Basic analytics",
      "Email support",
      "Standard security features",
    ],
  },
  {
    name: "Professional",
    price: "$149",
    description: "Growing businesses with more needs",
    features: [
      "Up to 10,000 transactions/month",
      "Advanced analytics",
      "Priority support",
      "Advanced security features",
      "Custom integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Large-scale operations",
    features: [
      "Unlimited transactions",
      "Custom analytics",
      "24/7 dedicated support",
      "Enterprise security suite",
      "Custom solutions",
      "SLA guarantees",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that best fits your business needs. All plans include our
            core features with no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className={plan.popular ? "border-primary" : ""}>
                <CardHeader className="text-center pt-6">
                  {plan.popular && (
                    <div className="text-primary text-sm font-semibold mb-2">
                      Most Popular
                    </div>
                  )}
                  <h2 className="text-2xl font-semibold">{plan.name}</h2>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span>/month</span>}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-4 mb-6">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
