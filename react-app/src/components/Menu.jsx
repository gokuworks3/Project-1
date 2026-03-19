import { Link } from 'react-router-dom'
import tandooriImg from '../assets/images/tandoori_chicken.png'
import naanImg from '../assets/images/naan_roti_breads.png'
import kebabImg from '../assets/images/azam_nizam_kebab.png'

function Menu() {
  const menuItems = [
    {
      id: 1,
      name: 'Tandoori Specials',
      description: 'Juicy, smoky chicken marinated overnight in our secret spice blend, cooked in a traditional clay tandoor. The aroma alone is worth the visit.',
      price: '₹250',
      image: tandooriImg,
      tag: '🔥 Bestseller',
      tagType: 'bestseller',
      popular: true,
      tags: [
        { icon: 'bxs-hot', label: 'Spicy' },
        { icon: 'bxs-star', label: "Chef's Pick" },
      ],
    },
    {
      id: 2,
      name: 'Fresh Breads & Roti',
      description: 'Hot-off-the-tandoor Butter Naan, Garlic Naan, Cheese Kulcha, Rumali Roti — soft, fluffy, and perfectly charred.',
      price: '₹30',
      image: naanImg,
      tags: [
        { icon: 'bx-leaf', label: 'Veg Options' },
        { icon: 'bx-time-five', label: 'Made Fresh' },
      ],
    },
    {
      id: 3,
      name: 'Azam Nizam Kebabs',
      description: "Our legendary house special — tender kebabs in a secret blend of rich spices, mint, and yogurt. Melt-in-your-mouth perfection.",
      price: '₹280',
      image: kebabImg,
      tag: '👑 Signature',
      tagType: 'signature',
      tags: [{ icon: 'bxs-crown', label: 'Must Try' }],
    },
    {
      id: 4,
      name: 'Main Course Curries',
      description: 'Rich, aromatic gravies — Butter Chicken, Dal Makhani (slow-cooked overnight), Paneer Butter Masala, and Kadai specialties.',
      price: '₹180',
      gradient: 'default',
      icon: 'bx-bowl-hot',
      tag: '⭐ Popular',
      tagType: 'popular',
      tags: [
        { icon: 'bx-leaf', label: 'Veg & Non-Veg' },
      ],
    },
    {
      id: 5,
      name: 'Fresh Juices & Lassi',
      description: 'Refreshing fruit juices, creamy Mango Lassi, spiced Chaas, masala chai, and great coffee — the perfect complement to your meal.',
      price: '₹60',
      gradient: 'juice',
      icon: 'bx-coffee-togo',
      tags: [
        { icon: 'bx-heart', label: 'Healthy' },
        { icon: 'bx-droplet', label: '100% Fresh' },
      ],
    },
    {
      id: 6,
      name: 'Bakery & Desserts',
      description: 'End on a sweet note — Gulab Jamun, Rasmalai, Kheer, Kulfi, and freshly baked pastries from our in-house bakery.',
      price: '₹50',
      gradient: 'dessert',
      icon: 'bx-cake',
      tags: [
        { icon: 'bxs-star', label: 'Sweet Endings' },
      ],
    },
  ]

  return (
    <section className="menu section" id="menu">
      <div className="container">
        <span className="section__subtitle">What We're Famous For</span>
        <h2 className="section__title">Dishes Worth the Drive</h2>
        <p className="section__description">
          From the tandoor to your table — cooked fresh, never frozen
        </p>

        <div className="menu__container grid">
          {menuItems.map((item, index) => (
            <article
              className={`menu__card ${item.popular ? 'menu__card--popular' : ''}`}
              key={item.id}
              data-animate="fade-up"
              data-delay={index * 100}
            >
              <div className="menu__img-wrapper">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="menu__img" loading="lazy" />
                ) : (
                  <div className={`menu__img menu__img--gradient ${item.gradient ? `menu__img--${item.gradient}` : ''}`}>
                    <i className={`bx ${item.icon}`}></i>
                  </div>
                )}
                {item.tag && (
                  <span className={`menu__tag menu__tag--${item.tagType}`}>
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="menu__data">
                <div className="menu__header">
                  <h3 className="menu__name">{item.name}</h3>
                  <span className="menu__price">
                    From <strong>{item.price}</strong>
                  </span>
                </div>
                <p className="menu__description">{item.description}</p>
                <div className="menu__tags">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>
                      <i className={`bx ${tag.icon}`}></i> {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="menu__cta">
          <div className="menu__cta-content">
            <p className="menu__cta-text">Hungry yet?</p>
            <p className="menu__cta-subtext">See our full menu with 60+ dishes or order now</p>
          </div>
          <div className="menu__cta-buttons">
            <a href="tel:+919894511100" className="button button--primary button--glow">
              <i className='bx bx-phone-call'></i> Order Now
            </a>
            <Link to="/menu" className="button button--outline">
              <i className='bx bx-restaurant'></i> Full Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
