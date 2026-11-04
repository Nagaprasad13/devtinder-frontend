import { Outlet } from "react-router"
import { Navbar } from "./navbar"
import { Footer } from "./Footer"
import axios from "axios"
import { BASE_URL } from "../constants/constant"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { addUser } from "../redux/userSlice"
import { useEffect } from "react"
export const Home = () => {
  const dispatch=useDispatch();
  const nagivate=useNavigate();
  const userData=useSelector((store)=>store.user);
  const fetchUser=async ()=>{
    if(userData) return;
    try{
      const res=await axios.get(BASE_URL+"profile",{
        withCredentials:true
      });
      dispatch(addUser(res.data));
    }
    catch(err){
      if(err.status===401){
        nagivate("/login");
      }
      console.error(err);
    }
  };
  useEffect(()=>{
    fetchUser()
  },[])
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
