import UserInfo from './UserInfo';
import users from '../data/data';

const Users = () => {
  return (
    <div className="users-list">
      {users.map((user) => {
        return <UserInfo key={user._id} {...user} />;
      })}
    </div>
  );
};

export default Users;
