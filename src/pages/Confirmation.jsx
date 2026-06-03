import { Link, useLocation } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'

export default function Confirmation() {
  const location = useLocation()
  const course = location.state?.course ?? 'Intro to Climbing'
  const time = location.state?.time ?? '10:00 AM'
  const rawDate = location.state?.date
  const date = rawDate ? new Date(rawDate) : new Date()
  const dateLabel = date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  return (
    <section className="section page-section confirmation-page">
      <div className="confirmation-card">
        <FaCheckCircle className="confirmation-icon" />
        <h1>You're all booked, Climber!</h1>
        <div className="summary-card">
          <div>
            <p className="summary-label">Course</p>
            <p>{course}</p>
          </div>
          <div>
            <p className="summary-label">Date</p>
            <p>{dateLabel}</p>
          </div>
          <div>
            <p className="summary-label">Time</p>
            <p>{time}</p>
          </div>
          <div>
            <p className="summary-label">Location</p>
            <p>Mountain Goats Climbing Gym, 123 Summit Ave</p>
          </div>
        </div>
        <p className="confirmation-note">
          Gear is included for Intro to Climbing. Please arrive 15 minutes early.
        </p>
        <div className="confirmation-actions">
          <Link className="button button-secondary button-secondary-dark" to="/courses">
            Book Another Course
          </Link>
          <Link className="button button-primary" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
