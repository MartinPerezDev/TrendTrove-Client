import Layout from "@/components/Layout";
import CategoryController from "@/components/CategoryProducts/CategoryController";

export default function Home() {
  const seoHead = {
    title: "Category products",
    content: "Category products de producto",
    description: "Category products de producto",
    keywords: ["trend", "trove", "moda", "ropa", "estilo", "trendtrove"],
  }
  return (
    <Layout {...seoHead}>
      <CategoryController />
    </Layout>
  );
}