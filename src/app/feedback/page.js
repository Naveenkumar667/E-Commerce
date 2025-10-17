'use client'

import { useState, useEffect } from 'react'

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    message: '',
    category: 'general'
  })
  const [isMounted, setIsMounted] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Fix hydration
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the feedback to your backend
    console.log('Feedback submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        rating: 5,
        message: '',
        category: 'general'
      })
    }, 3000)
  }

  // Show loading state during hydration
  if (!isMounted) {
    return (
      <div>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Feedback</h1>
        <div className="form-container">
          <div>Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>We'd Love Your Feedback!</h1>
      
      <div className="form-container" style={{ maxWidth: '600px' }}>
        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h2 style={{ color: '#2ecc71' }}>Thank You!</h2>
            <p>Your feedback has been submitted successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="category">Feedback Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              >
                <option value="general">General Feedback</option>
                <option value="product">Product Suggestion</option>
                <option value="website">Website Experience</option>
                <option value="shipping">Shipping & Delivery</option>
                <option value="customer-service">Customer Service</option>
                <option value="bug">Bug Report</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Rating</label>
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData({ ...formData, rating: star })}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '2rem',
                      cursor: 'pointer',
                      color: star <= formData.rating ? '#ffd700' : '#ddd'
                    }}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Feedback</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what you think..."
                required
                rows="5"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  fontFamily: 'inherit'
                }}
              />
            </div>
            
            <button type="submit" className="btn btn-primary">
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </div>
  )
}