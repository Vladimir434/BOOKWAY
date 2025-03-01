import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Profile from "./components/profile/profile";

const Login = lazy(() => import("./components/auth/login/login"));
const MainPage = lazy(() => import("./components/pages/main-page/main-page"));
const Registr = lazy(() => import("./components/auth/registr/registr"));

function App() {
  return (
    <>
      <Suspense fallback={<h1>загруска</h1>}></Suspense>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registr" element={<Registr />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </>
  );
}

export default App
