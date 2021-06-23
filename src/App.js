// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
        <Route path="/" component={HomePage} exact/>
        <Route path="/about" component={AboutPage} exact/>
        </Router>
      
      
      </header>

      <Footer/>
    </div>
  );
}

export default App;
