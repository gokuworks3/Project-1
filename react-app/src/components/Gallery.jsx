import heroImg from '../assets/images/hero_bg_dhaba.png'
import tandooriImg from '../assets/images/tandoori_chicken.png'
import aboutImg from '../assets/images/about_food_close.png'
import kebabImg from '../assets/images/azam_nizam_kebab.png'
import naanImg from '../assets/images/naan_roti_breads.png'

function Gallery() {
  const images = [
    { src: heroImg, alt: 'Restaurant Ambience', large: true },
    { src: tandooriImg, alt: 'Tandoori Chicken' },
    { src: aboutImg, alt: 'Food Close-up' },
    { src: kebabImg, alt: 'Azam Nizam Kebab' },
    { src: naanImg, alt: 'Fresh Breads' },
  ]

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <span className="section__subtitle">Our Ambience</span>
        <h2 className="section__title">A Green Oasis for Food Lovers</h2>
        <p className="section__description">
          Step into our relaxing, nature-inspired space designed for memorable dining moments
        </p>

        <div className="gallery__container">
          {images.map((image, index) => (
            <div
              className={`gallery__item ${image.large ? 'gallery__item--large' : ''}`}
              key={index}
              data-animate="fade-up"
              data-delay={index * 100}
            >
              <img src={image.src} alt={image.alt} className="gallery__img" />
              <div className="gallery__overlay">
                <span><i className='bx bx-search-alt-2'></i></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
