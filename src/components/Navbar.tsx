const Navbar = () => {
  return (
    <nav className="w-full border-b border-border bg-card">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo with F */}
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-xl font-bold text-primary-foreground">
          F
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          
          {/* Login Button */}
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;