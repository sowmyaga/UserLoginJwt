import React,{useState} from 'react';
import UserLogin from "../components/Login";

const UserRegister=()=>{
    const [islogin,setIsLogin]=useState(false);
    const [userName,setuserName]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const handleRegister=()=>{
        setIsLogin(true) 
    }
    const handleUserName=(e)=>{
        setuserName(e.target.value) 
    }
    const handleemail=(e)=>{
        setemail(e.target.value) 
    }
    const handlepassword=(e)=>{
        setpassword(e.target.value) 
    }
return(
   <>
   <div>
   <input type="text" placeholder='userName'onChange={handleUserName} value={userName}/>
   <input type="email" placeholder='email' onChange={handleemail} value={email}/>
   <input type="password" placeholder='password' onChange={handlepassword} value={password}/>
   <button onClick={handleRegister}>Register</button>
   </div>
   {islogin?<UserLogin/>:""}
   </>
)
}

export default UserRegister;