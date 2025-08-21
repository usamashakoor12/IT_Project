import { Menu, X, Phone } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-neutral-950/70 backdrop-blur border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight text-white">
          <span className="text-brand drop-shadow-glow">Powernest </span>LLC
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-sm text-white">
          <Link to="/" className="hover:text-brand transition">Home</Link>
          <Link to="/services" className="hover:text-brand transition">Services</Link>
          <Link to="/about" className="hover:text-brand transition">About</Link>
          <Link to="/contact" className="hover:text-brand transition">Contact</Link>
          <Link to="/privacy" className="hover:text-brand transition">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-brand transition">Terms</Link>
          
          {/* Buttons */}
          <Link 
            to="/login" 
            className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Login
          </Link>

          {/* Phone Number */}
          <a 
            href="tel:+19295412830" 
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand/20 text-brand border border-brand/30 hover:bg-brand/30 transition"
          >
            <Phone size={18} /> +19295412830
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="lg:hidden p-2 rounded-xl border border-white/10 text-white" 
          onClick={() => setOpen(!open)} 
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-neutral-950/95 backdrop-blur">
          <div className="container mx-auto py-4 px-4 grid gap-4 text-sm text-white">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link to="/privacy" onClick={() => setOpen(false)}>Privacy Policy</Link>
            <Link to="/terms" onClick={() => setOpen(false)}>Terms</Link>
            
            <Link 
              to="/login" 
              onClick={() => setLoginOpen(true)}
              className="px-4 py-2 rounded-xl border border-white/20 text-center hover:bg-white/10 transition"
            >
              Login
            </Link>

            <a 
              href="tel:+19295412830" 
              onClick={() => setOpen(false)} 
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-brand/20 text-brand border border-brand/30 hover:bg-brand/30 transition"
            >
              <Phone size={18} /> +19295412830
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
