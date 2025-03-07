import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <span 
                  onClick={() => window.location.href = "/features"} 
                  className="text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Features
                </span>
              </li>
              <li>
                <span 
                  onClick={() => window.location.href = "/templates"} 
                  className="text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Templates
                </span>
              </li>
              <li>
                <span 
                  onClick={() => window.location.href = "/integrations"} 
                  className="text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Integrations
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <span 
                  onClick={() => window.location.href = "/about"} 
                  className="text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  About
                </span>
              </li>
              <li>
                <span 
                  onClick={() => window.location.href = "/blog"} 
                  className="text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Blog
                </span>
              </li>
              <li>
                <span 
                  onClick={() => window.location.href = "/careers"} 
                  className="text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Careers
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <span 
                  onClick={() => window.location.href = "/docs"} 
                  className="text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Documentation
                </span>
              </li>
              <li>
                <span 
                  onClick={() => window.location.href = "/help"} 
                  className="text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Help Center
                </span>
              </li>
              <li>
                <span 
                  onClick={() => window.location.href = "/guides"} 
                  className="text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Guides
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          © 2024 Payly.lat. All rights reserved.
        </div>
      </div>
    </footer>
  );
}