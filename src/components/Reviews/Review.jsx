import React from 'react'
import "./Review.css"

const reviews = [
  {
    name: "Rohan Singh",
    text: "Best PG I’ve stayed in! Clean rooms, delicious food, and staff are always helpful.",
  },
  {
    name: "Amit Sharma",
    text: "Great experience overall. The Wi-Fi and 24x7 electricity make studying easy.",
  },
  {
    name: "Karan Patel",
    text: "I love how safe and secure this place feels. CCTV and warden available all the time.",
  },
  {
    name: "Vikram Mehta",
    text: "Affordable and well-maintained rooms. The RO water and laundry service are a plus!",
  },
  {
    name: "Sahil Gupta",
    text: "Feels like home. Great environment, especially for students away from family.",
  },
  {
    name: "Rahul Verma",
    text: "Spacious rooms, peaceful atmosphere, and friendly roommates. Highly recommend!",
  },
  {
    name: "Manish Yadav",
    text: "Management is responsive and cooperative. Maintenance issues are handled quickly.",
  },
  {
    name: "Deepak Joshi",
    text: "Super clean, comfortable, and affordable. I’m enjoying my stay here!",
  },
]

const Review = () => {
  return (
    <div className="review">
      <h2>What Our Residents Say</h2>

      <div className="review-slider">
        <div className="review-track">
          {/* Duplicate reviews for smooth infinite scrolling */}
          {[...reviews, ...reviews].map((review, index) => (
            <div className="review-card" key={index}>
              <i className="fa-solid fa-quote-left quote-icon"></i>
              <p className="review-text">"{review.text}"</p>
              <div className="review-footer">
                <i className="fa-solid fa-user person-icon"></i>
                <h4 className="review-name">{review.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Review
