/* eslint-disable @typescript-eslint/no-explicit-any */

import { useNavigate, useLocation } from 'react-router-dom';
import { CiCircleRemove } from 'react-icons/ci';

import { useProductsContext } from '../../contexts/products';
import { useCartContext } from '../../contexts/cart_context';

import { useEffect } from 'react';
import Stars from '../atoms/Stars';
import CardLoading from './CardLoading';

const Modal = () => {
  const { addToCart, cart, removeItem }: CartState = useCartContext();
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const productId = query.get('productId');

  const {
    single_product: product,
    single_product_loading: loading,
    single_product_error: error,
    fetchSingleProduct,
  }: any = useProductsContext();

  const filterCart = cart.some((item) => item.id == product.id);

  useEffect(() => {
    fetchSingleProduct(productId);
  }, [productId]);

  if (error) {
    return <h2>Error...</h2>;
  }
  if (loading) {
    return (
      <div className='page-w-b'>
        <CardLoading />
      </div>
    );
  }
  return (
    <div className='fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center'>
      <div
        aria-hidden='true'
        className='fixed inset-0 w-full h-full bg-black/50 cursor-pointer'></div>

      <div className='relative w-full cursor-pointer pointer-events-none transition my-auto p-4'>
        <div className='w-full py-2 bg-white cursor-default pointer-events-auto relative rounded-xl mx-auto max-w-sm'>
          <button
            onClick={() => navigate('/')}
            type='button'
            className='absolute top-2 right-2 rtl:right-auto rtl:left-2'>
            <CiCircleRemove size={24} color='black' />
          </button>

          <div className='bg-white mt-8'>
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

              <div className='px-6 py-2'>
                <div className='grid gap-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))]'>
                  <div></div>
                  {filterCart ? (
                    <button
                      onClick={() => {
                        removeItem(product.id);
                      }}
                      type='button'
                      className='inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset min-h-[2.25rem] px-4 text-sm text-white shadow focus:ring-white border-transparent bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-offset-red-700'>
                      <span className='flex items-center gap-1'>
                        <span className=''>Remover</span>
                      </span>
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart(product, 1)}
                      type='button'
                      className='inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset min-h-[2.25rem] px-4 text-sm text-white shadow focus:ring-white border-transparent bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-offset-red-700'>
                      <span className='flex items-center gap-1'>
                        <span className=''>Agregar</span>
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
