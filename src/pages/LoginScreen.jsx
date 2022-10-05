import React,{useState}from 'react';

import { validEmail, validPassword } from '../components/Regex.jsx';



const LoginScreen = () => {

  const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [emailErr, setEmailErr] = useState(false);
   const [pwdError, setPwdError] = useState(false);
   const validate = () => {
      if (!validEmail.test(email)) {
         setEmailErr(true);
      }
      if (!validPassword.test(password)) {
         setPwdError(true);
      }
   };

    
    const handleSubmit= (event) =>{
    event.preventDefault();
   const form = event.target;
   const formData = new FormData(form);
   const jsonData = Object.fromEntries(formData.entries());
   console.log(jsonData);


      fetch('http://blog.api/auth/login', {
        method: "POST",
        body: JSON.stringify(jsonData)
      }).then(resp => resp.json())
      .then(json => {
        console.log(json);
      })


}
    return (
        <>
           <h1>LoginScreen</h1>
           <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1"  className="form-label">Email address</label>
    <input type="email" className="form-control"name="login" id="login" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp"/>
   {emailErr && <p className='text-danger'>Your email is invalid</p>}
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
  </div>
  {pwdError && <p className='text-danger'>6 caracters including a capital letter</p>}

  <button type="submit" onClick={validate} className="btn btn-primary">Envoyer</button>

  
 
</form>


        </>
    );
};

export default LoginScreen;