import React from 'react';
import {NavLink} from "react-router-dom";
import './../App.css';
//активный стиль
export const Nav = () => {
    return (
        <div className={'NavStyle'}>
            <div className={'article'}><NavLink activeClassName={'active'} to={'/Article1'}>Article 1</NavLink></div>
            <div className={'article'}><NavLink activeClassName={'active'} to={'/Article2'}>Article 2</NavLink></div>
          </div>
    )
}