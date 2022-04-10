import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'


const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div>
            <nav className='header'>
                <Link to='/'>Home</Link>
                <Link to='/product'>Products</Link>
                <Link to='/order'>Orders</Link>
                <Link to='/register'>Register</Link>
                {
                    user?.uid
                        ?
                        <button onClick={handleSignOut}>SignOut</button>
                        :
                        <Link to='/login'>Login</Link>
                }

            </nav>
        </div>
    );
};

export default Header;