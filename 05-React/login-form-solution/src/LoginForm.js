import { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import './LoginForm.css';

const LoginForm = () => {
  // setup user object with properties username, password, usernameMsg and passwordMsg
  const userInit = {
    username: "",
    password: "",
    usernameMsg: "",
    passwordMsg: "",
  };
  // instead of storing username and password separately, we are using a user object
  const [user, setUser] = useState(userInit);
  // overall message field for error or success message after validation of credentials
  const [message, setMessage] = useState('');

  /**
   * Validate input field contents, set error messages accordingly.
   * If inputs are valid, check for valid credentials and pop up welcome message,
   * otherwise pop up an alert.
   */
  const submitForm = (event) => {
    console.log(JSON.stringify(user));
    let uname = "", pwd = "";

    setMessage("");
    user.usernameMsg = "";
    user.passwordMsg = "";
    if (!user.username.trim().length) {
      user.usernameMsg = "Please enter a username";
    } else {
      uname = user.username;
    }
    if (!user.password.trim().length) {
      user.passwordMsg = "Please enter a password";
    } else {
      pwd = user.password;
    }
    setUser({ ...user });
    if (!uname.length || !pwd.length) {
      event.preventDefault(); // prevent submit
      return;
    }

    if (uname === "Hugo" && pwd === "123") {
      setUser(userInit);
      alert("Correct - welcome!");
    } else {
      setMessage('Invalid credentials (try Hugo/123)!');
    }

    event.preventDefault(); // prevent submit
  };

  return (
    <form onSubmit={submitForm}>
      <h2>Login</h2>
      <InputWithLabel
        focus
        initialValue={user.username}
        storeValue={(value) => setUser({ ...user, username: value })}
        message={user.usernameMsg}>
        Username:
      </InputWithLabel>
      <InputWithLabel
        type="password"
        initialValue={user.password}
        storeValue={(value) => setUser({ ...user, password: value })}
        message={user.passwordMsg}>
        Password:
      </InputWithLabel>
      <output className="message">{message}</output>
      <div className="button-div">
        <button>log me in!</button>
      </div>
    </form>
  );
}

export default LoginForm;