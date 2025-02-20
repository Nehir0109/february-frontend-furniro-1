import AboutPage from "@/pages/AboutPage/AboutPage";
import AuthPage from "@/pages/AuthPage/AuthPage";
import BlogPage from "@/pages/BlogPage/BlogPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "@/pages/CartPage/CartPage";
import CheckoutPage from "@/pages/CheckoutPage/CheckoutPage";
import ContactPage from "@/pages/ContactPage/ContactPage";
import HomePage from "@/pages/HomePage/HomePage";
import { Layout } from "./Layout";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import ProfilePage from "@/pages/ProfilePage/ProfilePage";
import ShopPage from "@/pages/ShopPage/ShopPage";
import SingleProductPage from "@/pages/SingleProductPage/SingleProductPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
