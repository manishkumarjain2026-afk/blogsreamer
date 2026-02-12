import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background mt-12">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="text-xl font-black tracking-tight text-primary">
              Blog<span className="text-foreground">streamer</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Your gateway to insightful articles, trending topics, and stories that matter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link to="/categories" className="text-muted-foreground hover:text-foreground transition-colors">Categories</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@blogstreamer.com</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 rounded-lg bg-muted/50 p-4">
          <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-foreground">Disclaimer</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            The content on Blogstreamer is for informational and entertainment purposes only. We do not guarantee the accuracy, completeness, or reliability of any information published on this website. Any action you take based on the information found on this website is strictly at your own risk. Blogstreamer will not be liable for any losses or damages in connection with the use of our website. External links on this site may lead to third-party websites that are not under our control.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Blogstreamer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
