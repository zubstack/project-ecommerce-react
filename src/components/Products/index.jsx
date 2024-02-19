import ProductCard from '../ProductCard';

function Products({ products }) {
  return (
    <main className='main__products grid gap-4 grid-cols-4 w-full max-w-screen-lg mb-12'>
      {products.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </main>
  );
}

export default Products;
