import Layout from "@/components/Layout";
import ProductsController from "@/components/Products/ProductsController";

export default function Home() {
  const seoHead = {
    title: "Category products",
    content: "Category products de producto",
    description: "Category products de producto",
    keywords: ["trend", "trove", "moda", "ropa", "estilo", "trendtrove"],
  }
  return (
    <Layout {...seoHead}>
      <ProductsController type="category" />
    </Layout>
  );
}