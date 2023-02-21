import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Assets from './pages/Assets';
import Orders from './pages/Orders';
import Overview from './pages/Overview';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar/>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/assets' exact element={<Assets />} />
        <Route path='/orders' exact element={<Orders />} />
        <Route path='/overview' exact element={<Overview />} />
      </Routes>
    </Router>
  );
}

export default App;
