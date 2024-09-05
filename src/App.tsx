import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/molecules/Navbar';
import Products from './components/templates/Products';
import Modal from './components/templates/Modal';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Navbar />
      <Toaster position='top-right' />
      <Routes location={background || location}>
        <Route
          path='/'
          element={
            <div className='max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 '>
              <Products />
            </div>
          }>
          <Route path='/modal' element={<Modal />} />
        </Route>
      </Routes>

      <Routes>
          <Route path="modal" element={<Modal />} />
        </Routes>
    </>
  );
}

export default App;
