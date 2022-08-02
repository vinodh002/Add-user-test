import styles from "./AddUser.module.css";
import Card from "./UI/Card";
import Button from "./UI/Button";
import { useState } from "react";
import ErrorModal from "./UI/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isError, setIsError] = useState(true);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onUsernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const onAgeChangeHandler = (e) => {
    setAge(+e.target.value);
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const user = {
      username,
      age,
    };

    console.log(user.username.trim(), user.age);
    if (user.username.trim().length === 0) {
      setErrorTitle("Username error");
      setErrorMessage("Invalid username. Please enter valid one");
      setIsError(false);
      return;
    }
    console.log(user.age);
    if (user.age <= 0 || user.age === "") {
      setErrorTitle("Age error");
      setErrorMessage("Invalid Age. Please enter valid one");
      setIsError(false);
      return;
    }
    setAge("");
    setUsername("");
    props.onAddUser(user);
  };

  const ModalHandler = () => {
    setIsError(true);
  };

  return (
    <Card className={styles["add-user"]}>
      {!isError && (
        <ErrorModal
          title={errorTitle}
          message={errorMessage}
          ModalHandler={ModalHandler}
        />
      )}
      <form onSubmit={onFormSubmitHandler}>
        <input
          type="text"
          placeholder="Enter user name"
          onChange={onUsernameChangeHandler}
          value={username}
        />
        <input
          type="number"
          placeholder="Age ?"
          onChange={onAgeChangeHandler}
          value={age}
        />
        <Button type="submit">Add</Button>
      </form>
    </Card>
  );
};

export default AddUser;
