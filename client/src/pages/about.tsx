import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Payly.lat</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building the future of digital payments in Latin America
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Payly.lat, we're revolutionizing how businesses in Latin America handle 
              payments. Our mission is to provide seamless, secure, and efficient payment 
              solutions that help businesses thrive in the digital economy.
            </p>
            <p className="text-lg text-muted-foreground">
              Founded in 2024, we combine cutting-edge technology with deep understanding 
              of local markets to deliver innovative payment solutions that meet the unique 
              needs of Latin American businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174"
              alt="Office Space"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Building2 className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Headquarters</h3>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground mt-1" />
                <address className="not-italic text-muted-foreground">
                  1234 Market Street<br />
                  Suite 500<br />
                  San Francisco, CA 94103<br />
                  United States
                </address>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <div className="flex items-center gap-2">
                <a href="mailto:contact@payly.lat" className="text-muted-foreground hover:text-primary">
                  contact@payly.lat
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">Phone</h3>
              </div>
              <div className="flex items-center gap-2">
                <a href="tel:+1-555-123-4567" className="text-muted-foreground hover:text-primary">
                  +1 (555) 123-4567
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
