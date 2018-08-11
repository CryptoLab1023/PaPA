import React, { Component } from 'react';
import Navbar from './navbar';
import MyInfo from './MyInfo';


export default class MyPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <MyInfo />
            </div>
        )
    }
}