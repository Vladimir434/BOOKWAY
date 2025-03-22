import error from "../../assets/icon/Error.svg";
import s from "./error.module.css";
const Error = () => {
  return (
    <>
      <main className={s.main}>
        <h1>Упс ошибочка...</h1>
        <img className={s.main__img} src={error}></img>
      </main>
    </>
  );
};

export default Error;
