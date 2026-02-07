import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

export function ServerErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      <div className="text-center max-w-md animate-fade-in-up">
        <div className="h-16 w-16 rounded-full bg-destructive/20 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="h-8 w-8 text-destructive" />
        </div>
        <h1 className="text-h2 font-semibold mb-2">Something went wrong</h1>
        <p className="text-muted-foreground mb-8">
          We&apos;re sorry, but something went wrong on our end. Please try again later.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => window.location.reload()}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Try again
          </Button>
          <Link to="/">
            <Button variant="outline" className="w-full sm:w-auto">
              <Home className="h-4 w-4 mr-2" />
              Back to home
            </Button>
          </Link>
        </div>
        <p className="text-sm text-muted-foreground mt-8">
          If the problem persists, please{" "}
          <a href="/about" className="text-primary hover:underline">contact support</a>.
        </p>
      </div>
    </div>
  );
}
