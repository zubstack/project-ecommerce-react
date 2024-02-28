import ProductCard from '../ProductCard';

function Products({ products }) {
  return (
    <main className='main__products grid gap-2 grid-cols-5 w-full mb-12 px-12'>
      {products.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
      {products.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
      {products.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
    </main>
  );
}

export default Products;
