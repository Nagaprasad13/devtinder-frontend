import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router"
import { addUser } from "../redux/userSlice";
import { BASE_URL } from "../constants/constant";
export const Login = () => {
  const [emailId,setEmailId]=useState("");
  const [password,setPassword]=useState("");
  const Dispatch=useDispatch();
  const handleLogin=async()=>{
    try{
      const res=await axios.post(BASE_URL+"login",{
        emailId,password
      },{
        withCredentials:true
      });
      const {firstName,lastName,skills}=res.data;
      console.log({firstName,lastName,emailId,skills});
      Dispatch(addUser({firstName,lastName,emailId,skills}));
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <fieldset className="fieldset bg-base-200 border-base-200 rounded-box w-md min-h-100 border p-6">
      <legend className="fieldset-legend p-2 text-xl">Login</legend>
      <label className="label">Email</label>
      <input type="email" className="input input-lg" placeholder="Email" value={emailId} onChange={(e)=>setEmailId(e.target.value)}/>
      <label className="label">Password</label>
      <input type="password" className="input input-lg" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <Link to="/profile"><button className="btn btn-neutral mt-4" onClick={handleLogin}>Login</button></Link>
      <ul className="text-sm">New Here? <Link to='/signup'>Signup</Link></ul>
    </fieldset>
    </div>
  )
}
