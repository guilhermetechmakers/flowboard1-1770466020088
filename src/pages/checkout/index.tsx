import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  { id: "monthly", name: "Monthly", price: 19, period: "/month", popular: false },
  { id: "annual", name: "Annual", price: 190, period: "/year", popular: true, savings: "Save 17%" },
];

export function CheckoutPage() {
  const [plan, setPlan] = useState("annual");

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div>
        <h1 className="text-h2 font-semibold">Checkout</h1>
        <p className="text-muted-foreground mt-1">
          Subscription purchase and upgrade
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Plan</CardTitle>
              <CardDescription>Choose monthly or annual billing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {plans.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPlan(p.id)}
                    className={cn(
                      "relative p-4 rounded-card border-2 text-left transition-all",
                      plan === p.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    {p.popular && (
                      <span className="absolute -top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded">
                        {p.savings}
                      </span>
                    )}
                    <p className="font-semibold">{p.name}</p>
                    <p className="text-2xl font-bold mt-1">
                      ${p.price}
                      <span className="text-sm font-normal text-muted-foreground">{p.period}</span>
                    </p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment</CardTitle>
              <CardDescription>Card, billing address, coupon</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Card number</Label>
                <Input placeholder="4242 4242 4242 4242" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Expiry</Label>
                  <Input placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label>CVC</Label>
                  <Input placeholder="123" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Billing address</Label>
                <Input placeholder="123 Main St, City, Country" />
              </div>
              <div className="space-y-2">
                <Label>Coupon code</Label>
                <Input placeholder="Enter coupon" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Order summary</CardTitle>
            <CardDescription>Preview & confirm</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Pro plan (annual)</span>
                <span>$190/year</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>AI credits</span>
                <span>5,000/month</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Unlimited boards</span>
                <Check className="h-4 w-4 text-accent" />
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Priority support</span>
                <Check className="h-4 w-4 text-accent" />
              </div>
            </div>
            <div className="border-t border-border pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>$190</span>
              </div>
            </div>
            <Button className="w-full">Confirm & pay</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
