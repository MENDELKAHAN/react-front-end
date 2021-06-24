// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
   
    {/* <div className="App">
      <header className="App-header"> */}
        
        <NavBar />
        <Route path="/" component={HomePage} exact/>
        <Route path="/about" component={AboutPage} exact/>
        
      {/* </header> */}

      <Footer/>
     {/* </div> */}
    </Router>
  );
}

export default App;
