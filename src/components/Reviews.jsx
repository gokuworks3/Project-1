function Reviews() {
  const reviews = [
    {
      initials: 'RM',
      name: 'Demo Guest 01',
      date: 'Jan 2026',
      rating: 5,
      text: 'Sample feedback for demo purposes: tasty food, fast service, and family-friendly ambience.',
      dish: 'Tandoori Chicken',
      color: '#FF6F00',
    },
    {
      initials: 'SK',
      name: 'Demo Guest 02',
      date: 'Feb 2026',
      rating: 5,
      text: 'Demo review entry: good ambience, easy parking, and refreshing drinks.',
      dish: 'Fresh Juices',
      color: '#4CAF50',
    },
    {
      initials: 'AV',
      name: 'Demo Guest 03',
      date: 'Mar 2026',
      rating: 4.5,
      text: 'Sample testimonial: strong North Indian flavors and good value for money.',
      dish: 'Azam Nizam Kebab',
      color: '#E91E63',
    },
    {
      initials: 'PS',
      name: 'Demo Guest 04',
      date: 'Mar 2026',
      rating: 5,
      text: 'Demo customer note: creamy paneer dishes, soft breads, and pleasant seating.',
      dish: 'Paneer Butter Masala',
      color: '#9C27B0',
    },
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
    <section className="reviews section" id="reviews">
      <div className="container">
        {/* Stats Bar */}
        <div className="reviews__stats" data-animate="fade-up">
          <div className="reviews__stat">
            <div className="reviews__stat-icon">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <span className="reviews__stat-number">4.7</span>
            <div className="reviews__stat-stars">
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star-half'></i>
            </div>
            <span className="reviews__stat-label">Demo Rating</span>
          </div>
          <div className="reviews__stat-divider"></div>
          <div className="reviews__stat">
            <span className="reviews__stat-number">1,234+</span>
            <span className="reviews__stat-label">Happy Customers</span>
          </div>
          <div className="reviews__stat-divider"></div>
          <div className="reviews__stat">
            <span className="reviews__stat-number">10+</span>
            <span className="reviews__stat-label">Years Serving</span>
          </div>
        </div>

        <span className="section__subtitle">Customer Love</span>
        <h2 className="section__title">Why 1,234+ Customers Keep Coming Back</h2>

        <div className="reviews__container grid">
          {reviews.map((review, index) => (
            <article
              className="review__card"
              key={index}
              data-animate="fade-up"
              data-delay={index * 100}
            >
              <div className="review__header">
                <div className="review__avatar" style={{ background: review.color }}>
                  {review.initials}
                </div>
                <div className="review__info">
                  <h4 className="review__name">{review.name}</h4>
                  <span className="review__meta">
                    <i className='bx bxs-badge-check'></i> Verified · {review.date}
                  </span>
                </div>
              </div>
              <div className="review__stars">
                {renderStars(review.rating)}
              </div>
              <p className="review__text">"{review.text}"</p>
              {review.dish && (
                <span className="review__dish">
                  <i className='bx bx-dish'></i> Ordered: {review.dish}
                </span>
              )}
            </article>
          ))}
        </div>

        <div className="reviews__cta">
          <a
            href="https://maps.google.com/?q=Demo+Location"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--outline"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" style={{ marginRight: '0.5rem' }}>
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            </svg>
            See All Google Reviews
          </a>
        </div>
      </div>
    </section>
  )
}

export default Reviews
