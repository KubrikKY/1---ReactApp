const ButtonsComment = ({ showMore, lengthShow }) => {
  const lengthListButton = [];
  for (let i = 10; i <= lengthShow; i += 50) {
    lengthListButton.push(i);
  }
  return (
    <>
      <select onChange={(event) => showMore(event.target.value)}>
        {lengthListButton.map((e, i) => {
          return (
            <option key={i} value={e}>
              Показать {e}
            </option>
          );
        })}
      </select>
      <button onClick={(e) => showMore(4)}>Показать меньше</button>
    </>
  );
};

export default ButtonsComment;
