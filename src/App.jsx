import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav.jsx';
import { Footer } from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Committees from './pages/Committees.jsx';
import Secretariat from './pages/Secretariat.jsx';
import Registration from './pages/Registration.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/secretariat" element={<Secretariat />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
