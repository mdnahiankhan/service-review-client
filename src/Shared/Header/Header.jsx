import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/image.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>

        <li className='font-semibold'><Link to='/login'> {
            user?.uid ? <>
                <li className='font-semibold'><Link to='/review'>My Reviews</Link></li>
                <li className='font-semibold'><Link to='/myorders'>My Orders</Link></li>
                <span className='mx-2'>{user?.displayName}</span>
                <li className='font-semibold' onClick={handleLogOut}>Log Out</li>
            </> : <Link className='font-semibold' to='/login'>Login</Link>
        }</Link></li>
        <li>{user?.photoURL ?
            <img className='w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800' src={user?.photoURL} title={user?.displayName} alt="" /> : <>
            </>
        }</li>
    </>

    return (
        <div>
            <div className="navbar h-20 mt-5 bg-base-100 max-w-screen-xl mx-auto">
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
                    <Link className="btn btn-outline btn-primary">Get started</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;