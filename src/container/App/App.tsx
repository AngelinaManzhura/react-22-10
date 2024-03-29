import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import AboutPage from 'pages/AboutPage/AboutPage'
import ShippingPage from 'pages/ShippingPage/ShippingPage'
import PaymentPage from 'pages/PaymentPage/PaymentPage'
import ProductPage from 'pages/ProductPage/ProductPage'
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage'
import CheckoutPage from 'pages/CheckoutPage/CheckoutPage'

type Props = {}

const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Container
                sx={{
                    padding: '60px 0',
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/shipping" element={<ShippingPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/products/:id" element={<ProductPage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
