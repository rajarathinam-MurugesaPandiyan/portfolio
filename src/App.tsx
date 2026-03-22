import './App.css'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Services } from './components/Services/Services'
import { HireMe } from './components/HireMe/HireMe'
import { Experience } from './components/Experience/Experience'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <HireMe />
      <Experience />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App
