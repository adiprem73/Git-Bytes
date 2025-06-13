// App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Report from './pages/Report';
import LoaderNew from './components/LoaderNew';
import Loader from './pages/Loader';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Report/:paramURL" element={<Report />} />
        <Route path="/Loader" element={<Loader />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;