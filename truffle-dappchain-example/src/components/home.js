import React, {Component} from 'react' ;
import Woman from './woman';
import Seek from './seek';

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
                                        <li className="dropdown">
                                            <a href="">
                                                <img src="../img/heart_1817-500x375.png" alt="" width="25px" height="25px" /> 
                                                <small>お相手から</small>
                                            </a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="">
                                                <img src="../img/1771.png" alt="" width="25px" height="25px" />
                                                <small>メッセージ</small>
                                            </a>
                                        </li>
                                        {/* <!--font awesome, image適当に３種類ほど--> */}
                                        <li className="dropdown">
                                            <a href="">
                                                <img src="../img/icon-home-c01.png" alt="" width="25px" height="25px" />
                                                <small>マイページ</small>
                                            </a>
                                        </li>
                                        { /* <!--font awesome, image適当に３種類ほど-->*/}
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
        </div>
    )
    }
}
