import { render, screen } from '@testing-library/react';
import Product from '../components/molecules/Product';

describe('Product component', () => {
  test('renders product', () => {
    const product = { id: 1, title: 'Product 1', price: '100', image: 'image.jpg', category: 'category', description: 'description' };
    render(<Product {...product} />);
    const productElement = screen.getByTestId('product');
    expect(productElement).toBeInTheDocument();
  });
});
