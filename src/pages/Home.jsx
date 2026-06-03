import { Link } from 'react-router-dom'
import { FaMountain, FaShoppingBag, FaUserTie, FaStar } from 'react-icons/fa'

const features = [
  {
    icon: <FaUserTie size={28} />,
    title: 'Expert Instructors',
    description: 'Certified coaches guide your technique so every climb feels safer and stronger.',
  },
  {
    icon: <FaMountain size={28} />,
    title: 'State-of-the-Art Walls',
    description: 'Premium terrain and lighted routes keep every workout inspiring and fun.',
  },
  {
    icon: <FaShoppingBag size={28} />,
    title: 'Gear Available On-Site',
    description: 'Rent or buy climbing equipment from our curated, quality gear lineup.',
  },
]

export default function Home() {
  return (
    <section className="home-page">
      <section className="hero-block">
        <div className="hero-copy">
          <p className="eyebrow">Premium Indoor Climbing</p>
          <h1>Reach New Heights</h1>
          <p className="hero-subtitle">
            Indoor climbing for every level, beginner to elite.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/courses">
              Book a Course
            </Link>
            <Link className="button button-secondary" to="/memberships">
              View Memberships
            </Link>
          </div>
        </div>
      </section>
    
    </section>
  )
}
