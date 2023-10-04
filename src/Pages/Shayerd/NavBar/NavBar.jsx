import { Link, NavLink } from "react-router-dom"
import Linke from "../../../assets/index 1.png"
import { useContext } from "react"
import { AuthContext } from "../../../Providers/AuthProvider"

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
    .then()
    .catch()
  }
  const link = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/careear">Careear</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>

  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {link}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link}
        </ul>
      </div>
      <div className="navbar-end ">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img className="mr-3" src={Linke} />
          </div>
        </label>
        {
          user ?
            <button onClick={handleSignOut} className="bg-slate-700  py-2 px-10 text-white font-medium ">Sign Out</button>
            :
            <Link to="/login">
              <button className="bg-slate-700  py-2 px-10 text-white font-medium ">Login</button>
            </Link>
        }

      </div>
    </div>
  )
}

export default NavBar