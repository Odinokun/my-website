import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './pages/home';
import { Works } from './pages/works';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/works'>Works</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='works' element={<Works />} />
      </Routes>
    </>
  );
}

export default App;
