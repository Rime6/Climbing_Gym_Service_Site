import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <p className="footer-brand">Mountain Goats Climbing Gym</p>
          <p>123 Summit Ave, Boulder, CO</p>
        </div>
        <div className="footer-right">
          <p>Open daily 7am-10pm</p>
          <p className="footer-credit">Designed by Rime Nasser Eddine</p>
        </div>
      </div>
    </footer>
  )
}
