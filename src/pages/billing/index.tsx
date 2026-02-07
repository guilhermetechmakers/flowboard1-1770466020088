import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Bot } from "lucide-react";

const mockTransactions = [
  { id: "1", date: "2024-02-01", amount: "$19.00", status: "paid", description: "Pro plan - February" },
  { id: "2", date: "2024-01-01", amount: "$19.00", status: "paid", description: "Pro plan - January" },
  { id: "3", date: "2023-12-01", amount: "$0.00", status: "paid", description: "Free plan" },
];

export function BillingHistoryPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-h2 font-semibold">Billing & transactions</h1>
        <p className="text-muted-foreground mt-1">
          Billing transparency and AI credit tracking
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Current plan</CardTitle>
            <CardDescription>Pro - $19/month</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <a href="/dashboard/checkout">Upgrade plan</a>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              AI credits
            </CardTitle>
            <CardDescription>2,500 of 5,000 used this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: "50%" }}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Transactions</CardTitle>
              <CardDescription>Date, amount, status, invoice link</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download CSV
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-card border border-border overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-medium">Date</th>
                  <th className="text-left p-4 font-medium">Description</th>
                  <th className="text-left p-4 font-medium">Amount</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Invoice</th>
                </tr>
              </thead>
              <tbody>
                {mockTransactions.map((t) => (
                  <tr key={t.id} className="border-t border-border hover:bg-muted/30">
                    <td className="p-4">{t.date}</td>
                    <td className="p-4">{t.description}</td>
                    <td className="p-4">{t.amount}</td>
                    <td className="p-4">
                      <Badge variant="success">{t.status}</Badge>
                    </td>
                    <td className="p-4">
                      <Button variant="link" size="sm" className="p-0 h-auto">
                        Download
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
