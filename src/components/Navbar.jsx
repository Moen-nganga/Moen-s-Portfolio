import { useState, useEffect } from 'react'
import { personalInfo } from '../data'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClass = scrolled
    ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10'
    : 'bg-transparent'

  const AnchorLink = ({ href, className, onClick, children }) => (
    <a href={href} className={className} onClick={onClick}>{children}</a>
  )

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <AnchorLink href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-sm">
            {personalInfo.initials}
          </div>
          <span className="font-semibold text-white hidden sm:block">
            {personalInfo.name}
          </span>
        </AnchorLink>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <AnchorLink href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                {link.label}
              </AnchorLink>
            </li>
          ))}
        </ul>

        <AnchorLink
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors duration-200"
        >
          Hire Me
        </AnchorLink>

        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <AnchorLink
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </AnchorLink>
          ))}
          <AnchorLink
            href="#contact"
            className="bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </AnchorLink>
        </div>
      )}
    </nav>
  )
}