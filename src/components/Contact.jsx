function Contact() {
  const contactCards = [
    {
      icon: 'bx-map',
      title: 'Our Location',
      content: <>Demo District, Demo Avenue,<br />Opp. Sample Landmark,<br />Demo City, Demo State</>,
    },
    {
      icon: 'bx-phone',
      title: 'Phone',
      content: (
        <>
          <a href="tel:+910000000000" className="contact__link">+91 00000 00000</a>
          <p>Call for orders & reservations</p>
        </>
      ),
    },
    {
      icon: 'bx-time',
      title: 'Opening Hours',
      content: <>Monday - Sunday<br /><strong>Open until 11:30 PM</strong></>,
    },
    {
      icon: 'bx-car',
      title: 'Parking',
      content: <>Free parking lot available<br />Free street parking nearby</>,
    },
  ]

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <span className="section__subtitle">Get in Touch</span>
        <h2 className="section__title">Visit Us Today</h2>

        <div className="contact__container grid">
          <div className="contact__info" data-animate="fade-right">
            {contactCards.map((card, index) => (
              <div className="contact__card" key={index}>
                <div className="contact__card-icon">
                  <i className={`bx ${card.icon}`}></i>
                </div>
                <div className="contact__card-data">
                  <h3>{card.title}</h3>
                  <p>{card.content}</p>
                </div>
              </div>
            ))}

            <div className="contact__buttons">
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

          <div className="contact__map" data-animate="fade-left">
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
  )
}

export default Contact
