import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/main-layout";
import { DashboardLayout } from "@/components/layout/dashboard-layout";

// Public pages
import { LandingPage } from "@/pages/landing";
import { LoginPage } from "@/pages/auth/login";
import { SignupPage } from "@/pages/auth/signup";
import { PasswordResetPage } from "@/pages/auth/password-reset";
import { EmailVerificationPage } from "@/pages/auth/email-verification";

// Dashboard pages
import { DashboardPage } from "@/pages/dashboard";
import { BoardPage } from "@/pages/board";
import { TemplatesPage } from "@/pages/templates";
import { ImportExportPage } from "@/pages/import-export";
import { SettingsPage } from "@/pages/settings";
import { AdminDashboardPage } from "@/pages/admin";
import { UserProfilePage } from "@/pages/profile";
import { CheckoutPage } from "@/pages/checkout";
import { BillingHistoryPage } from "@/pages/billing";
import { AboutHelpPage } from "@/pages/about-help";

// Legal pages
import { PrivacyPolicyPage } from "@/pages/legal/privacy";
import { TermsOfServicePage } from "@/pages/legal/terms";

// Error pages
import { NotFoundPage } from "@/pages/errors/404";
import { ServerErrorPage } from "@/pages/errors/500";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "password-reset", element: <PasswordResetPage /> },
      { path: "verify-email", element: <EmailVerificationPage /> },
      { path: "about", element: <AboutHelpPage /> },
      { path: "privacy", element: <PrivacyPolicyPage /> },
      { path: "terms", element: <TermsOfServicePage /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "board/:boardId", element: <BoardPage /> },
      { path: "templates", element: <TemplatesPage /> },
      { path: "import-export", element: <ImportExportPage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "admin", element: <AdminDashboardPage /> },
      { path: "profile", element: <UserProfilePage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "billing", element: <BillingHistoryPage /> },
    ],
  },
  { path: "/404", element: <NotFoundPage /> },
  { path: "/500", element: <ServerErrorPage /> },
  { path: "*", element: <Navigate to="/404" replace /> },
]);
