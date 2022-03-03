import React from 'react';
import "./Header.css"
import Navigation from '../navigation/Navigation';
import {Link, Outlet} from 'react-router-dom';

import { useState } from 'react';
import UseMediaquery from '../../hooks/useMediaquery';
import {MEDIA_QUERY_TABLET } from "../../config"
import { navBar ,navClose } from '../../icon';
const Header = () => {
    const mediaQuery  = UseMediaquery(`${MEDIA_QUERY_TABLET}`);
    
    const [showNavigation , setShowNavigation] = useState(false);
    const showNavigationHandler =() =>{
        setShowNavigation( (prev) => !prev);
    }

    console.log(showNavigation);
    return (
        <div>
            <div className='head__container' >
                <div className='head__logo--container'>
                    <Link className='head__logo' to = "/"/>    
                </div>
            {
                mediaQuery && (
                    <button
                    onClick ={showNavigationHandler}
                    className="btnBar"
                    >
                    <span>
                        {
                            ! showNavigation
                            ? navBar
                            : navClose
                        }
                    </span>
                    </button>
                )
            }               
                <div className='head__navigation'>
                    <Navigation showNavigation={showNavigation}/>
                </div>
            </div>
          <Outlet/> 
        </div>
    );
}

export default Header;
