import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

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
      </Routes>
    </>
  );
}

export default App



// import './App.css'
// import Header from './components/header/header'
// import MainPage from './components/pages/main-page/main-page'

// function App() {

//   return (
//     <>
//       <Header/>
//       <MainPage/>
//     </>
//   )
// }

// export default App