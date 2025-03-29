import { useState, useEffect } from 'react';
import { useStore } from '../../store/comments/comments';
import Header from '../header/header';
import s from './comments-page.module.css';
import Footer from '../footer/footer';
import CardComment from '../card-comment/card-comment';
import CardCommentSkeleton from '../skeleton-comment.jsx/skeleton-comment';

const Comments = () => {
  const [text, setText] = useState('');
  const comments = useStore((state) => state.comments);
  const loadComments = useStore((state) => state.loadComments);
  const addComment = useStore((state) => state.addComment);
  const isFetching = useStore((state) => state.isFetching)

  useEffect(() => {
    const unsubscribe = loadComments();
    return () => unsubscribe && unsubscribe();
  }, [loadComments]);

  const handleSubmit = () => {
    if (!text.trim()) return;
    addComment(text);
    setText('');
  };

  return (
    <>
      <Header />
      <div className={s.main__wrapper}>
        <main className={s.main}>
          <h2 className={s.title}>Комментарии</h2>
          <div className={s.block__input}>
            <textarea
              className={s.input}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Введите комментарий..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit();
                }
              }}
            />
            <button className={s.button} onClick={handleSubmit}>
              Отправить
            </button>
          </div>
          <div className={s.block__comment}>
            {isFetching ? (
              Array(4)
              .fill(null)
              .map((_,i) => (
                <CardCommentSkeleton key={i}/>
              ))
            ) : 
            comments.map((comment, index) => (
              <CardComment
              key={index}
              date={comment.date}
              description={comment.text}
              name={comment.name}
              lastName={comment.lastName}
              />
            ))
          }
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Comments;
