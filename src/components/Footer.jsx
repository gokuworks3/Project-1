import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = 2026

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/menu', label: 'Menu' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/contact', label: 'Contact' },
  ]

  const services = [
    'Dine-in',
    'Takeaway',
    'Kerbside Pickup',
    'No-contact Delivery',
    'Catering Services',
    'Party Orders',
  ]

  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="logo__text">Demo Bistro</span>
            <span className="logo__dot">.</span>
          </Link>
          <p className="footer__tagline">
            Authentic North Indian Dhaba & Bakery<br />
            <em>"Where every meal feels like coming home"</em>
          </p>
          <div className="footer__rating">
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star'></i>
            <i className='bx bxs-star-half'></i>
            <span>4.7 Demo Rating · 1,234+ Demo Reviews</span>
          </div>
          {/* Order CTA in Footer */}
          <div className="footer__cta">
            <a href="tel:+910000000000" className="button button--primary button--sm">
              <i className='bx bx-phone-call'></i> Order: +91 00000 00000
            </a>
          </div>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.to} className="footer__link">
                  <i className='bx bx-chevron-right'></i>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Services</h3>
          <ul className="footer__links">
            {services.map((service, index) => (
              <li key={index}>
                <i className='bx bx-check'></i>
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Visit Us</h3>
          <ul className="footer__links footer__contact">
            <li>
              <i className='bx bx-map'></i>
              <div>
                <strong>Demo District, Demo Avenue</strong><br />
                Opp. Sample Landmark,<br />
                Demo City, Demo State
              </div>
            </li>
            <li>
              <i className='bx bx-phone'></i>
              <a href="tel:+910000000000">+91 00000 00000</a>
            </li>
            <li>
              <i className='bx bx-time'></i>
              <span>Open Daily · Until 11:30 PM</span>
            </li>
            <li>
              <i className='bx bx-car'></i>
              <span>Free Parking Available</span>
            </li>
          </ul>
          <a
            href="https://maps.google.com/?q=Demo+Location"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__directions"
          >
            <i className='bx bx-navigation'></i> Get Directions
          </a>
        </div>
      </div>

      <div className="footer__bottom container">
        <p className="footer__copy">
          &copy; {currentYear} Demo Bistro & Bakes. All rights reserved.
        </p>
        <p className="footer__credit">
          Crafted with <i className='bx bxs-heart'></i> in Demo City
        </p>
      </div>
    </footer>
  )
}

export default Footer
