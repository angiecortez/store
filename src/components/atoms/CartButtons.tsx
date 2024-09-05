import React, { useRef, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CgRemove } from "react-icons/cg";

import { useCartContext } from '../../contexts/cart_context';
import useOutsideClick from '../../hooks/useOutsideClick';

function CartButtons() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { total_items,cart, total_price, removeItem }: any = useCartContext();
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  return (
    <div className='flex items-center' ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center mr-1 border-b-2 ${({
          isActive,
        }: {
          isActive: boolean;
        }) => (isActive ? 'cart__container active' : 'cart__container')} `}>
        Carrito
        <div className='relative ml-1 '>
          <FaShoppingCart color='blue' fontSize={32} />
          <span className='absolute -top-4 left-5 bg-red-600 text-white rounded-full p-1 w-[2rem]'>
            {total_items}
          </span>
        </div>
      </div>

      {isOpen && (
        <div
          className='absolute right-4 top-10 z-10 mt-2 sm:w-full lg:w-3/12  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
          role='menu'
          tabIndex={-1}>
          <div className='py-1' role='none'>
            <div className='max-w-xl'>
              <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                <div className='flex items-center justify-between px-4 py-3 bg-gray-200'>
                  <h1 className='text-lg font-bold'>Carrito de compras</h1>
                  <span className='text-gray-600'>({total_items} items)</span>
                </div>
                <div className='p-4'>
                  {cart.length > 0 ? cart.map((item) => {
                    return (
                      <div key={item.id} className='flex items-center mb-4'>
                        <img
                          className='h-16 w-16 object-contain rounded-lg mr-4'
                          src={item.image}
                          alt='Product'
                        />
                        <div>
                          <h2 className='text-sm font-bold truncate w-[180px]'>{item.title}</h2>
                          <div className='text-gray-600 flex'>S/{item.price}</div>
                        </div>
                        <button className='text-gray-600 hover:text-red-500' onClick={() =>removeItem(item.id)}>
                          <CgRemove/>
                        </button>
                      </div>
                    );
                  }) : <h1 className='text-lg font-bold text-center'>Cart is empty</h1>}
                  
                
                </div>
                <div className='px-4 py-3 bg-gray-200'>
                  <div className='flex justify-between items-center'>
                    <span className='font-bold text-lg'>Total:</span>
                    <span className='font-bold text-lg'>S/{total_price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartButtons;
