import { useEffect, useState } from 'react';
import Comment from './Comment';
import style from './Comments.module.css';
import ButtonsComment from './ButtonsComment';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');
  const [isLoad, setIsLoad] = useState(true);
  const [lengthShow, setLengthShow] = useState('');
  const [lengthShowChange, setLengthShowChange] = useState(10);

  const showMoreComments = (value) => {
    setLengthShowChange(value);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((comments) => {
        setComments(comments);
        setLengthShow(comments.length);
      })
      .catch((e) => setError(e.message))
      .finally(() => setIsLoad(!isLoad));
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <div className={style.commentList}>
        {isLoad && <h1>LOADING COMMENTS...</h1>}
        {comments.map(
          (e, i) => i < lengthShowChange && <Comment {...e} key={e.id} />
        )}
      </div>
      <ButtonsComment showMore={showMoreComments} lengthShow={lengthShow} />
    </>
  );
};

export default Comments;
