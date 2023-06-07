import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
import { nav } from "../../data/Data";
import { useState } from 'react';

export const Header = () => {

    const [navList, setnavList] = useState(false);

    return (
        <>
            <header>
                <div className='container flex'>
                    <div className="logo">
                        <img src="./images/NEAblack.png" alt="logo" />
                    </div>
                    <div className="nav">
                        <ul className={navList ? "small" : "flex"}>
                            {nav.map((list, index) => (
                                <li key={index}>
                                    <Link to={list.path}>{list.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="button flex">
                        <h4>
                            <span>2</span>My list
                        </h4>

                        <button className='btn1'>
                            <i className="fa fa-sign-out"></i>Sign In
                        </button>

                        {/* <div className="toggle">

                        </div> */}
                    </div>

                    <button className="toggle" onClick={()=> setnavList(!navList)}>
                        {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                    </button>
                </div>
            </header>
        </>
    )
}
