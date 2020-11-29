import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header";
import {Nav} from "./components/Nav";
import {Body} from "./components/Body";
import { Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header/>
            <div className={'GeneralBlock'}>
                <Nav/>
                <Body/>
            </div>

        </div>
    );
}

export default App;
