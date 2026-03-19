import { Link } from 'react-router-dom'
import aboutImg from '../assets/images/about_food_close.png'

function About() {
  const features = [
    { icon: 'bxs-hot', text: 'Authentic Haryanvi & Punjabi Recipes' },
    { icon: 'bx-leaf', text: 'Fresh Ingredients, Never Frozen' },
    { icon: 'bx-wind', text: 'Peaceful Green Outdoor Seating' },
    { icon: 'bx-group', text: 'Perfect for Families & Groups' },
  ]

  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__images" data-animate="fade-right">
          <div className="about__img-wrapper">
            <img
              src={aboutImg}
              alt="Delicious North Indian Food Close-up"
              className="about__img about__img--main"
              loading="lazy"
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
            Every Dish Tells a Story
          </h2>
          <p className="about__description about__description--lead">
            Our chefs bring <strong>10+ years of tradition</strong> from the dhabas of Haryana —
            slow-cooked dals, hand-stretched naans, and tandoori that sizzles with flavour.
          </p>
          <p className="about__description">
            Nestled along the L&T Bypass, our garden seating offers an escape from the city.
            Whether you're celebrating with family, catching up with friends, or simply craving
            comfort food — <em>this isn't just a meal, it's home.</em>
          </p>

          <ul className="about__features">
            {features.map((feature, index) => (
              <li key={index}>
                <i className={`bx ${feature.icon}`}></i>
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>

          <div className="about__buttons">
            <Link to="/menu" className="button button--primary">
              Explore Our Menu <i className='bx bx-right-arrow-alt'></i>
            </Link>
            <Link to="/about" className="button button--outline">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
