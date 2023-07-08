import Layout from "@/components/Layout";
import CartController from "@/components/Cart/CartController";

export default function Home() {
  const seoHead = {
    title: "Cart",
    content: "Cart de la pagina web",
    description: "Cart de la pagina web",
    keywords: ["trend", "trove", "moda", "ropa", "estilo", "trendtrove"],
  }
  return (
    <Layout {...seoHead}>
      <CartController />
    </Layout>
  );
}
