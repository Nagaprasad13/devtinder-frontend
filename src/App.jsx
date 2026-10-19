import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "./components/Home";
import {Login} from "./components/Login";
import { Profile } from "./components/Profile";
import { Code } from "./components/Code";
import { Hero } from "./components/Hero";
import { Signup } from "./components/Signup";
import { Provider } from "react-redux";
import { appStore } from "./redux/appStore";

const App = () => {
  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename="/">
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route index element={<Hero/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/code" element={<Code/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}


export default App