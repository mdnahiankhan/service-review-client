import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/image.png'
const Header = () => {

    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/'>My Reviews</Link></li>
        <li className='font-semibold'><Link to='/'>Add Service</Link></li>
        <li className='font-semibold'><Link to='/login'>Log In</Link></li>
    </>

    return (
        <div className="navbar h-20 mt-5 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost w-20 bg-violet-400 h-20 rounded-xl">
                        <img src={image} alt="" />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Making Memories</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn">Get started</Link>
            </div>
        </div>
    );
};

export default Header;