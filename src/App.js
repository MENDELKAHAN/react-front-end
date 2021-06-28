// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Development from './pages/services/Development';
import ScrollToTop from './components/ScrollToTop';
import Improvement from './pages/services/Improvement';
import Hosting from './pages/services/Hosting';

function App() {
  return (
    <Router>
   
    {/* <div className="App">
      <header className="App-header"> */}
        <ScrollToTop />
        <NavBar />
        <Route path="/" component={HomePage} exact/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/contact" component={ContactUs}/>

        <Route path="/development" component={Development}/>
        <Route path="/improvement" component={Improvement}/>
        <Route path="/hosting" component={Hosting}/>
        

        

  
        
      {/* </header> */}

      <Footer/>
     {/* </div> */}
    </Router>
  );
}

export default App;
