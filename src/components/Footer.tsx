import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-2xl font-bold">Velora</span>
            </div>
            <p className="text-muted-foreground mb-4">
              AI-driven freelance agency building intelligent solutions for businesses, 
              startups, and students.
            </p>
            <div className="text-sm text-muted-foreground">
              © 2025 Velora. All rights reserved.
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">AI Chatbots</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Automation</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Analytics</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Web & Apps</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          Built with AI-first mindset. Powered by innovation.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
