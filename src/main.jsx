import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/react'
import { DataProvider } from './context/DataContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from "react-scroll-to-top";

// Env variable se publishable key pass karo
const PUBLISHABLE_KEY = "pk_test_bG92aW5nLWVlbC0yODk2LmNsZXJrLmFjY291bnRzLmRldiQ"

if (!PUBLISHABLE_KEY) {
  console.error("Clerk Key nahi mili! Apni .env file check karo.")
}

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <DataProvider>
      <CartProvider>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <App />
          <ScrollToTop color='white' smooth style={{backgroundColor:'#fa2d37', display:'flex', alignItems:'center', justifyContent:'center'}}/>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ClerkProvider>
      </CartProvider>

    </DataProvider>
  // </StrictMode>,
)

