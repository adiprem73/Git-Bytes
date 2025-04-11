// App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Report from './pages/Report';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Report" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;