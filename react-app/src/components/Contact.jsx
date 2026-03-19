function Contact() {
  const contactCards = [
    {
      icon: 'bx-map',
      title: 'Our Location',
      content: <>Kulathur, L&T Bypass,<br />Opp. Sri Sakthi College,<br />Coimbatore, Tamil Nadu</>,
    },
    {
      icon: 'bx-phone',
      title: 'Phone',
      content: (
        <>
          <a href="tel:+919894511100" className="contact__link">+91 98945 11100</a>
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
              <a href="tel:+919894511100" className="button button--primary">
                <i className='bx bx-phone-call'></i> Call Now
              </a>
              <a
                href="https://www.google.com/maps/place/Haryana+Dhaba+%26+Bakes/@11.0463034,77.078409,15z/data=!4m17!1m10!3m9!1s0x3ba8563e09210941:0x7b26a4df19479466!2sHaryana+Dhaba+%26+Bakes!8m2!3d11.046224!4d77.078565!10e5!14m1!1BCgIYIg!16s%2Fg%2F11fy2k5612!3m5!1s0x3ba8563e09210941:0x7b26a4df19479466!8m2!3d11.046224!4d77.078565!16s%2Fg%2F11fy2k5612"
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.7247562556823!2d77.078565!3d11.046224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8563e09210941:0x7b26a4df19479466!2sHaryana+Dhaba+%26+Bakes!5e0!3m2!1sen!2sin!4v1679000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Haryana Dhaba & Bakes Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
