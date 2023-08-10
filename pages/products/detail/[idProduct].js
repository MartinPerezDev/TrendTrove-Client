import Layout from "@/components/Layout";
import DetailProductController from "@/components/DetailProduct/DetailProductController";

export default function Home() {
  const seoHead = {
    title: "Detail product",
    content: "Detail product de producto",
    description: "Detail product de producto",
    keywords: ["trend", "trove", "moda", "ropa", "estilo", "trendtrove"],
  }
  return (
    <Layout {...seoHead}>
      <DetailProductController />
    </Layout>
  );
}