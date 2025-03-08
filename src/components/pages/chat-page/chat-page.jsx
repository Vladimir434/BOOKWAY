import s from "./chat-page.module.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";

const ChatPage = () => {
  return (
    <>
      <Header />
      <div className={s.main}>chat-page</div>
      <Footer />
    </>
  );
};

export default ChatPage;
