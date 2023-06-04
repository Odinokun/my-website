import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './pages/Home';
import { Works } from './pages/Works';
import { Button } from '@mui/material';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              <Button variant='outlined'>Home</Button>
            </NavLink>
          </li>
          <li>
            <NavLink to='/works'>
              <Button variant='outlined'>Works</Button>
            </NavLink>
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
