import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
});

type Product = z.infer<typeof ProductSchema>;

const fetchProducts = async (): Promise<Product[]> => {
  const data = await fetch("https://dummyjson.com/products", {
    // cache: "force-cache",
  });
  const res = await data.json();
  return res.products;
};

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="flex gap-x-4">
            <span>{product.id}</span>
            <span>{product.title}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
