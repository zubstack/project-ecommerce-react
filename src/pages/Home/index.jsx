import endpoints from '../../services/endpoints';
import Billboard from '../../components/Billboard';
import Products from '../../components/Products/index.jsx';
import { useEffect, useState } from 'react';

function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(endpoints.getAll);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error while getting products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='flex flex-col items-center text-center'>
      <Billboard />
      {/* <Banners /> */}
      <Products products={products} />
    </div>
  );
}

export default Home;

//PENDING: Loading Squeleton
//PENDING: Footer
