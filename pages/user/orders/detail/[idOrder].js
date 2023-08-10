import Layout from "@/components/Layout";
import OrderDetailController from "@/components/Orders/Detail/OrderDetailController";

export default function Home() {
  const seoHead = {
    title: "Cart order",
    content: "Cart order de la pagina web",
    description: "Cart order de la pagina web",
    keywords: ["trend", "trove", "moda", "ropa", "estilo", "trendtrove"],
  }
  return (
    <Layout {...seoHead}>
      <OrderDetailController />
    </Layout>
  );
}
