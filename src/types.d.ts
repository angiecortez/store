interface Product {
  id:number;
  title:string | number;
  price:string;
  category:string;
  description:string;
  image:string;
  brand?:string;
  rating?: {
    rate:number;
    count:number;
  };
}

interface AppState {
  isSidebarOpen: boolean;
  products_loading: boolean;
  products_error: boolean;
  products: Product[];
  popular_products: Product[];
  single_product_loading: boolean;
  single_product_error: boolean;
  single_product: Product;
}

interface CartState {
  cart: Product[];
  total_items: number;
  total_price: number;
  isCheckout: boolean;
  addToCart: (product: Product, quantity:number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}