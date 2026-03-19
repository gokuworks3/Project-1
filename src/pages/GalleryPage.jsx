import { Link } from 'react-router-dom'
import heroImg from '../assets/images/hero_bg_dhaba.png'
import tandooriImg from '../assets/images/tandoori_chicken.png'
import aboutImg from '../assets/images/about_food_close.png'
import kebabImg from '../assets/images/azam_nizam_kebab.png'
import naanImg from '../assets/images/naan_roti_breads.png'

function GalleryPage() {
  const galleryImages = [
    { src: heroImg, alt: 'Restaurant Ambience', category: 'ambience' },
    { src: tandooriImg, alt: 'Tandoori Chicken', category: 'food' },
    { src: aboutImg, alt: 'Food Close-up', category: 'food' },
    { src: kebabImg, alt: 'Azam Nizam Kebab', category: 'food' },
    { src: naanImg, alt: 'Fresh Breads', category: 'food' },
    { src: heroImg, alt: 'Outdoor Seating', category: 'ambience' },
    { src: tandooriImg, alt: 'Tandoori Specials', category: 'food' },
    { src: kebabImg, alt: 'Signature Kebabs', category: 'food' },
  ]

  return (
    <>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="page-header__overlay"></div>
        <div className="container">
          <div className="page-header__content">
            <h1 className="page-header__title">Gallery</h1>
            <p className="page-header__subtitle">A Visual Feast of Our Food & Ambience</p>
            <div className="page-header__breadcrumb">
              <Link to="/">Home</Link>
              <i className='bx bx-chevron-right'></i>
              <span>Gallery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-page section">
        <div className="container">
          <span className="section__subtitle">Our Space & Food</span>
          <h2 className="section__title">A Green Oasis for Food Lovers</h2>
          <p className="section__description">
            Step into our relaxing, nature-inspired space designed for memorable dining moments.
            Our dishes are as beautiful as they are delicious.
          </p>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div
                className={`gallery-item ${index === 0 ? 'gallery-item--large' : ''}`}
                key={index}
                data-animate="fade-up"
                data-delay={index * 50}
              >
                <img src={image.src} alt={image.alt} className="gallery-item__img" />
                <div className="gallery-item__overlay">
                  <span className="gallery-item__category">{image.category}</span>
                  <h3 className="gallery-item__title">{image.alt}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambience Features */}
      <section className="ambience section">
        <div className="container">
          <span className="section__subtitle">Our Ambience</span>
          <h2 className="section__title">What Makes Us Special</h2>

          <div className="ambience-grid grid">
            <div className="ambience-card" data-animate="fade-up">
              <div className="ambience-card__icon">
                <i className='bx bx-leaf'></i>
              </div>
              <h3>Green Outdoor Seating</h3>
              <p>Enjoy your meal surrounded by nature in our beautiful outdoor garden setting.</p>
            </div>

            <div className="ambience-card" data-animate="fade-up" data-delay="100">
              <div className="ambience-card__icon">
                <i className='bx bx-car'></i>
              </div>
              <h3>Ample Free Parking</h3>
              <p>Free parking lot and street parking available for all our guests.</p>
            </div>

            <div className="ambience-card" data-animate="fade-up" data-delay="200">
              <div className="ambience-card__icon">
                <i className='bx bx-group'></i>
              </div>
              <h3>Family-Friendly Space</h3>
              <p>Comfortable seating for families, groups, and celebrations of all sizes.</p>
            </div>

            <div className="ambience-card" data-animate="fade-up" data-delay="300">
              <div className="ambience-card__icon">
                <i className='bx bx-moon'></i>
              </div>
              <h3>Open Late Night</h3>
              <p>Craving late-night food? We're open until 11:30 PM daily.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="cta__bg"></div>
        <div className="container">
          <div className="cta__content" data-animate="fade-up">
            <span className="cta__tagline">Experience It Yourself</span>
            <h2 className="cta__title">Come Visit Our Beautiful Space</h2>
            <p className="cta__description">
              Pictures can't do justice to the experience. Visit us to see, smell, and taste the difference.
            </p>
            <div className="cta__buttons">
              <a href="tel:+919894511100" className="button button--primary button--large">
                <i className='bx bx-phone-call'></i> Reserve a Table
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

export default GalleryPage
