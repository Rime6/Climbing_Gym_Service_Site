import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Booking from './pages/Booking'
import Confirmation from './pages/Confirmation'
import Memberships from './pages/Memberships'
import Gear from './pages/Gear'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <NavBar />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/book" element={<Booking />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/memberships" element={<Memberships />} />
            <Route path="/gear" element={<Gear />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
