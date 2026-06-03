import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section page-section contact-page">
      <div className="page-split">
        <div className="contact-form-panel card-panel contact-form-dark">
          <div className="section-header">
            <p className="eyebrow">Contact</p>
            <h1>Get In Touch</h1>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Subject
              <select name="subject" value={form.subject} onChange={handleChange}>
                <option>General Inquiry</option>
                <option>Membership Question</option>
                <option>Course Booking</option>
                <option>Gear Question</option>
              </select>
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </label>
            <button className="button button-primary" type="submit">
              Send Message
            </button>
            {submitted && (
              <p className="success-message">
                Thanks! We'll get back to you within 24 hours.
              </p>
            )}
          </form>
        </div>

        <aside className="contact-sidebar card-panel">
          <div className="section-header sidebar-header">
            <p className="eyebrow">Visit Us</p>
            <h2>Reach Out Anytime</h2>
          </div>
          <p>
            <strong>Address</strong>
            <br />123 Summit Ave, Boulder, CO
          </p>
          <br />
          <p>
            <strong>Phone</strong>
            <br />(613) 123-4567
          </p>
          <br />
          <p>
            <strong>Email</strong>
            <br />fakeemail@mountaingoatsgym.com
          </p>
          <br />
          <p>
            <strong>Opening Hours</strong>
            <br />Monday – Friday: 7am–10pm
            <br />Saturday – Sunday: 8am–9pm
          </p>
        </aside>
      </div>
    </section>
  )
}
