import React from 'react';
import "./Navigation.css"
import { NavLink } from 'react-router-dom';
const dataBtns = [
    {Text:"Home",path:"/"},
    {Text:"Destination",path:"/destination"},
    {Text:"Crew",path:"/crew"},
    {Text:"Technology",path:"/technology"},
]

const Navigation = (props) => {
    
    return (
        <div 
        className={
            props.showNavigation
            ?"hiddeShow"
            :""
        }
        >
            <ul className='navigation__container'>
                {
                    dataBtns.map(({Text ,path},index) =>(

                        <li key={index}> 
                        <NavLink 
                        to={path}
                        className={({isActive}) => (isActive ? "activeLink" :"")}
                        >
                            {Text}
                        </NavLink>
                        </li>
                        
                        ))
                  
                }
            </ul>
            
        </div>
    );
}

export default Navigation;
