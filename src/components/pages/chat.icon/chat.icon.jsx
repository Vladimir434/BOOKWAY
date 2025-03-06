import Chat from "../../../assets/icon/chat.svg";
import  s  from "./chat.icon.module.css";
import { Link } from "react-router-dom";
const ChatIcon = () => {
  return (
    <Link to="/chat" className={s.img__wrapper}>
      <img className={s.img__chat} src={Chat} alt="Chat" />
    </Link>
  )
}

export default ChatIcon