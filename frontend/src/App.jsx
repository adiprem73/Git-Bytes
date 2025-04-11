// App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Report from './pages/Report';
import LoaderNew from './components/LoaderNew';
import Loader from './pages/Loader';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Loader" element={<Loader />} />
      </Routes>
    </Router>
  );
}

export default App;