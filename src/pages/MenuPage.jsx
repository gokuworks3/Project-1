import { Link } from 'react-router-dom'
import heroImg from '../assets/images/hero_bg_dhaba.png'
import tandooriImg from '../assets/images/tandoori_chicken.png'
import naanImg from '../assets/images/naan_roti_breads.png'
import kebabImg from '../assets/images/azam_nizam_kebab.png'

function MenuPage() {
  const menuCategories = [
    {
      id: 'tandoori',
      name: 'Tandoori Specials',
      description: 'Smoky, juicy delights from our traditional clay oven',
      items: [
        { name: 'Tandoori Chicken (Full)', price: '₹450', description: 'Whole chicken marinated in spices, cooked in tandoor', bestseller: true },
        { name: 'Tandoori Chicken (Half)', price: '₹250', description: 'Half portion of our signature tandoori chicken' },
        { name: 'Chicken Tikka', price: '₹280', description: 'Boneless chicken chunks, spiced and grilled' },
        { name: 'Paneer Tikka', price: '₹220', description: 'Cottage cheese cubes marinated and grilled', veg: true },
        { name: 'Malai Tikka', price: '₹300', description: 'Creamy, mildly spiced chicken tikka' },
        { name: 'Fish Tikka', price: '₹350', description: 'Fresh fish marinated in tandoori spices' },
      ],
      image: tandooriImg,
    },
    {
      id: 'kebabs',
      name: 'Kebabs',
      description: 'Signature kebabs that melt in your mouth',
      items: [
        { name: 'Azam Nizam Kebab', price: '₹320', description: 'Our signature house special kebab', signature: true },
        { name: 'Seekh Kebab', price: '₹280', description: 'Minced meat skewered and grilled to perfection' },
        { name: 'Galouti Kebab', price: '₹300', description: 'Melt-in-mouth Lucknowi style kebabs' },
        { name: 'Hara Bhara Kebab', price: '₹180', description: 'Spinach and pea vegetarian kebabs', veg: true },
        { name: 'Shammi Kebab', price: '₹260', description: 'Traditional minced meat patties' },
      ],
      image: kebabImg,
    },
    {
      id: 'breads',
      name: 'Breads & Roti',
      description: 'Fresh-baked breads straight from the tandoor',
      items: [
        { name: 'Butter Naan', price: '₹50', description: 'Soft leavened bread with butter', veg: true },
        { name: 'Garlic Naan', price: '₹60', description: 'Naan topped with garlic and coriander', veg: true },
        { name: 'Cheese Naan', price: '₹80', description: 'Naan stuffed with melted cheese', veg: true },
        { name: 'Tandoori Roti', price: '₹30', description: 'Whole wheat bread from tandoor', veg: true },
        { name: 'Rumali Roti', price: '₹40', description: 'Paper-thin handkerchief bread', veg: true },
        { name: 'Laccha Paratha', price: '₹50', description: 'Layered flaky paratha', veg: true },
        { name: 'Kulcha', price: '₹55', description: 'Stuffed leavened bread', veg: true },
        { name: 'Missi Roti', price: '₹45', description: 'Spiced gram flour bread', veg: true },
      ],
      image: naanImg,
    },
    {
      id: 'curries',
      name: 'Main Course Curries',
      description: 'Rich, aromatic gravies to pair with breads and rice',
      items: [
        { name: 'Butter Chicken', price: '₹320', description: 'Creamy tomato-based chicken curry', bestseller: true },
        { name: 'Chicken Kadai', price: '₹300', description: 'Spicy chicken with bell peppers' },
        { name: 'Mutton Rogan Josh', price: '₹380', description: 'Kashmiri style aromatic mutton curry' },
        { name: 'Dal Makhani', price: '₹180', description: 'Creamy black lentils slow-cooked overnight', veg: true, bestseller: true },
        { name: 'Paneer Butter Masala', price: '₹220', description: 'Cottage cheese in rich tomato gravy', veg: true },
        { name: 'Palak Paneer', price: '₹200', description: 'Paneer in spinach gravy', veg: true },
        { name: 'Kadai Paneer', price: '₹220', description: 'Paneer with bell peppers and spices', veg: true },
        { name: 'Mix Veg Curry', price: '₹180', description: 'Assorted vegetables in curry', veg: true },
      ],
    },
    {
      id: 'rice',
      name: 'Rice & Biryani',
      description: 'Fragrant rice dishes cooked to perfection',
      items: [
        { name: 'Chicken Biryani', price: '₹280', description: 'Aromatic basmati rice with spiced chicken' },
        { name: 'Mutton Biryani', price: '₹350', description: 'Fragrant rice with tender mutton pieces' },
        { name: 'Veg Biryani', price: '₹200', description: 'Vegetable biryani with aromatic spices', veg: true },
        { name: 'Jeera Rice', price: '₹120', description: 'Cumin flavored basmati rice', veg: true },
        { name: 'Steamed Rice', price: '₹80', description: 'Plain steamed basmati rice', veg: true },
      ],
    },
    {
      id: 'beverages',
      name: 'Juices & Beverages',
      description: 'Refreshing drinks to complement your meal',
      items: [
        { name: 'Fresh Lime Soda', price: '₹60', description: 'Sweet or salted lime soda', veg: true },
        { name: 'Mango Lassi', price: '₹80', description: 'Creamy mango yogurt drink', veg: true },
        { name: 'Sweet Lassi', price: '₹60', description: 'Traditional sweet yogurt drink', veg: true },
        { name: 'Masala Chaas', price: '₹50', description: 'Spiced buttermilk', veg: true },
        { name: 'Fresh Fruit Juice', price: '₹100', description: 'Seasonal fresh fruit juice', veg: true },
        { name: 'Masala Chai', price: '₹30', description: 'Traditional spiced tea', veg: true },
        { name: 'Coffee', price: '₹50', description: 'Hot brewed coffee', veg: true },
      ],
    },
    {
      id: 'desserts',
      name: 'Bakery & Desserts',
      description: 'Sweet endings to your meal',
      items: [
        { name: 'Gulab Jamun', price: '₹60', description: 'Deep-fried milk dumplings in sugar syrup', veg: true },
        { name: 'Rasmalai', price: '₹80', description: 'Cottage cheese dumplings in sweet milk', veg: true },
        { name: 'Kheer', price: '₹70', description: 'Creamy rice pudding', veg: true },
        { name: 'Kulfi', price: '₹60', description: 'Traditional Indian ice cream', veg: true },
        { name: 'Pastries', price: '₹50', description: 'Fresh bakery pastries', veg: true },
        { name: 'Cake Slice', price: '₹80', description: 'Freshly baked cake', veg: true },
      ],
    },
  ]

  // Inline CTA component
  const InlineCTA = () => (
    <div className="menu-inline-cta" data-animate="fade-up">
      <div className="menu-inline-cta__content">
        <i className='bx bx-phone-call'></i>
        <div>
          <p className="menu-inline-cta__text">Hungry yet?</p>
          <p className="menu-inline-cta__subtext">Skip the wait — order now!</p>
        </div>
      </div>
      <a href="tel:+910000000000" className="button button--primary button--glow">
        Call: +91 00000 00000
      </a>
    </div>
  )

  return (
    <>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="page-header__overlay"></div>
        <div className="container">
          <div className="page-header__content">
            <h1 className="page-header__title">Our Menu</h1>
            <p className="page-header__subtitle">60+ Authentic North Indian Delicacies</p>
            <div className="page-header__breadcrumb">
              <Link to="/">Home</Link>
              <i className='bx bx-chevron-right'></i>
              <span>Menu</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="menu-nav">
        <div className="container">
          <div className="menu-nav__container">
            {menuCategories.map((category) => (
              <a href={`#${category.id}`} className="menu-nav__item" key={category.id}>
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="menu-page section">
        <div className="container">
          {menuCategories.map((category, catIndex) => (
            <div key={category.id}>
              <div className="menu-category" id={category.id} data-animate="fade-up">
                <div className="menu-category__header">
                  <div className="menu-category__info">
                    <h2 className="menu-category__title">{category.name}</h2>
                    <p className="menu-category__description">{category.description}</p>
                  </div>
                  {category.image && (
                    <div className="menu-category__image">
                      <img src={category.image} alt={category.name} loading="lazy" />
                    </div>
                  )}
                </div>

                <div className="menu-items">
                  {category.items.map((item, itemIndex) => (
                    <div className="menu-item" key={itemIndex}>
                      <div className="menu-item__info">
                        <div className="menu-item__header">
                          <h3 className="menu-item__name">
                            {item.veg && <span className="menu-item__veg"><i className='bx bxs-leaf'></i></span>}
                            {item.name}
                          </h3>
                          <div className="menu-item__badges">
                            {item.bestseller && <span className="menu-item__badge menu-item__badge--bestseller">Bestseller</span>}
                            {item.signature && <span className="menu-item__badge menu-item__badge--signature">Signature</span>}
                          </div>
                        </div>
                        <p className="menu-item__description">{item.description}</p>
                      </div>
                      <span className="menu-item__price">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Show inline CTA after 3rd category */}
              {catIndex === 2 && <InlineCTA />}
            </div>
          ))}

          {/* Menu CTA */}
          <div className="menu-cta" data-animate="fade-up">
            <div className="menu-cta__content">
              <p className="menu-cta__text">Ready to taste the best?</p>
              <p className="menu-cta__subtext">Call us or visit for the freshest North Indian experience!</p>
            </div>
            <div className="menu-cta__buttons">
              <a href="tel:+910000000000" className="button button--primary button--glow">
                <i className='bx bx-phone-call'></i> Call to Order
              </a>
              <a
                href="https://wa.me/910000000000?text=Hi!%20I'd%20like%20to%20order%20from%20Demo%20Bistro"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--whatsapp"
              >
                <i className='bx bxl-whatsapp'></i> WhatsApp
              </a>
              <Link to="/contact" className="button button--outline">
                <i className='bx bx-map'></i> Visit Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MenuPage
