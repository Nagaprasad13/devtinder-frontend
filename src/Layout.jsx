    import './index.css';
    //import { Outlet } from 'react-router-dom';
    import { Navbar } from './components/navbar';
    import { Login } from './components/Login';
    function Layout() {
    return (
        <>
        <Navbar/>
        <Login/>    
        </>
    )
    }
    export default Layout;
