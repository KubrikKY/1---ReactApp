import React from 'react';

const Header = ({ userNameLog }) => {
  const [userName, changeUserName] = React.useState(userNameLog);
  const [toggleState, toggleChange] = React.useState(true);

  const changeUserNameHandler = (e) => {
    let bigFirstLetterStr =
      e.target.value[0].toUpperCase() + e.target.value.slice(1);
    changeUserName(bigFirstLetterStr);
  };

  const toggleChangeHandler = () => {
    toggleChange(!toggleState);
  };

  const enterDownInput = (e) => {
    if (e.code === 'Enter') {
      toggleChange(!toggleState);
    }
  };

  let inputChangeName = toggleState ? (
    <div>
      <input
        type="text"
        placeholder="Изменить имя?"
        onChange={changeUserNameHandler}
        onKeyDown={enterDownInput}
      />
      <button onClick={toggleChangeHandler}>Отменить</button>
    </div>
  ) : (
    <button onClick={toggleChangeHandler}>Изменить имя</button>
  );

  return (
    <header>
      <div style={{ height: 100 }}>
        <h2>Hello {userName}</h2>
        {inputChangeName}
      </div>
    </header>
  );
};

export default Header;
