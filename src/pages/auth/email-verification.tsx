import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

export function EmailVerificationPage() {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("status") !== "failed";
  const [resending, setResending] = useState(false);
  const [resent, setResent] = useState(false);

  const handleResend = async () => {
    setResending(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      setResent(true);
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 p-4">
      <Card className="w-full max-w-md animate-fade-in-up">
        <CardHeader className="text-center">
          <div
            className={`h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
              success ? "bg-accent/20" : "bg-destructive/20"
            }`}
          >
            {success ? (
              <CheckCircle className="h-8 w-8 text-accent" />
            ) : (
              <XCircle className="h-8 w-8 text-destructive" />
            )}
          </div>
          <CardTitle className="text-2xl">
            {success ? "Email verified!" : "Verification failed"}
          </CardTitle>
          <CardDescription>
            {success
              ? "Your email has been verified. You can now access your account."
              : "The verification link may have expired or is invalid."}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {success ? (
            <Link to="/dashboard">
              <Button className="w-full">Continue to Dashboard</Button>
            </Link>
          ) : (
            <>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleResend}
                disabled={resending || resent}
              >
                {resending ? "Sending..." : resent ? "Email sent!" : "Resend verification"}
              </Button>
              <Link to="/login">
                <Button variant="ghost" className="w-full">
                  Back to login
                </Button>
              </Link>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
