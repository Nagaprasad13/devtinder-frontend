import { useNavigate } from "react-router"
import {useDispatch} from "react-redux"
import {removeUser} from "../redux/userSlice"
import axios from "axios"
import { BASE_URL } from "../constants/constant";
export const Navbar = () => {
  const Dispatch=useDispatch();
  const navigate=useNavigate();
  const handleLogout=async ()=>{
      try{
        await axios.post(BASE_URL+"logout",{},{
          withCredentials:true
        }); 
        Dispatch(removeUser());
        navigate("/login")
      }
      catch(err){
        console.log(err);
      }
  }
  return (
    <div>
          <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex gap-2">
        <input type="text" placeholder="Search" className="input w-24 md:w-auto" />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}