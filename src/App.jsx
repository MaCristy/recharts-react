import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Bar from './components/bar.jsx'
import Line from './components/line.jsx'
import Pie from './components/pie.jsx'


export default function App() {
  return (
    <div>
      <h1>Chart</h1>

      <nav>

        <Link to="/">Home</Link>
        <Link to="/line">Line</Link>
        <Link to="/bar">Bar</Link>
        <Link to="/pie">Pie</Link>

      </nav>


      <Routes>
        <Route path="/" element={<h2>Welcome to the Recharts Demo App</h2>} />
        <Route path="/line" element={<Line />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
      </Routes>
    </div>
  );
}
