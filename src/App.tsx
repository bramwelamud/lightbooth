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
import Features from './app/features'
import Footer from './app/footer'

import {  Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (<>
  <div className="bg-black vh-100 margin smooth-scroll">
    <div className="margin-0 ">
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <FrontPage />
            <Section1 />
            <Section2 />
            <Section_3 />
            <Section_4 />
            
            
          </>
        } />
        
        {/* routes */}
        { <Route path="/pricing" element={<PricingPage />} /> }
        { <Route path="/Login" element={<Login />} /> }
        { <Route path="/About" element={<About/>} /> }
        { <Route path="/Contact" element={<Contact/>} /> }
        { <Route path="/Features" element={<Features/>} /> }
       
      </Routes>
      <footer>
       <Footer />
      </footer>
    </div>
  </div>
</>

  )
}

export default App
