import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'
import FloatingButtons from './components/FloatingButtons'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MenuPage from './pages/MenuPage'
import GalleryPage from './pages/GalleryPage'
import ReviewsPage from './pages/ReviewsPage'
import ContactPage from './pages/ContactPage'
import './App.css'

// ScrollToTop component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// Animation handler component
function AnimationHandler() {
  const { pathname } = useLocation()

  useEffect(() => {
    const revealOnScroll = () => {
      const animatedElements = document.querySelectorAll('[data-animate]')
      const windowHeight = window.innerHeight
      const revealPoint = 100

      animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('animated')
        }
      })
    }

    // Initial check
    setTimeout(revealOnScroll, 100)

    window.addEventListener('scroll', revealOnScroll)
    return () => window.removeEventListener('scroll', revealOnScroll)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimationHandler />
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <MobileCTA />
      <FloatingButtons />
    </Router>
  )
}

export default App
