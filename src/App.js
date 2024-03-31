import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MakeQuiz from './components/MakeQuiz';
import Report from './components/Report';
import TakeQuiz from './components/TakeQuiz';

function App() {
  return (
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/makequiz" element={<MakeQuiz />} />
            <Route path="/report" element={<Report />} />
            <Route path="/takequiz" element={<TakeQuiz />} />
          </Routes>
        </Router>
  );
}

export default App;
