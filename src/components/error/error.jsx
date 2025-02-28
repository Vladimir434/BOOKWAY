import error from "../../assets/icon/Error.svg";
import Footer from "../footer/footer";
import Header from "../header/header";
import Reviews from "../Reviews/reviews";
import s from "./error.module.css";
const Error = () => {
  return (
    <>
      <Header />
      <main className={s.main}>
        <h1>Упс ошибочка...</h1>
        <img className={s.main__img} src={error}></img>
      </main>
      <Reviews />
      <Footer />
    </>
  );
};

export default Error;
