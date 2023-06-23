import AuthController from '@/components/Auth/AuthController';
import Layout from '@/components/Layout'

const index = () => {
  const seoHead = {
    title: "Dashboard",
    content: "Dashboard de la pagina web",
    description: "Dashboard de la pagina web",
    keywords: ["trend", "trove", "moda", "ropa", "estilo", "trendtrove"],
  };
  return (
    <Layout {...seoHead}>
      <AuthController />
    </Layout>
  )
}

export default index