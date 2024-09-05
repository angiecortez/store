import { Link } from 'react-router-dom';

import { FaStore } from 'react-icons/fa';
import CartButtons from '../atoms/CartButtons';

// import React from 'react'

function Navbar() {
  return (
    <div className='grid xl:grid-cols-1 grid-cols-1 h-20 bg-blue-100 items-center px-12 w-full fixed z-10'>
      <div>
        <div className='py-3 px-3 w-full'>
          <div className='flex justify-between items-center'>
            <Link to='/'>
              <FaStore color='black' fontSize={32} />
            </Link>
            <CartButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
