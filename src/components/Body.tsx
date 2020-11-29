import React from 'react';
import {Route} from 'react-router-dom';
import {Article1} from "./Article1";
import {Article2} from "./Article2";

export const Body = () => {
    return (
        <div className={'BodyStyle'}>
            <Route path={'/Article1'} component={Article1}/>
            <Route path={'/Article2'} component={Article2}/>
        </div>
    )
}