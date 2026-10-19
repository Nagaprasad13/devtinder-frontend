import { Outlet } from "react-router"
import { Navbar } from "./navbar"
import { Footer } from "./Footer"
export const Home = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
