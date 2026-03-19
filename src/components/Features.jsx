function Features() {
  const features = [
    {
      icon: 'bx-restaurant',
      title: 'Authentic North Indian Taste',
      description: 'Original recipes passed down through generations, cooked by expert chefs from Haryana and Punjab.',
    },
    {
      icon: 'bx-wallet',
      title: 'Affordable Pricing',
      description: 'Premium quality meals at budget-friendly prices. Perfect for families, students, and daily diners.',
    },
    {
      icon: 'bx-leaf',
      title: 'Green Outdoor Ambience',
      description: 'Relax in our nature-inspired setting with outdoor seating, perfect for a peaceful dining experience.',
    },
    {
      icon: 'bx-time-five',
      title: 'Quick Service',
      description: 'Freshly prepared food served hot and fast. Counter service and table service available.',
    },
    {
      icon: 'bx-check-shield',
      title: 'Fresh Ingredients',
      description: 'We source fresh, quality ingredients daily to ensure every dish is healthy and delicious.',
    },
    {
      icon: 'bx-group',
      title: 'Family Friendly',
      description: 'High chairs available, kids menu options, and perfect for birthday celebrations and group gatherings.',
    },
  ]

  return (
    <section className="features section" id="features">
      <div className="features__bg"></div>
      <div className="container">
        <span className="section__subtitle section__subtitle--light">Why Choose Us</span>
        <h2 className="section__title section__title--light">The Best Dhaba Experience in Coimbatore</h2>

        <div className="features__container grid">
          {features.map((feature, index) => (
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
  )
}

export default Features
