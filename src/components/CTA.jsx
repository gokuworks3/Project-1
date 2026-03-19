import heroImg from '../assets/images/hero_bg_dhaba.png'

function CTA() {
  return (
    <section className="cta section" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="cta__bg"></div>
      <div className="container">
        <div className="cta__content" data-animate="fade-up">
          <span className="cta__tagline">Ready to Dine?</span>
          <h2 className="cta__title">Craving Delicious North Indian Food?</h2>
          <p className="cta__description">
            Join us at Haryana Dhaba & Bakes for an unforgettable dining experience.
            Whether it's a quick lunch, family dinner, or celebration — we're here to serve you.
          </p>
          <div className="cta__buttons">
            <a href="tel:+919894511100" className="button button--primary button--large">
              <i className='bx bx-phone-call'></i> Call Now: +91 98945 11100
            </a>
            <a
              href="https://maps.app.goo.gl/ro2cT5s9u6LZu9eY8"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--secondary button--large"
            >
              <i className='bx bx-map-pin'></i> Get Directions
            </a>
          </div>
          <div className="cta__info">
            <span><i className='bx bx-time'></i> Open Daily until 11:30 PM</span>
            <span><i className='bx bx-calendar'></i> Reservations Recommended for Lunch</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
