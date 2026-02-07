import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, BookOpen, Video, Mail } from "lucide-react";

const faqs = [
  { q: "How do I create a new board?", a: "Click 'New Board' from the dashboard or use the + button in the toolbar. You can start from a blank canvas or choose a template." },
  { q: "How does the AI agent work?", a: "The AI agent analyzes your nodes and context to suggest next steps, summarize content, detect gaps, and generate new content. It runs per-project and can be configured in settings." },
  { q: "Can I collaborate in real-time?", a: "Yes. FlowBoard supports real-time presence, cursors, and concurrent editing. You'll see collaborators' avatars and cursor positions on the canvas." },
  { q: "What export formats are supported?", a: "You can export to PNG, PDF, CSV, and JSON. PNG and PDF support configurable resolution for high-quality exports." },
  { q: "How do I invite team members?", a: "Open a board and click 'Share' in the collaboration bar. You can invite by email and assign roles (viewer, editor, admin)." },
];

export function AboutHelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold">FlowBoard</Link>
          <nav className="flex items-center gap-4">
            <Link to="/login"><Button variant="ghost">Log in</Button></Link>
            <Link to="/signup"><Button>Get Started</Button></Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-hero font-semibold text-center mb-4">Help & Documentation</h1>
        <p className="text-muted-foreground text-center mb-12">
          Getting started guides, video tutorials, and support
        </p>

        <div className="space-y-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                FAQ
              </CardTitle>
              <CardDescription>Frequently asked questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent>{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Getting started
              </CardTitle>
              <CardDescription>Video tutorials and guides</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-card border border-border">
                  <Video className="h-8 w-8 text-primary mb-2" />
                  <p className="font-medium">Introduction to FlowBoard</p>
                  <p className="text-sm text-muted-foreground">5 min · Watch</p>
                </div>
                <div className="p-4 rounded-card border border-border">
                  <Video className="h-8 w-8 text-primary mb-2" />
                  <p className="font-medium">Using the AI agent</p>
                  <p className="text-sm text-muted-foreground">8 min · Watch</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Contact support
              </CardTitle>
              <CardDescription>Get help from our team</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="you@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <textarea
                    id="contact-message"
                    className="flex min-h-[120px] w-full rounded-input border border-border bg-background px-3 py-2 text-sm"
                    placeholder="Describe your issue..."
                  />
                </div>
                <Button>Send message</Button>
              </form>
              <p className="text-sm text-muted-foreground mt-4">
                Docs: <a href="#" className="text-primary hover:underline">docs.flowboard.com</a>
                {" · "}
                Status: <a href="#" className="text-primary hover:underline">status.flowboard.com</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
