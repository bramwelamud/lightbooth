import Navbar from './app/navbar'
import FrontPage from './app/frontPage'
import Section1 from './app/section_1'
import Section2 from './app/section_2'
import Login from './app/login'
import PricingPage from './app/pricing'
import Section_3 from './app/section_3'
import Section_4 from './app/section_4'
import Contact from './app/contact'
import About from './app/about'
import Download from './app/downloadPage'
import Features from './app/features'
import Animate from './app/animate'
import Footer from './app/footer'

import { Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow w-full mx-auto">
          <Routes>
            <Route path="/" element={
              <>
                <FrontPage />
                <Section1 />
                <Animate />
                <Section2 />
                <Section_4 />
                <Section_3 />
                <Download/>
              </>
            } />
            
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/features" element={<Features/>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App