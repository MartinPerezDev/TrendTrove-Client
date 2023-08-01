import Layout from "@/components/Layout";
import DetailProductController from "@/components/DetailProduct/DetailProductController";

export default function Home() {
  const seoHead = {
    title: "Descripcion",
    content: "Descripcion de producto",
    description: "Descripcion de producto",
    keywords: ["trend", "trove", "moda", "ropa", "estilo", "trendtrove"],
  }
  return (
    <Layout {...seoHead}>
      <DetailProductController />
    </Layout>
  );
}