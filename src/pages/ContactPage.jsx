import { Link } from 'react-router-dom'
import heroImg from '../assets/images/hero_bg_dhaba.png'

function ContactPage() {
  const contactInfo = [
    {
      icon: 'bx-map',
      title: 'Our Location',
      content: 'Demo District, Demo Avenue, Opp. Sample Landmark, Demo City, Demo State',
      link: 'https://maps.google.com/?q=Demo+Location',
      linkText: 'Get Directions',
    },
    {
      icon: 'bx-phone',
      title: 'Phone',
      content: '+91 00000 00000',
      link: 'tel:+910000000000',
      linkText: 'Call Now',
    },
    {
      icon: 'bx-time',
      title: 'Opening Hours',
      content: 'Monday - Sunday: Open until 11:30 PM',
    },
    {
      icon: 'bx-car',
      title: 'Parking',
      content: 'Free parking lot & street parking available',
    },
  ]

  const services = [
    { icon: 'bx-dish', label: 'Dine-in', description: 'Indoor & outdoor seating' },
    { icon: 'bx-package', label: 'Takeaway', description: 'Pack and go' },
    { icon: 'bx-car', label: 'Kerbside Pickup', description: 'We bring it to your car' },
    { icon: 'bx-cycling', label: 'No-contact Delivery', description: 'Safe delivery to your door' },
    { icon: 'bx-calendar-check', label: 'Reservations', description: 'Book your table in advance' },
    { icon: 'bx-party', label: 'Catering', description: 'For events & parties' },
  ]

  return (
    <>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="page-header__overlay"></div>
        <div className="container">
          <div className="page-header__content">
            <h1 className="page-header__title">Contact Us</h1>
            <p className="page-header__subtitle">Visit Us or Get in Touch</p>
            <div className="page-header__breadcrumb">
              <Link to="/">Home</Link>
              <i className='bx bx-chevron-right'></i>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-page section">
        <div className="container">
          <div className="contact-page__container grid">
            {/* Contact Cards */}
            <div className="contact-info">
              <span className="section__subtitle">Get in Touch</span>
              <h2 className="section__title contact-info__title">We'd Love to Hear From You</h2>
              <p className="contact-info__description">
                Have questions about our menu, want to make a reservation, or need directions?
                We're here to help!
              </p>

              <div className="contact-cards">
                {contactInfo.map((info, index) => (
                  <div className="contact-card" key={index} data-animate="fade-up" data-delay={index * 100}>
                    <div className="contact-card__icon">
                      <i className={`bx ${info.icon}`}></i>
                    </div>
                    <div className="contact-card__data">
                      <h3>{info.title}</h3>
                      <p>{info.content}</p>
                      {info.link && (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="contact-card__link"
                        >
                          {info.linkText} <i className='bx bx-right-arrow-alt'></i>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-buttons">
                <a href="tel:+910000000000" className="button button--primary">
                  <i className='bx bx-phone-call'></i> Call Now
                </a>
                <a
                  href="https://maps.google.com/?q=Demo+Location"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--outline"
                >
                  <i className='bx bx-navigation'></i> Navigate
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="contact-map" data-animate="fade-left">
              <iframe
                src="https://maps.google.com/maps?q=Demo+Location&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Demo Bistro & Bakes Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section">
        <div className="container">
          <span className="section__subtitle">Our Services</span>
          <h2 className="section__title">How Can We Serve You?</h2>

          <div className="services-grid grid">
            {services.map((service, index) => (
              <div className="service-card" key={index} data-animate="fade-up" data-delay={index * 100}>
                <div className="service-card__icon">
                  <i className={`bx ${service.icon}`}></i>
                </div>
                <h3>{service.label}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section className="accessibility section">
        <div className="container">
          <span className="section__subtitle">Accessibility</span>
          <h2 className="section__title">We Welcome Everyone</h2>

          <div className="accessibility-grid grid">
            <div className="accessibility-card" data-animate="fade-up">
              <i className='bx bx-handicap'></i>
              <h3>Wheelchair Accessible</h3>
              <p>Accessible entrance, seating, and restroom facilities.</p>
            </div>
            <div className="accessibility-card" data-animate="fade-up" data-delay="100">
              <i className='bx bx-car'></i>
              <h3>Accessible Parking</h3>
              <p>Designated accessible parking spaces near the entrance.</p>
            </div>
            <div className="accessibility-card" data-animate="fade-up" data-delay="200">
              <i className='bx bx-child'></i>
              <h3>Family Friendly</h3>
              <p>High chairs available. Good for kids and birthdays!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="cta__bg"></div>
        <div className="container">
          <div className="cta__content" data-animate="fade-up">
            <span className="cta__tagline">Ready to Visit?</span>
            <h2 className="cta__title">We Can't Wait to Serve You!</h2>
            <p className="cta__description">
              Open daily until 11:30 PM. Reservations recommended for lunch.
              Call now to book your table or place an order!
            </p>
            <div className="cta__buttons">
              <a href="tel:+910000000000" className="button button--primary button--large">
                <i className='bx bx-phone-call'></i> Call: +91 00000 00000
              </a>
              <Link to="/menu" className="button button--secondary button--large">
                <i className='bx bx-restaurant'></i> View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
