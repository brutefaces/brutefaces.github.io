import { Header } from "@/components/Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="footer">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <p className="text-muted-foreground">
            Made with ❤️ for emoji lovers everywhere
          </p>
        </div>
      </footer>
    </div>
  );
};
