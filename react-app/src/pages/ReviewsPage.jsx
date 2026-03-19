import { Link } from 'react-router-dom'
import heroImg from '../assets/images/hero_bg_dhaba.png'

function ReviewsPage() {
  const reviews = [
    {
      initials: 'RM',
      name: 'Rahul Mehta',
      date: '2 weeks ago',
      rating: 5,
      text: '"Tasty food with lots of North Indian options at an affordable price. The Tandoori Chicken is simply amazing! Perfect for family dinners. The staff is friendly and the service is quick."',
    },
    {
      initials: 'SK',
      name: 'Sneha Krishnan',
      date: '1 month ago',
      rating: 5,
      text: '"Good service, beautiful green ambience, and ample parking space. The fresh juices are a must-try! Great place for weekend brunch with family. Highly recommended!"',
    },
    {
      initials: 'AV',
      name: 'Arun Venkat',
      date: '3 weeks ago',
      rating: 4.5,
      text: '"Amazing find on the L&T Bypass! Authentic North Indian taste and very budget-friendly. The Azam Nizam Kebabs are to die for! Will definitely visit again."',
    },
    {
      initials: 'PS',
      name: 'Priya Sharma',
      date: '1 week ago',
      rating: 5,
      text: '"Best dhaba experience in Coimbatore! The paneer dishes are so creamy and the naans are perfectly fluffy. Will definitely come back! Love the outdoor seating area."',
    },
    {
      initials: 'MK',
      name: 'Mohammed Kabir',
      date: '2 months ago',
      rating: 5,
      text: '"Excellent biryani and kebabs! The quantity is generous and the prices are very reasonable. Perfect spot for a filling North Indian meal. The butter chicken is heavenly!"',
    },
    {
      initials: 'VR',
      name: 'Vishnu Rajan',
      date: '1 month ago',
      rating: 4,
      text: '"Good food, nice ambience. The dal makhani is rich and flavorful. Parking is convenient. Only suggestion would be to reduce the wait time during peak hours."',
    },
    {
      initials: 'AS',
      name: 'Ananya Suresh',
      date: '3 weeks ago',
      rating: 5,
      text: '"As a vegetarian, I\'m impressed by the variety here! Paneer tikka, dal makhani, and the naans are excellent. The fresh lime soda is so refreshing. Great value for money!"',
    },
    {
      initials: 'RK',
      name: 'Ravi Kumar',
      date: '2 weeks ago',
      rating: 4.5,
      text: '"Came here with college friends and we loved it! Affordable prices, huge portions, and authentic taste. The chicken biryani is a must-try. Perfect for students!"',
    },
  ]

  const stats = [
    { number: '4.2', label: 'Average Rating', icon: 'bx-star' },
    { number: '2,400+', label: 'Happy Customers', icon: 'bx-user-check' },
    { number: '10+', label: 'Years of Service', icon: 'bx-calendar' },
    { number: '95%', label: 'Would Recommend', icon: 'bx-like' },
  ]

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i className='bx bxs-star' key={`full-${i}`}></i>)
    }
    if (hasHalfStar) {
      stars.push(<i className='bx bxs-star-half' key="half"></i>)
    }

    return stars
  }

  return (
    <>
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="page-header__overlay"></div>
        <div className="container">
          <div className="page-header__content">
            <h1 className="page-header__title">Customer Reviews</h1>
            <p className="page-header__subtitle">What Our Guests Say About Us</p>
            <div className="page-header__breadcrumb">
              <Link to="/">Home</Link>
              <i className='bx bx-chevron-right'></i>
              <span>Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="review-stats">
        <div className="container">
          <div className="review-stats__container">
            {stats.map((stat, index) => (
              <div className="review-stat" key={index} data-animate="fade-up" data-delay={index * 100}>
                <i className={`bx ${stat.icon}`}></i>
                <span className="review-stat__number">{stat.number}</span>
                <span className="review-stat__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="reviews-page section">
        <div className="container">
          <span className="section__subtitle">Testimonials</span>
          <h2 className="section__title">Real Stories from Real Customers</h2>
          <p className="section__description">
            Don't just take our word for it — read what our happy customers have to say about their experience.
          </p>

          <div className="reviews-grid grid">
            {reviews.map((review, index) => (
              <article
                className="review__card"
                key={index}
                data-animate="fade-up"
                data-delay={index * 50}
              >
                <div className="review__header">
                  <div className="review__avatar">{review.initials}</div>
                  <div className="review__info">
                    <h4 className="review__name">{review.name}</h4>
                    <span className="review__date">{review.date}</span>
                  </div>
                </div>
                <div className="review__stars">
                  {renderStars(review.rating)}
                </div>
                <p className="review__text">{review.text}</p>
                <span className="review__badge">
                  <i className='bx bx-badge-check'></i> Verified Visit
                </span>
              </article>
            ))}
          </div>

          {/* Google Reviews Link */}
          <div className="reviews-cta" data-animate="fade-up">
            <p>Want to read more reviews or share your experience?</p>
            <a
              href="https://maps.app.goo.gl/ro2cT5s9u6LZu9eY8"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--outline"
            >
              <i className='bx bxl-google'></i> See All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="cta__bg"></div>
        <div className="container">
          <div className="cta__content" data-animate="fade-up">
            <span className="cta__tagline">Join Our Happy Customers</span>
            <h2 className="cta__title">Ready to Experience It Yourself?</h2>
            <p className="cta__description">
              Visit us today and discover why 2,400+ customers love Haryana Dhaba & Bakes!
            </p>
            <div className="cta__buttons">
              <a href="tel:+919894511100" className="button button--primary button--large">
                <i className='bx bx-phone-call'></i> Call Now
              </a>
              <Link to="/menu" className="button button--secondary button--large">
                <i className='bx bx-restaurant'></i> View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ReviewsPage
