import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import heroImg from '../assets/images/hero_bg_dhaba.png'

function HomePage() {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date()
      const hours = now.getHours() + now.getMinutes() / 60
      // Open from 11:00 AM to 11:30 PM
      setIsOpen(hours >= 11 && hours < 23.5)
    }
    checkOpenStatus()
    const interval = setInterval(checkOpenStatus, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="home" id="home" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="home__bg-overlay"></div>

        {/* Decorative Elements */}
        <div className="home__decoration home__decoration--1"></div>
        <div className="home__decoration home__decoration--2"></div>

        <div className="home__container container">
          <div className="home__data" data-animate="fade-up">
            {/* Enhanced Trust Badge */}
            <div className="home__trust-strip">
              <div className="home__google-badge">
                <svg className="home__google-icon" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div className="home__rating">
                  <div className="home__stars">
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                  </div>
                  <span className="home__rating-text"><strong>4.2</strong> Rating</span>
                </div>
              </div>
              <span className="home__badge-divider"></span>
              <span className="home__customers"><strong>2,400+</strong> Happy Customers</span>
            </div>

            {/* Emotional Headline */}
            <h1 className="home__title">
              The Taste of <span className="home__title-accent">Home</span>,<br className="home__title-break" />
              Right Here in Coimbatore
            </h1>

            {/* Clear Value Proposition */}
            <p className="home__description">
              Authentic Haryanvi & Punjabi flavours — smoky tandoori, melt-in-mouth kebabs,
              and fresh naans — served in a peaceful green oasis.
              <em className="home__em">Comfort food, crafted with love.</em>
            </p>

            {/* Flipped CTA Hierarchy - Order First */}
            <div className="home__buttons">
              <a href="tel:+919894511100" className="button button--primary button--glow">
                <i className='bx bx-phone-call'></i> Order Now
              </a>
              <Link to="/menu" className="button button--secondary">
                <i className='bx bx-restaurant'></i> View Our Menu
              </Link>
            </div>

            {/* Quick Info with Live Status */}
            <div className="home__info">
              <div className={`home__info-item home__info-item--live ${isOpen ? 'is-open' : 'is-closed'}`}>
                <span className="home__live-dot"></span>
                <span>{isOpen ? 'Open Now' : 'Closed'} · Until 11:30 PM</span>
              </div>
              <div className="home__info-item">
                <i className='bx bx-rupee'></i>
                <span>₹200-400 per person</span>
              </div>
              <div className="home__info-item">
                <i className='bx bx-car'></i>
                <span>Free Parking</span>
              </div>
            </div>

            {/* Social Proof Trigger */}
            <div className="home__social-proof">
              <i className='bx bx-group'></i>
              <span>Trusted by families across Coimbatore since 2014</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="home__scroll">
          <a href="#services" className="home__scroll-link">
            <i className='bx bx-chevron-down bx-fade-down'></i>
          </a>
        </div>
      </section>

      {/* Services Strip */}
      <section className="services-strip" id="services">
        <div className="services-strip__container container">
          {[
            { icon: 'bx-dish', label: 'Dine-in', sub: 'Indoor & Garden' },
            { icon: 'bx-package', label: 'Takeaway', sub: 'Ready in 15 min' },
            { icon: 'bx-car', label: 'Kerbside', sub: 'We bring it out' },
            { icon: 'bx-cycling', label: 'Delivery', sub: 'No-contact' },
            { icon: 'bx-calendar-check', label: 'Reserve', sub: 'Book a Table' },
            { icon: 'bx-party', label: 'Catering', sub: '50-500 pax' },
          ].map((service, index) => (
            <div className="service-badge" key={index}>
              <i className={`bx ${service.icon}`}></i>
              <div className="service-badge__text">
                <span className="service-badge__label">{service.label}</span>
                <span className="service-badge__sub">{service.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick About Preview */}
      <section className="section home-preview">
        <div className="container">
          <div className="preview-grid">
            <div className="preview-card" data-animate="fade-up">
              <div className="preview-card__icon">
                <i className='bx bx-restaurant'></i>
              </div>
              <h3>Authentic Taste</h3>
              <p>Traditional recipes from Haryana & Punjab, crafted by expert chefs with 10+ years of experience.</p>
              <Link to="/about" className="preview-card__link">
                Our Story <i className='bx bx-right-arrow-alt'></i>
              </Link>
            </div>

            <div className="preview-card" data-animate="fade-up" data-delay="100">
              <div className="preview-card__icon">
                <i className='bx bx-bowl-hot'></i>
              </div>
              <h3>60+ Dishes</h3>
              <p>Tandoori, kebabs, curries, biryani, fresh breads, juices, and bakery delights.</p>
              <Link to="/menu" className="preview-card__link">
                Explore Menu <i className='bx bx-right-arrow-alt'></i>
              </Link>
            </div>

            <div className="preview-card" data-animate="fade-up" data-delay="200">
              <div className="preview-card__icon preview-card__icon--gold">
                <i className='bx bxs-star'></i>
              </div>
              <h3>4.2★ Rated</h3>
              <p>Loved by 2,400+ happy customers. See why they keep coming back.</p>
              <Link to="/reviews" className="preview-card__link">
                Read Reviews <i className='bx bx-right-arrow-alt'></i>
              </Link>
            </div>

            <div className="preview-card" data-animate="fade-up" data-delay="300">
              <div className="preview-card__icon">
                <i className='bx bx-map'></i>
              </div>
              <h3>Easy to Find</h3>
              <p>L&T Bypass, Kulathur — with free parking & peaceful green outdoor seating.</p>
              <Link to="/contact" className="preview-card__link">
                Get Directions <i className='bx bx-right-arrow-alt'></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta section" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="cta__bg"></div>
        <div className="container">
          <div className="cta__content" data-animate="fade-up">
            <span className="cta__tagline">Hungry?</span>
            <h2 className="cta__title">Your Next Favourite Meal is One Call Away</h2>
            <p className="cta__description">
              Skip the wait. Order now for dine-in, takeaway, or delivery.
            </p>
            <div className="cta__buttons">
              <a href="tel:+919894511100" className="button button--primary button--large button--glow">
                <i className='bx bx-phone-call'></i> Call Now: +91 98945 11100
              </a>
              <a
                href="https://wa.me/919894511100?text=Hi!%20I'd%20like%20to%20place%20an%20order%20from%20Haryana%20Dhaba"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--whatsapp button--large"
              >
                <i className='bx bxl-whatsapp'></i> WhatsApp Order
              </a>
            </div>
            <Link to="/contact" className="cta__link">
              <i className='bx bx-map-pin'></i> Or visit us at L&T Bypass, Kulathur
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
