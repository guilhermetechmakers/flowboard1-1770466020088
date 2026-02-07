import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";

export function TermsOfServicePage() {
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
        <h1 className="text-hero font-semibold mb-8">Terms of Service</h1>
        <div className="prose prose-slate max-w-none">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Agreement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                By using FlowBoard, you agree to these terms. If you are using
                FlowBoard on behalf of an organization, you represent that you
                have authority to bind that organization.
              </p>
            </CardContent>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Acceptable use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                You may not use FlowBoard for illegal purposes, to harm others,
                or to violate any applicable laws. You may not attempt to gain
                unauthorized access to our systems or other users&apos; accounts.
              </p>
            </CardContent>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                FlowBoard is provided &quot;as is.&quot; We disclaim warranties and
                limit liability to the maximum extent permitted by law. We are
                not liable for indirect, incidental, or consequential damages.
              </p>
            </CardContent>
          </Card>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Versioning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We may update these terms. We will notify you of material changes.
                Continued use after changes constitutes acceptance. Archived
                versions are available upon request.
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
