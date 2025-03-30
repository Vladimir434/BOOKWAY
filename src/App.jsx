import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollToTop from "./components/skroltop/skroltop";
import Profile from "./components/profile/profile";
import Products from "./components/pages/products/products";
import Comments from "./components/comments-page/comments-page";

const Login = lazy(() => import("./components/auth/login/login"));
const Basket = lazy(() => import("./components/pages/basket/basket"));
const MainPage = lazy(() => import("./components/pages/main-page/main-page"));
const Registr = lazy(() => import("./components/auth/registr/registr"));
const About = lazy(() => import("./components/pages/about/about"));
const Order = lazy(() => import("./components/pages/order/order"));
const Error = lazy(() => import("./components/error/error"));
const Product = lazy(() => import("./components/pages/product/product"));
const Straight = lazy(() => import("./components/pages/straight/straight"));
const AdminPanel = lazy(() => import("./components/admin/admin-panel"));

function App() {
  return (
    <>
      <Suspense fallback={<h1>загруска</h1>}></Suspense>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registr" element={<Registr />} />
        <Route path="/about" element={<About />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/order" element={<Order />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/straight" element={<Straight/>} />
        <Route path="/admin-panel" element={<AdminPanel/>} />
        <Route path="/comments" element={<Comments/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App
