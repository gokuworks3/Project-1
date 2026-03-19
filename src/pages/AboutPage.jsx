import { Link } from 'react-router-dom'
import aboutImg from '../assets/images/about_food_close.png'
import heroImg from '../assets/images/hero_bg_dhaba.png'

function AboutPage() {
  const features = [
    'Authentic Haryanvi & Punjabi Recipes',
    'Fresh, Quality Ingredients Daily',
    'Relaxing Green Outdoor Ambience',
    'Vegetarian & Non-Vegetarian Options',
    'Wheelchair Accessible Facility',
    'Family-Friendly Environment',
  ]

  const highlights = [
    {
      icon: 'bx-restaurant',
      title: 'Authentic North Indian Taste',
      description: 'Original recipes passed down through generations, cooked by expert chefs from Haryana and Punjab.',
    },
    {
      icon: 'bx-wallet',
      title: 'Affordable Pricing',
      description: 'Premium quality meals at budget-friendly prices. Rs. 200-400 per person.',
    },
    {
      icon: 'bx-leaf',
      title: 'Green Outdoor Ambience',
      description: 'Relax in our nature-inspired setting with outdoor seating, perfect for peaceful dining.',
    },
    {
      icon: 'bx-time-five',
      title: 'Quick Service',
      description: 'Freshly prepared food served hot and fast. Counter and table service available.',
    },
    {
      icon: 'bx-check-shield',
      title: 'Fresh Ingredients',
      description: 'We source fresh, quality ingredients daily to ensure every dish is healthy and delicious.',
    },
    {
      icon: 'bx-group',
      title: 'Family Friendly',
      description: 'High chairs available, kids menu options, perfect for birthday celebrations.',
    },
  ]

  return (
    <>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="page-header__overlay"></div>
        <div className="container">
          <div className="page-header__content">
            <h1 className="page-header__title">About Us</h1>
            <p className="page-header__subtitle">Our Story & What Makes Us Special</p>
            <div className="page-header__breadcrumb">
              <Link to="/">Home</Link>
              <i className='bx bx-chevron-right'></i>
              <span>About</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about section">
        <div className="about__container container grid">
          <div className="about__images" data-animate="fade-right">
            <div className="about__img-wrapper">
              <img
                src={aboutImg}
                alt="Delicious North Indian Food Close-up"
                className="about__img about__img--main"
              />
            </div>
            <div className="about__experience">
              <span className="about__experience-number">10+</span>
              <span className="about__experience-text">Years of<br />Excellence</span>
            </div>
          </div>

          <div className="about__data" data-animate="fade-left">
            <span className="section__subtitle">Our Story</span>
            <h2 className="section__title about__title">
              Bringing the Rich Taste of North India to Coimbatore
            </h2>
            <p className="about__description">
              Haryana Dhaba & Bakes brings you an authentic culinary journey filled with rich spices,
              traditional recipes, and heartwarming flavours. Every dish is crafted with fresh,
              quality ingredients by our expert chefs who pour their passion into each meal.
            </p>
            <p className="about__description">
              Nestled along the L&T Bypass, our green, nature-inspired ambience provides the perfect
              escape from the city hustle. Whether you're a family looking for a hearty meal,
              students seeking affordable options, or food lovers craving authentic North Indian
              cuisine — we welcome you home.
            </p>

            <ul className="about__features">
              {features.map((feature, index) => (
                <li key={index}>
                  <i className='bx bx-check-circle'></i>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/menu" className="button button--primary">
              Explore Our Menu <i className='bx bx-right-arrow-alt'></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features section">
        <div className="features__bg"></div>
        <div className="container">
          <span className="section__subtitle section__subtitle--light">Why Choose Us</span>
          <h2 className="section__title section__title--light">The Best Dhaba Experience in Coimbatore</h2>

          <div className="features__container grid">
            {highlights.map((feature, index) => (
              <div
                className="feature__card"
                key={index}
                data-animate="fade-up"
                data-delay={index * 100}
              >
                <div className="feature__icon">
                  <i className={`bx ${feature.icon}`}></i>
                </div>
                <h3 className="feature__title">{feature.title}</h3>
                <p className="feature__description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights section">
        <div className="container">
          <span className="section__subtitle">At a Glance</span>
          <h2 className="section__title">What We Offer</h2>

          <div className="highlights__container grid">
            <div className="highlight__group">
              <h3 className="highlight__title"><i className='bx bx-sun'></i> Popular For</h3>
              <div className="highlight__tags">
                <span>Breakfast</span>
                <span>Lunch</span>
                <span>Dinner</span>
                <span>Late-night Food</span>
                <span>Quick Bites</span>
                <span>Solo Dining</span>
              </div>
            </div>

            <div className="highlight__group">
              <h3 className="highlight__title"><i className='bx bx-star'></i> Highlights</h3>
              <div className="highlight__tags">
                <span>Great Coffee</span>
                <span>Great Dessert</span>
                <span>Great Tea Selection</span>
                <span>Vegetarian Options</span>
                <span>Healthy Options</span>
              </div>
            </div>

            <div className="highlight__group">
              <h3 className="highlight__title"><i className='bx bx-credit-card'></i> Payments</h3>
              <div className="highlight__tags">
                <span>Cash</span>
                <span>Credit Cards</span>
                <span>Debit Cards</span>
                <span>UPI</span>
                <span>NFC Payments</span>
              </div>
            </div>

            <div className="highlight__group">
              <h3 className="highlight__title"><i className='bx bx-accessibility'></i> Accessibility</h3>
              <div className="highlight__tags">
                <span>Wheelchair Accessible</span>
                <span>Accessible Parking</span>
                <span>Accessible Restroom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="cta__bg"></div>
        <div className="container">
          <div className="cta__content" data-animate="fade-up">
            <span className="cta__tagline">Visit Us Today</span>
            <h2 className="cta__title">Experience Authentic North Indian Hospitality</h2>
            <p className="cta__description">
              We're open daily until 11:30 PM. Reservations recommended for lunch.
            </p>
            <div className="cta__buttons">
              <a href="tel:+919894511100" className="button button--primary button--large">
                <i className='bx bx-phone-call'></i> Call Now
              </a>
              <Link to="/contact" className="button button--secondary button--large">
                <i className='bx bx-map-pin'></i> Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
