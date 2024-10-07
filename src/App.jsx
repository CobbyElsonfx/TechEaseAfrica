import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Admission from './pages/Admission';
import AboutUs from './pages/AboutUs';
import ApplicationForm from './pages/Application';

function App() {
  return (
    <Router>
      <div className='w-100 flex flex-col'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/apply" element={<ApplicationForm />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
