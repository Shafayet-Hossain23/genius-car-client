import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../ContextAPI/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const logoutHandler = () => {
        logOut()
            .then(() => {

            })
            .catch(() => {

            })
    }
    const listItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/order'>Orders</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </>
    return (
        <div className='sticky top-0 z-30 '>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {listItems}
                        </ul>
                    </div>
                    <div>
                        <img className='h-20 w-20 md:ml-0 ml-4' src={logo} alt="" />
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {listItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className='mr-8'><FaShoppingCart /></Link>
                    <Link className='mr-8'><FaSearch /></Link>
                    <div>
                        {
                            user?.uid ? <button title={user?.displayName} onClick={logoutHandler} className="btn btn-outline btn-error w-24">Log Out</button> : <Link to='/login'><button className="btn btn-outline btn-error w-24">Login</button></Link>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;