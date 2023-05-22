import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Achievments from './components/Achievements';
import Footer from './components/Footer';
import QuickFeatures from './components/QuickFeatures';
import QuickFeatures2 from './components/QuickFeatures2';
import Reviews from './components/Reviews';
import Faq from './components/Faq';
import ContactSection from './components/ContactSection';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (

    <>

      <div className="App">
        <div className="background-particles">
        <ParticleBackground />
        <Header />
        <LandingPage />
        </div>
        <Achievments />
        <QuickFeatures />
        <QuickFeatures2 />
        <Reviews />
        <Faq />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
