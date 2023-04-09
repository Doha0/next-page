import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar bg-slate-200">
                <div className="flex-1">
                    <div className="btn btn-ghost normal-case text-xl">
                        <Link to='/'>Next Page</Link></div>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/books'>Books</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;