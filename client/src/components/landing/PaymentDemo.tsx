import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function PaymentDemo() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1 px-6">
        <h3 className="text-2xl font-semibold">Checkout Demo</h3>
        <p className="text-sm text-muted-foreground">
          Home Cleaning Service - Premium Package
        </p>
      </CardHeader>
      <CardContent className="px-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Payment Method</Label>
            <RadioGroup defaultValue="card" className="grid gap-4">
              <div className="flex items-center space-x-4 rounded-md border p-4">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex-1">
                  Credit/Debit Card
                </Label>
                <div className="flex space-x-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/logos/visa.jpg"
                    alt="visa"
                    className="h-6"
                  />
                  <img
                    src="https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/logos/mastercard.jpg"
                    alt="mastercard"
                    className="h-6"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4 rounded-md border p-4">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal" className="flex-1">
                  PayPal
                </Label>
                <img
                  src="https://cdn.jsdelivr.net/gh/creativetimofficial/public-assets@master/logos/paypal.jpg"
                  alt="paypal"
                  className="h-6"
                />
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="number">Card Number</Label>
            <Input id="number" placeholder="4242 4242 4242 4242" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input id="expiry" placeholder="MM/YY" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="123" />
            </div>
          </div>

          <Button className="w-full">Pay $149.99</Button>
        </div>
      </CardContent>
    </Card>
  );
}
