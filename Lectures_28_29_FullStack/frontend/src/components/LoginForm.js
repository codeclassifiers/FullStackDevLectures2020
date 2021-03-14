import { useState } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
export function LoginForm() {
  const [email, updateEmailText] = useState("");
  const [password, updatePasswordText] = useState("");
  const history = useHistory();

  async function handleLogin() {
    try {
      // Method is to validate the user credentials
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      console.log(user);
      localStorage.setItem("userToken", user.refreshToken);
      history.push("/home");
    } catch (e) {
      console.log(e);
      alert(e.message);
    }
  }
  function handleRegistrationRedirect() {
    history.push("/register");
  }
  return (
    <div className="w-100">
      <h1>Login</h1>
      <div className="w-50 m-auto form-element-container">
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => updateEmailText(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => updatePasswordText(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={() => handleLogin()}
        >
          Submit
        </button>
        <h3>Not created an account yet?</h3>
        <button
          className="btn btn-success"
          onClick={() => handleRegistrationRedirect()}
        >
          Go To Registration
        </button>
      </div>
    </div>
  );
}
