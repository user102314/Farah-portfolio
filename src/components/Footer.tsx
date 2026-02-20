const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-card">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <span className="text-sm text-muted-foreground">&copy; 2026 Brand. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
