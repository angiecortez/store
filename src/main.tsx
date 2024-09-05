import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.tsx';
import './index.css';
import { ProductsProvider } from './contexts/products.tsx';
import { CartProvider } from './contexts/cart_context.tsx';
createRoot(document.getElementById('root')!).render(
  <Router>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </Router>
);
