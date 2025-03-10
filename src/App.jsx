import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollToTop from "./components/skroltop/skroltop";
import Profile from "./components/profile/profile";
import Products from "./components/pages/products/products";

const Login = lazy(() => import("./components/auth/login/login"));
const MainPage = lazy(() => import("./components/pages/main-page/main-page"));
const Registr = lazy(() => import("./components/auth/registr/registr"));
const About = lazy(() => import("./components/pages/about/about"));
const Error = lazy(() => import("./components/error/error"));
const Chat = lazy(() => import("./components/pages/chat-page/chat-page"));

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
        <Route path="/profile" element={<Profile/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App
