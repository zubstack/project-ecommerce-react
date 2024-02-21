import ShoppingAside from '../../components/ShoppingAside';
import { useContext, useEffect, useState } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingContext';
import endpoints from '../../services/endpoints';
import Billboard from '../../components/Billboard';
import Products from '../../components/Products/index.jsx';

function Home() {
  const [products, setProducts] = useState([]);
  const { shoppingOpen, closeShoppingAside } = useContext(ShoppingCartContext);

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
      <ShoppingAside
        closeShoppingAside={closeShoppingAside}
        shoppingOpen={shoppingOpen}
      />
    </div>
  );
}

export default Home;

//PENDING: Loading Squeleton
//PENDING: Footer
