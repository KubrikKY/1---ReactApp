import style from './Comments.module.css';

const Comment = ({ name, email, body }) => {
  return (
    <div className={style.commentCard}>
      <h3>{name}</h3>
      <a type="email">{email}</a>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
