import React, {Component} from 'react' ;
import Woman from './woman';
import Seek from './seek';
import Navbar from './navbar';

export default class Home extends Component {

    render() {
    return (
        <div>
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
                {/* end nav-barF */}

                {/* start select-woman */}
            <div className="select-wrapper">
                <Woman />
                <Woman />
                <Woman />
                <Woman />
                <Woman />
            </div>
            <Navbar />
            <div className="select-wrapper">
                <Woman />
                <Woman />
                <Woman />
                <Woman />
                <Woman />
                <Woman />
                <Woman />
                <Woman />
                <Woman />
                <Woman />
                <Woman />
                <Woman />
                <Woman />
                <Woman />
                <Woman />
            </div>
        </div>
    )
    }
}
