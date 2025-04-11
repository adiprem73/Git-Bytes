// App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Report from './pages/Report';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Report" element={<Report />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;