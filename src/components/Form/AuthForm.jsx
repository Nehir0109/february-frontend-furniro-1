import { useSearchParams } from "react-router-dom";
import style from "./AuthForm.module.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState(""); // Sadece signup için gerekli
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const navigate = useNavigate();
  const handleTabNavigation = (authType) => {
    navigate(authType);
  };

  // Form submission process
  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === "login") {
      console.log("Login with:", { email, password });
    } else if (type === "signup") {
      console.log("Sign up with:", { fullName, email, password });
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h2 className={style.title}>
        {type === "login" ? "Login" : "Create your Free Account"}
      </h2>

      <div className={style.formContainer}>
        {type === "signup" && (
          <div className={style.inputContent}>
            <label className={style.label} htmlFor="fullName">
              Full name
            </label>
            <input
              className={style.input}
              type="text"
              id="fullname"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        )}
        <div className={style.inputContent}>
          <label className={style.label} htmlFor="email">
            Email address
          </label>
          <input
            className={style.input}
            type="email"
            id="email"
            placeholder="Abc@def.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={style.inputContent}>
          <label className={style.label} htmlFor="password">
            Password
          </label>
          <input
            className={style.input}
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className={style.socialButtonContainer}>
          <p className={style.text}>- OR -</p>
          <div className={style.socialButtonContent}>
            <button className={style.socialButton} type="button">
              <img src="./src/assets/AuthPage/github.svg" alt="GitHub Logo" />
              Sign up with GitHub
            </button>
            <button className={style.socialButton} type="button">
              <img src="./src/assets/AuthPage/google.svg" alt="Google Logo" />
              Sign up with Google
            </button>
          </div>

          {type === "signup" && (
            <div className={style.signupTextContainer}>
              <p className={style.signupText}>
                Already have an account?{" "}
                <button
                  className={style.signupButton}
                  type="button"
                  onClick={() => handleTabNavigation("/auth?type=login")}
                >
                  Log in
                </button>
              </p>
            </div>
          )}

          <button className={style.submitButton} type="submit">
            {type === "login" ? "Login" : "Create Acount"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
