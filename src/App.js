import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import TeamsPage from './components/TeamsPage';
import Achievments from './components/Achievements';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import QuickFeatures from './components/QuickFeatures';
import QuickFeatures2 from './components/QuickFeatures2';
import Reviews from './components/Reviews';
import Faq from './components/Faq';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <Achievments />
      <QuickFeatures/>
      <QuickFeatures2/>
      <Reviews/>
      <Faq/>
      <ContactPage/>
      <Footer/>
    </div>
  );
}

export default App;
