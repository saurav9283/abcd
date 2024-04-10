import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
