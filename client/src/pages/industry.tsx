import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Building2, ShoppingBag, Briefcase, GraduationCap } from "lucide-react";

const industries = [
  {
    title: "E-commerce",
    description: "Streamline your online store with integrated payment solutions",
    icon: ShoppingBag,
    benefits: [
      "Quick checkout process",
      "Shopping cart integration",
      "Inventory management",
    ],
  },
  {
    title: "Enterprise",
    description: "Scale your business with enterprise-grade payment infrastructure",
    icon: Building2,
    benefits: [
      "Custom integration",
      "Advanced reporting",
      "24/7 support",
    ],
  },
  {
    title: "Professional Services",
    description: "Manage client payments and recurring billing effortlessly",
    icon: Briefcase,
    benefits: [
      "Subscription management",
      "Invoice automation",
      "Client portal",
    ],
  },
  {
    title: "Education",
    description: "Handle student payments and course fees securely",
    icon: GraduationCap,
    benefits: [
      "Payment plans",
      "Student verification",
      "Course access management",
    ],
  },
];

export default function Industry() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Industry Solutions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tailored payment solutions for various industries, designed to meet your
            specific business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <industry.icon className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-semibold">{industry.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-primary rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
