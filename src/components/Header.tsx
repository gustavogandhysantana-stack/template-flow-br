import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Workflow } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl transition-colors hover:text-primary">
          <Workflow className="h-6 w-6 text-primary" />
          <span>n8n Templates</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Início
          </Link>
          <Link to="/#templates" className="text-sm font-medium transition-colors hover:text-primary">
            Templates
          </Link>
          <Link to="/sobre" className="text-sm font-medium transition-colors hover:text-primary">
            Sobre
          </Link>
          <Link to="/contato" className="text-sm font-medium transition-colors hover:text-primary">
            Contato
          </Link>
        </nav>

        <Button asChild variant="accent">
          <Link to="/#templates">Meus Templates</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
