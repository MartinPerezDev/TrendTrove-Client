import Layout from "@/components/Layout";
import SuccessController from "@/components/Orders/SuccessController";

export default function Home() {
  const seoHead = {
    title: "Cart order",
    content: "Cart order de la pagina web",
    description: "Cart order de la pagina web",
    keywords: ["trend", "trove", "moda", "ropa", "estilo", "trendtrove"],
  }
  return (
    <Layout {...seoHead}>
      <SuccessController />
    </Layout>
  );
}
