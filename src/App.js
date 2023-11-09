import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';

function App() {
  return (
    <Router basename='/test'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
