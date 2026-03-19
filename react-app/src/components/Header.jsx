import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showPulse, setShowPulse] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 80)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Show pulse animation after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPulse(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }, [location])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = !isMenuOpen ? 'hidden' : ''
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/menu', label: 'Menu' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className={`header ${isScrolled ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <span className="logo__text">Haryana Dhaba</span>
          <span className="logo__dot">.</span>
        </Link>

        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            {navLinks.map((link, index) => (
              <li className="nav__item" key={index}>
                <Link
                  to={link.to}
                  className={`nav__link ${isActive(link.to) ? 'active-link' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav__close" onClick={closeMenu}>
            <i className='bx bx-x'></i>
          </div>
        </div>

        <div className="nav__actions">
          <a
            href="tel:+919894511100"
            className={`button button--nav ${showPulse ? 'button--glow' : ''}`}
          >
            <i className='bx bx-phone'></i> Order Now
          </a>
          <div className="nav__toggle" onClick={toggleMenu}>
            <i className='bx bx-menu'></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
