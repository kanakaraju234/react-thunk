import { useState } from "react";

export const Login = () => {

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const handleSubmit=(e)=>{
     e.preventDefault();
     console.log("Email:" + email)
     console.log("password:" + password)
     console.log("janu branch")
  }
  return (
    
    
    <div className="d-flex bg-white align-items-center justify-content-center   container rounded 0">
      <div className="p-3 rounded  w-30  "> 
        
        <form onSubmit={handleSubmit}>
          <div className="form-outline mb-2"> 
             <label htmlFor="email"><strong>Email address:</strong></label>
             <input type="email" autoComplete="off"  className="form-control rounded 0 " onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password"><strong>Password:</strong></label>
            <input type="password"  className="form-control rounded 0 mb-3" onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="form-check mb-4">
            <input className="form-check-input mt-2 " type="checkbox" value=""/>
            <label className="form-check-label m-1 " >Remember me</label>
            <span> <a href="#!">Forgot password?</a></span>
          </div>
         
         <button type="submit" className="btn btn-primary  mb-4 w-100 rounded 0">SIGN IN</button>

         <div className="text-center">
            <p>Not a member?<a href="#!">Register</a></p>
            <p>or sign up with:</p>
         </div>
           
        </form>
        
      </div>
      
    </div>
  
  );
};
