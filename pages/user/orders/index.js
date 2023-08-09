import Layout from '@/components/Layout'
import OrdersController from '@/components/Orders/OrdersController';

const index = () => {
  const seoHead = {
    title: "User Order",
    content: "User Order de la pagina web",
    description: "User Order de la pagina web",
    keywords: ["trend", "trove", "moda", "ropa", "estilo", "trendtrove"],
  };
  return (
    <Layout {...seoHead}>
      <OrdersController />
    </Layout>
  )
}

export default index