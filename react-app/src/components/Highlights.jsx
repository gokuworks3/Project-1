function Highlights() {
  const highlightGroups = [
    {
      icon: 'bx-sun',
      title: 'Popular For',
      tags: ['Breakfast', 'Lunch', 'Dinner', 'Late-night Food', 'Quick Bites', 'Solo Dining'],
    },
    {
      icon: 'bx-star',
      title: 'Highlights',
      tags: ['Great Coffee', 'Great Dessert', 'Great Tea Selection', 'Vegetarian Options', 'Healthy Options'],
    },
    {
      icon: 'bx-credit-card',
      title: 'Payments',
      tags: ['Cash', 'Credit Cards', 'Debit Cards', 'UPI', 'NFC Payments'],
    },
    {
      icon: 'bx-accessibility',
      title: 'Accessibility',
      tags: ['Wheelchair Accessible', 'Accessible Parking', 'Accessible Restroom'],
    },
  ]

  return (
    <section className="highlights section">
      <div className="container">
        <div className="highlights__container grid">
          {highlightGroups.map((group, index) => (
            <div className="highlight__group" key={index}>
              <h3 className="highlight__title">
                <i className={`bx ${group.icon}`}></i> {group.title}
              </h3>
              <div className="highlight__tags">
                {group.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights
