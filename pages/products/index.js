import Layout from "@/components/Layout";
import ProductsController from "@/components/Products/ProductsController";

export default function Home() {
  const seoHead = {
    title: "Products",
    content: "Products list",
    description: "Products list",
    keywords: ["trend", "trove", "moda", "ropa", "estilo", "trendtrove"],
  }
  return (
    <Layout {...seoHead}>
      <ProductsController />
    </Layout>
  );
}