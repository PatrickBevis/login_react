import React, { useContext,  useState } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";
import { validEmail, validPassword } from "../components/Regex.jsx";
import { Navigate } from "react-router-dom";
import { setCookie, deleteCookie } from "../helpers/cookieHelper.jsx";
import doFetch from "../helpers/fetchHelper.jsx";

const LoginScreen = () => {
  const { setAuth } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const validate = () => {
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
    }
    return !emailErr && !pwdError;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const jsonData = Object.fromEntries(formData.entries());
    console.log(jsonData);
    if (!validate()){
      return;
    }

    
    const {data, error} = await doFetch ("auth/login", {
      method: "POST",
      body: JSON.stringify(jsonData),
    })
    console.log(error);
      
  
        if (data?.result) {
          setAuth({ role: +data.role, id:+data.id});
          setCookie("blog",data.token, {'max-age':60 *60 *24});
          Navigate("/account");
        } else {
          setAuth({ role: 0, id: 0 });
          deleteCookie("blog");
        }
      
      

  
  };
  return (
    <>
      <h1>LoginScreen</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="login"
            id="login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby="emailHelp"
          />
          {emailErr && <p className="text-danger">Your email is invalid</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {pwdError && (
          <p className="text-danger">6 caracters including a capital letter</p>
        )}

        <button type="submit" onClick={validate} className="btn btn-primary">
          Envoyer
        </button>
      </form>
    </>
  );
};

export default LoginScreen;
