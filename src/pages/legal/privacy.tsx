import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Bot className="h-6 w-6 text-primary" />
            FlowBoard
          </Link>
          <nav className="flex items-center gap-4">
            <Link to="/login"><Button variant="ghost">Log in</Button></Link>
            <Link to="/signup"><Button>Get Started</Button></Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-hero font-semibold mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Data collection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We collect information you provide directly (name, email, organization)
                and usage data necessary to operate the service. We use cookies and
                similar technologies for authentication and analytics.
              </p>
            </CardContent>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Data retention</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We retain your data for as long as your account is active. You may
                request deletion at any time. Backup copies may persist for up to 30
                days after deletion.
              </p>
            </CardContent>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                You have the right to access, correct, export, or delete your
                personal data. Contact us at privacy@flowboard.com to exercise
                these rights.
              </p>
            </CardContent>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Data protection contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                For questions about data protection, contact: privacy@flowboard.com
              </p>
            </CardContent>
          </Card>
        </div>
        <Link to="/">
          <Button variant="outline">Back to home</Button>
        </Link>
      </div>
    </div>
  );
}
