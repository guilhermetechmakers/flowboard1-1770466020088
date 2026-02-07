import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export function MainLayout() {
  return (
    <>
      <Outlet />
      <Toaster position="top-right" richColors closeButton />
    </>
  );
}
