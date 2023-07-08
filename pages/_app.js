import { ProductsProvider } from '@/context/ProductsContext'
import { AuthProvider } from '@/context/AuthContext'
import { CartProvider } from '@/context/cartContext';

import "react-toastify/dist/ReactToastify.css";
import '@/styles/globals.css'
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductsProvider>
          <Component {...pageProps} />
        </ProductsProvider>
      </CartProvider>
    </AuthProvider>
  )
}
