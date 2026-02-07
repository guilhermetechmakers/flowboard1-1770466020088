import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, LayoutGrid, Users, Plug, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function LandingPage() {
  const features = [
    {
      icon: Bot,
      title: "AI Agent",
      description: "Context-aware AI that summarizes, proposes next steps, detects gaps, and generates content for your boards.",
    },
    {
      icon: LayoutGrid,
      title: "Visual Board",
      description: "Infinite canvas for organizing ideas, research, data, and workflows as connected flowchart nodes.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Real-time presence, cursors, comments, and assignments. Work together seamlessly.",
    },
    {
      icon: Plug,
      title: "Integrations",
      description: "Connect with Google Drive, Notion, Slack, GitHub, and more to streamline your workflow.",
    },
  ];

  const tiers = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      features: ["Up to 3 boards", "2 collaborators", "Basic AI", "Export PNG"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      features: ["Unlimited boards", "Unlimited collaborators", "Advanced AI", "Full export options", "Priority support"],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: ["Everything in Pro", "SSO/SAML", "Audit logs", "Dedicated support"],
      cta: "Request Demo",
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Bot className="h-6 w-6 text-primary" />
            FlowBoard
          </Link>
          <nav className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-hero font-semibold text-foreground mb-6">
              Organize ideas. Map workflows.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Ship faster.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              FlowBoard is an AI-assisted collaborative visual board for teams to organize ideas, research, data, and workflows as connected flowchart nodes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto text-base px-8">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-base px-8">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Bento grid */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-h2 font-semibold text-center mb-4">Everything you need to visualize and collaborate</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Powerful features designed for product teams, researchers, and enterprises.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card
              key={feature.title}
              className="transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-card bg-primary/10 flex items-center justify-center mb-2">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Demo placeholder */}
      <section className="container mx-auto px-4 py-24">
        <div className="rounded-card border border-border bg-card-muted p-12 text-center">
          <LayoutGrid className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-h3 font-semibold mb-2">Live Demo</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Interactive read-only sample board. Sign up to create your own.
          </p>
          <Link to="/signup">
            <Button>Try the Demo</Button>
          </Link>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-h2 font-semibold text-center mb-4">Simple, transparent pricing</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Start free. Upgrade when you need more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                "relative transition-all duration-300 hover:shadow-card-hover",
                tier.highlighted && "ring-2 ring-primary shadow-lg"
              )}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle>{tier.name}</CardTitle>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to={tier.name === "Enterprise" ? "/" : "/signup"}>
                  <Button
                    variant={tier.highlighted ? "primary" : "outline"}
                    className="w-full"
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card-muted">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Bot className="h-6 w-6 text-primary" />
              FlowBoard
            </Link>
            <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <Link to="/terms" className="hover:text-foreground">Terms</Link>
              <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
              <a href="#" className="hover:text-foreground">Docs</a>
              <a href="#" className="hover:text-foreground">Contact</a>
            </nav>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            © {new Date().getFullYear()} FlowBoard. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
