import Layout from "@/components/Layout";
import HomeController from "@/components/Home/HomeController";

export default function Home() {
  const seoHead = {
    title: "Inicio",
    content: "Inicio de la pagina web",
    description: "Inicio de la pagina web",
    keywords: ["trend", "trove", "moda", "ropa", "estilo", "trendtrove"],
  }
  return (
    <Layout {...seoHead}>
      <HomeController />
    </Layout>
  );
}
