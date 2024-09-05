import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BsCartPlus } from 'react-icons/bs';
import { TbShoppingCartSearch } from 'react-icons/tb';
import { CiSquareRemove } from 'react-icons/ci';

import Stars from '../atoms/Stars';
import { useCartContext } from '../../contexts/cart_context';
// import { useState } from 'react';

const Product = (product: Product) => {
  const navigate = useNavigate();

  const [amount, setAmount] = useState(0);

  const increase = () => {
    setAmount((oldAmount) => oldAmount + 1);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { addToCart, cart, removeItem }: any = useCartContext();

  const { id } = product;
  const filterCart = cart.find((item) => item.id === id);
  return (
    <div className='bg-white shadow-xl rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>
      <a href='#' className='relative'>
        <img
          src={product.image}
          alt='Product'
          className='h-72 w-full object-cover rounded-t-xl'
        />
      </a>
      <div className='px-4 py-3 w-full'>
        <span className='text-gray-400 mr-3 uppercase text-xs'>
          {product.brand}
        </span>
        <p className='text-lg font-bold text-black truncate block capitalize'>
          {product.title}
        </p>
        <p className='truncate'>{product.description}</p>
        <div className='flex items-center justify-between'>
          <Stars stars={product.rating} />
          <p className='text-lg font-semibold text-black cursor-auto my-3'>
            S/{product.price}
          </p>
        </div>

        <div className='flex justify-between cursor-pointer'>
          <div
            className='flex border p-2 rounded-lg'
            onClick={() => navigate(`/modal?productId=${product.id}`)}>
            <TbShoppingCartSearch size={24} color='black' />
            Vista previa
          </div>
          {filterCart && filterCart.amount > 0 ? (
            <button
              className='flex border p-2 rounded-lg'
              onClick={() => {
                setAmount((oldAmount) => oldAmount - 1);
                removeItem(product.id);
              }}>
              <CiSquareRemove size={24} color='black' />
              Remover
            </button>
          ) : (
            <button
              className='flex border p-2 rounded-lg'
              onClick={() => {
                if (amount === 0) {
                  increase();
                  addToCart(product, 1);
                }
              }}>
              <BsCartPlus size={24} color='black' />
              Agregar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
