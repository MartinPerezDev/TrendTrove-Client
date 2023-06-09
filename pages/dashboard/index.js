import DashboardController from "@/components/Dashboard/DashboardController";
import Layout from "@/components/Layout";

export default function index() {
  const seoHead = {
    title: "Dashboard",
    content: "Dashboard de la pagina web",
    description: "Dashboard de la pagina web",
    keywords: ["trend", "trove", "moda", "ropa", "estilo", "trendtrove"],
  };
  return (
    <Layout {...seoHead}>
      <DashboardController />
    </Layout>
  );
}