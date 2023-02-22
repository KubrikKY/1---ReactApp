const UserInfo = (props) => {
  const { picture, name, age, greeting, email, phone, company } = props;

  return (
    <div className="users-card">
      <img src={picture} />
      <h2>{name}</h2>
      <strong>{age}</strong>
      <p>{greeting}</p>
      <a email="true">{email}</a>
      <a phone="true">{phone}</a>
      <p>{company}</p>
    </div>
  );
};

export default UserInfo;
