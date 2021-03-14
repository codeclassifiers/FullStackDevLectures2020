import { useState } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
export function RegistrationForm() {
  const [email, updateEmailText] = useState("");
  const [password, updatePasswordText] = useState("");
  const [confirmPassword, updateConfirmPasswordField] = useState("");
  const history = useHistory();

  async function handleRegistration() {
    if (password === confirmPassword) {
      // Method to register the user using firebase
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      localStorage.setItem("userToken", user.refreshToken);
      history.push("/home");
    } else {
      alert("Passwords do not match");
    }
  }
  return (
    <div className="w-100">
      <h1>Registration</h1>
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
        <div className="form-group mt-3">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => updateConfirmPasswordField(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={() => handleRegistration()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
