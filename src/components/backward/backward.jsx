import { Link } from "react-router-dom";
import s from "./backward.module.css";
import Backwardimg from "../../assets/icon/backward.svg"

const Backward = () => {
  return (
    <div className={s.btn}>
      <Link >
        <div className={s.btn__wrapper}>
          <img src={Backwardimg} alt="кнопка выхода" />
          <h4 className={s.btn__title}>Backward</h4>
        </div>
      </Link>
    </div>
  );
};

export default Backward;
