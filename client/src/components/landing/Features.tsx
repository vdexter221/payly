
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Zap, Shield, Rocket } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <Card className="border-none shadow-md">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-primary/10 p-3 mb-4">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Powerful Features
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build modern web applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Zap}
            title="Lightning Fast"
            description="Optimized for speed and performance with modern technologies"
          />
          <FeatureCard 
            icon={Shield}
            title="Secure by Default"
            description="Built-in security features to protect your application"
          />
          <FeatureCard 
            icon={Rocket}
            title="Scalable Architecture"
            description="Designed to grow with your business needs"
          />
        </div>
      </div>
    </section>
  );
}
