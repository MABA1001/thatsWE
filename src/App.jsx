import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import InfoHandeling from './Pages/InfoHandeling';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/InfoHandeling" element={<InfoHandeling />} />
      </Routes>
    </>
  );
}

export default App;
