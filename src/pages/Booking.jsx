import { useLocation, useNavigate } from 'react-router-dom'
import { useMemo, useState } from 'react'

const timeSlots = ['10:00 AM', '1:00 PM', '3:00 PM']
const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function getMonthDays(date) {
  const year = date.getFullYear()
  const month = date.getMonth()
  const first = new Date(year, month, 1)
  const days = new Date(year, month + 1, 0).getDate()
  return { firstDay: first.getDay(), totalDays: days }
}

export default function Booking() {
  const location = useLocation()
  const navigate = useNavigate()
  const selectedCourse = location.state?.course ?? 'Intro to Climbing'
  const today = useMemo(() => {
    const date = new Date()
    date.setHours(0, 0, 0, 0)
    return date
  }, [])
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState('')
  const { firstDay, totalDays } = getMonthDays(today)

  const dayButtons = []
  for (let i = 0; i < firstDay; i += 1) {
    dayButtons.push(null)
  }
  for (let day = 1; day <= totalDays; day += 1) {
    dayButtons.push(new Date(today.getFullYear(), today.getMonth(), day))
  }

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) return
    navigate('/confirmation', {
      state: {
        course: selectedCourse,
        date: selectedDate.toISOString(),
        time: selectedTime,
      },
    })
  }

  return (
    <section className="section page-section booking-page">
      <div className="section-header">
        <p className="eyebrow">Book</p>
        <h1>{selectedCourse}</h1>
      </div>

      <div className="booking-grid">
        <div className="calendar-card">
          <h2>Choose a Date</h2>
          <p className="calendar-subtitle">
            {today.toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </p>
          <div className="calendar-grid">
            {dayNames.map((name) => (
              <span key={name} className="calendar-label">
                {name}
              </span>
            ))}
            {dayButtons.map((date, index) => {
              if (!date) {
                return <span key={`blank-${index}`} />
              }
              const disabled = date < today
              const isSelected =
                selectedDate && date.getTime() === selectedDate.getTime()
              return (
                <button
                  key={date.toISOString()}
                  type="button"
                  disabled={disabled}
                  className={`calendar-day${isSelected ? ' selected' : ''}`}
                  onClick={() => setSelectedDate(date)}
                >
                  {date.getDate()}
                </button>
              )
            })}
          </div>
        </div>

        <div className="booking-controls">
          <div className="time-card">
            <h2>Select a Time</h2>
            <div className="time-buttons">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className={`button button-secondary time-slot${
                    selectedTime === slot ? ' selected' : ''
                  }`}
                  onClick={() => setSelectedTime(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="button button-primary confirm-button"
            disabled={!selectedDate || !selectedTime}
            onClick={handleConfirm}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </section>
  )
}
