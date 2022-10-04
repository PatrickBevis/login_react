import React from 'react';




const LoginScreen = () => {
    
    const handleSubmit= (event) =>{
    event.preventDefault();
   const form = event.target;
   const formData = new FormData(form);
   const jsonData = Object.fromEntries(formData.entries());
   console.log(jsonData);
}
    return (
        <>
           <h1>LoginScreen</h1>
           <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1"  className="form-label">Email address</label>
    <input type="email" className="form-control"name="login" id="login" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" id="password"/>
  </div>
 
  <button type="submit" className="btn btn-">Envoyer</button>
</form>


        </>
    );
};

export default LoginScreen;