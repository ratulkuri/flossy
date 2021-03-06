import React from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from "../../assets/crown.svg";
import './header.style.scss';

const Header = ({currentUser}) => {
    console.log(currentUser);
    return (
        <div className="header">
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    Shop
                </Link>
                <Link className='option' to='/contact'>
                    Contact
                </Link>

                {
                    (currentUser && currentUser.photoURL) ?
                    <div className="dp" style={{ backgroundImage: `url(${currentUser.photoURL})` }}></div>
                    : null
                }
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>
                        Sign Out
                    </div>
                    :
                    <Link className='option' to='/login'>
                        Sign In
                    </Link>
                }
            </div>
        </div>
    );
}

export default Header;