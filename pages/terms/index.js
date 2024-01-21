import Layout from "@/components/Layout";
import TermsController from "@/components/Terms/TermsController";

export default function Home() {
  const seoHead = {
    title: "Terms",
    content: "Terms",
    description: "Terms",
    keywords: ["trend", "trove", "moda", "ropa", "estilo", "trendtrove"],
  }
  return (
    <Layout {...seoHead}>
      <TermsController />
    </Layout>
  );
}