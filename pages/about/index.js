import AboutController from "@/components/About/AboutController";
import Layout from "@/components/Layout";

export default function Home() {
  const seoHead = {
    title: "About",
    content: "About",
    description: "About",
    keywords: ["trend", "trove", "moda", "ropa", "estilo", "trendtrove"],
  }
  return (
    <Layout {...seoHead}>
      <AboutController />
    </Layout>
  );
}