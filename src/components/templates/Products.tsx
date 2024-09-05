import { useProductsContext } from '../../contexts/products';
import Product from '../molecules/Product';

const Products = () => {
  const {
    products,
    products_loading: loading,
    products_error: error,
  }: AppState = useProductsContext();


  if (error) {
    return <h2>Error...</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 mt-12'>
      {products.map((product) => {
        return <Product {...product} />;
      })}
    </div>
  );
};

export default Products;
