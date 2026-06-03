import { useNavigate } from 'react-router-dom'

const courses = [
  {
    name: 'Intro to Climbing',
    price: '$45/session',
    level: 'Beginner',
    details: 'Learn the basics of belaying, footwork, and route reading in a supportive group setting.',
    note: 'Gear included',
  },
  {
    name: 'Intermediate Bouldering',
    price: '$35/session',
    level: 'Intermediate',
    details: 'Focus on powerful movements, balance, and problem solving across our premium boulder walls.',
    note: 'No gear needed',
  },
  {
    name: 'Advanced Rope Climbing',
    price: '$55/session',
    level: 'Advanced',
    details: 'Train endurance, lead climbing technique, and advanced rope systems with expert coaching.',
    note: 'Harness required',
  },
]

export default function Courses() {
  const navigate = useNavigate()

  return (
    <section className="section page-section">
      <div className="section-header">
        <p className="eyebrow">Courses</p>
        <h1>Our Courses</h1>
      </div>

      <div className="cards-grid courses-grid">
        {courses.map((course) => (
          <article className="course-card" key={course.name}>
            <div className="course-card-top">
              <span className="course-level">{course.level}</span>
              <span className="course-price">{course.price}</span>
            </div>
            <h2>{course.name}</h2>
            <p>{course.details}</p>
            <p className="course-note">{course.note}</p>
            <button
              className="button button-primary course-book"
              onClick={() =>
                navigate('/book', { state: { course: course.name } })
              }
            >
              Book Now
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
