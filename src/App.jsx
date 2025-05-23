import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import ScrollToTop from "./components/skroltop/skroltop";
import Profile from "./components/profile/profile";
import Products from "./components/pages/products/products";
import Comments from "./components/comments-page/comments-page";
import ProtectedRoute from "./components/protectedRoute/Protected-route";
import ProfileDetails from "./components/profile-details/profile-details";
import WebApp from "@twa-dev/sdk";

const Login = lazy(() => import("./components/auth/login/login"));
const Basket = lazy(() => import("./components/pages/basket/basket"));
const MainPage = lazy(() => import("./components/pages/main-page/main-page"));
const Registr = lazy(() => import("./components/auth/registr/registr"));
const About = lazy(() => import("./components/pages/about/about"));
// const Order = lazy(() => import("./components/pages/order/order"));
const Error = lazy(() => import("./components/error/error"));
const Product = lazy(() => import("./components/pages/product/product"));
const Straight = lazy(() => import("./components/pages/straight/straight"));
const AdminPanel = lazy(() => import("./components/admin/admin-panel"));

function App() {
  useEffect(() => {
    if(WebApp.platform !== 'unknown'){
      WebApp.expand();
      WebApp.enableClosingConfirmation()

      console.log('Telegram user', WebApp.initDataUnsafe?.user);
      
    }
  },[])
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<h3 style={{textAlign:'center', fontSize:'23px', fontWeight:'400', marginBottom:'20px'}}>загруска</h3>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registr" element={<Registr />} />
          <Route path="/about" element={<About />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/straight" element={<Straight />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/ads/:id" element={<ProfileDetails />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin-panel" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App
