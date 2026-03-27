import { useState, useEffect } from 'react'

function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setIsVisible(window.scrollY >= 400)
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={`mobile-cta ${isVisible ? 'show' : ''}`}>
      <a href="tel:+910000000000" className="mobile-cta__button mobile-cta__button--call">
        <i className='bx bx-phone-call'></i>
        <span>Call Now</span>
      </a>
      <a
        href="https://wa.me/910000000000?text=Hi!%20I'd%20like%20to%20order%20from%20Demo%20Bistro"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-cta__button mobile-cta__button--whatsapp"
      >
        <i className='bx bxl-whatsapp'></i>
        <span>WhatsApp</span>
      </a>
    </div>
  )
}

export default MobileCTA
