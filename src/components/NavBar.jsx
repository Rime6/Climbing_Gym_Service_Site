import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/memberships', label: 'Memberships' },
  { to: '/gear', label: 'Gear' },
  { to: '/contact', label: 'Contact' },
]

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <NavLink to="/" className="brand">
          <span className="brand-icon">🧗</span>
          <span>Mountain Goats</span>
        </NavLink>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `nav-link${isActive ? ' active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
