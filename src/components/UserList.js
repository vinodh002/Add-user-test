import Card from "./UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles["user-list"]}>
      <ul>
        {props.users.map((user) => (
          <li key={Math.random * 300}>
            {user.username} ({user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
