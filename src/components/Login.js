import "../styles/Login.css";
import {Link} from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Amazon logo" />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <label for="email">E-mail</label>
          <input id="email" type="text" />
          <label for="password">Password</label>
          <input id="password" type="password" />
          <button className="login__signInButton">Sign In</button>
        </form>
        <p>By signign-in you agree to the Amazon Clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
        <button className="login__registerButton">Create your Amazon account</button>
      </div>
    </div>
  );
}

export default Login;