import heroImg from '../assets/images/hero_bg_dhaba.png'

function Hero() {
  return (
    <section className="home" id="home" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="home__bg-overlay"></div>
      <div className="home__container container">
        <div className="home__data" data-animate="fade-up">
          {/* Trust Badge */}
          <div className="home__badge">
            <div className="home__rating">
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star-half'></i>
              <span>4.7 Demo Rating</span>
            </div>
            <div className="home__divider"></div>
            <span className="home__customers">1,234+ Happy Customers</span>
          </div>

          <h1 className="home__title">
            Authentic North Indian Flavours in the Heart of Demo City
          </h1>

          <p className="home__description">
            Delicious dhaba-style food, fresh juices, and a relaxing green ambience — all at affordable prices.
            <em>Comfort food that feels like home.</em>
          </p>

          <div className="home__buttons">
            <a href="#menu" className="button button--primary">
              <i className='bx bx-restaurant'></i> View Menu
            </a>
            <a href="tel:+910000000000" className="button button--secondary">
              <i className='bx bx-phone-call'></i> Order Now
            </a>
          </div>

          {/* Quick Info */}
          <div className="home__info">
            <div className="home__info-item">
              <i className='bx bx-time-five'></i>
              <span>Open until 11:30 PM</span>
            </div>
            <div className="home__info-item">
              <i className='bx bx-rupee'></i>
              <span>Rs. 200-400 per person</span>
            </div>
            <div className="home__info-item">
              <i className='bx bx-car'></i>
              <span>Free Parking</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="home__scroll">
        <a href="#about" className="home__scroll-link">
          <i className='bx bx-chevron-down'></i>
        </a>
      </div>
    </section>
  )
}

export default Hero
