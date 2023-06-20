import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import useFetch from "../../Hooks/useFetch";
import { urlApi } from "../../Data";

function Home() {
  const items = useFetch(`${urlApi}/products`);

  return (
    <Layout>
      <h1 className="p-10">Home</h1>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
