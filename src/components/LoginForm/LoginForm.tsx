import axios from "axios";
import { useEffect, useState } from "react"
import { redirect } from "react-router-dom";

const Login = () =>{
 const [email , setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [tokenUser, setTokenUser] = useState('') 

//  const handleSubmit = async(e:any) =>{
//   e.preventDefault();

//   const response = await axios.post('http://localhost:8081/api/v1/auth/authenticate',{email, password})

//   if(response.request){
//     try{
//     const {token} = await response.data
//     localStorage.setItem('token', token)
  
//   }
//     catch(err) { console.log(err)}
//   }
 
//  }
  return (
    <div>


      {/* <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form> */}
    </div>
  );
  
};


export default Login;