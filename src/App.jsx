import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Rated from './pages/Rated';
import Auth from './pages/Auth';

function App() {
  return (
    <div>

    <Router>
      <Navbar/>

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/rated' element={<Rated/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route/>
      </Routes>

    </Router>

    </div>
    
  );
}

export default App;
