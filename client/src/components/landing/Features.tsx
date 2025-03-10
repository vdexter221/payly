import { FC } from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Zap, Shield, Rocket } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <Card className="border-none shadow-md">
      <CardContent className="flex flex-col items-center text-center p-6">
        <Icon className="w-12 h-12 mb-4 text-primary" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const Features: FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Payly?</h2>
          <p className="text-xl text-muted-foreground">
            Experience the future of payments with our cutting-edge features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FeatureCard
              icon={Zap}
              title="Lightning Fast"
              description="Process payments instantly with our optimized infrastructure"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FeatureCard
              icon={Shield}
              title="Secure & Reliable"
              description="Bank-grade security with 24/7 fraud monitoring"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FeatureCard
              icon={Rocket}
              title="Easy Integration"
              description="Get started quickly with our simple API and SDKs"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
