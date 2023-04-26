import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import TeamsPage from './components/TeamsPage';
import Achievments from './components/Achievements';
import Features from './components/Features';
import Splitter from './components/Splitter';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <Achievments />
      <TeamsPage/>
      <Features/>
      <ContactPage/>
      <Footer/>
    </div>
  );
}

export default App;
