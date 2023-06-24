import { ProductsProvider } from '@/context/ProductsContext'
import { AuthProvider } from '@/context/AuthContext'

import "react-toastify/dist/ReactToastify.css";
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ProductsProvider>
        <Component {...pageProps} />
      </ProductsProvider>
    </AuthProvider>
  )
}
