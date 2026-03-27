import { useState, useEffect } from 'react'

function FloatingButtons() {
  const [showFab, setShowFab] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowFab(window.scrollY >= 300)
      setShowScrollTop(window.scrollY >= 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Floating Action Buttons */}
      <div className={`fab ${showFab ? 'show' : ''}`}>
        {/* WhatsApp - Primary for Indian market */}
        <a
          href="https://wa.me/910000000000?text=Hi!%20I'd%20like%20to%20place%20an%20order%20from%20Demo%20Bistro"
          target="_blank"
          rel="noopener noreferrer"
          className="fab__button fab__button--whatsapp"
          title="Order on WhatsApp"
        >
          <i className='bx bxl-whatsapp'></i>
        </a>
        {/* Call Button */}
        <a
          href="tel:+910000000000"
          className="fab__button fab__button--call"
          title="Call to Order"
        >
          <i className='bx bx-phone-call'></i>
        </a>
        {/* Directions */}
        <a
          href="https://maps.google.com/?q=Demo+Location"
          target="_blank"
          rel="noopener noreferrer"
          className="fab__button fab__button--map"
          title="Get Directions"
        >
          <i className='bx bx-map-pin'></i>
        </a>
      </div>

      {/* Scroll to Top */}
      <a
        href="#home"
        className={`scroll-top ${showScrollTop ? 'show' : ''}`}
        title="Back to Top"
        onClick={scrollToTop}
      >
        <i className='bx bx-up-arrow-alt'></i>
      </a>
    </>
  )
}

export default FloatingButtons
