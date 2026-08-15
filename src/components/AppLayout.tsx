import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-slate-100 p-8 min-h-screen">
        {children}
      </main>
    </div>
  );
}