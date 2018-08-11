import React, {Component} from 'react';
import Seek from './seek';


export default class Navbar {
    render () {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top am-top-header">
                    <div className="container-fluid">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a href="left-sidebar serch-sidebar"></a>
                            </div>
                            <div className="navbar-default navbar-collapse navbar-default navbar-form">
                                <div className="navbar-collapse">
                                    <ul className="navbar-right am-icons-nav nav navbar-nav">
                                        <Seek />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}