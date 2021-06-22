// import './App.css';
import './css/Hosting.css';

import NavBar from './NavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <NavBar />
        <Route path="/" component={HomePage} exact/>
        </Router>
      
      
      </header>
    </div>
  );
}

export default App;
