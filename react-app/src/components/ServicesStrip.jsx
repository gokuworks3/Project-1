function ServicesStrip() {
  const services = [
    { icon: 'bx-dish', label: 'Dine-in' },
    { icon: 'bx-package', label: 'Takeaway' },
    { icon: 'bx-car', label: 'Kerbside Pickup' },
    { icon: 'bx-cycling', label: 'No-contact Delivery' },
    { icon: 'bx-calendar-check', label: 'Reservations' },
    { icon: 'bx-party', label: 'Catering' },
  ]

  return (
    <section className="services-strip">
      <div className="services-strip__container container">
        {services.map((service, index) => (
          <div className="service-badge" key={index}>
            <i className={`bx ${service.icon}`}></i>
            <span>{service.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesStrip
