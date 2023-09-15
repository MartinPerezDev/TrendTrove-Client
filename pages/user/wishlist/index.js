import Layout from '@/components/Layout'
import WishListController from '@/components/WishList/WishListController';

const index = () => {
  const seoHead = {
    title: "Wishlist",
    content: "Wishlist de la pagina web",
    description: "Wishlist de la pagina web",
    keywords: ["trend", "trove", "moda", "ropa", "estilo", "trendtrove"],
  };
  return (
    <Layout {...seoHead}>
      <WishListController />
    </Layout>
  )
}

export default index