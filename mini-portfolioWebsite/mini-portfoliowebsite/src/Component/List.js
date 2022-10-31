import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/ListStyle.css';


const List=()=>{
    return(
        <>
    <header>
            <div className="container container-flex">
                <nav>
                    <div className='list'>
                        <NavLink exact to="/" 
                        className="listItem"
                        activeClassName="activeItem">Home</NavLink>
                        <NavLink to="/about"
                        className="listItem"
                        activeClassName="activeItem">About</NavLink>
                    </div>
                </nav>
            </div> 
    </header>
        </>
    )
}
export default List;