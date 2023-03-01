import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Assets from './pages/Assets';
import Orders from './pages/Orders';
import Overview from './pages/Overview';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Sidebar />
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/assets' element={<Assets />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/overview' element={<Overview />} />
      </Routes>
    </Router>
  );
}

export default App;
