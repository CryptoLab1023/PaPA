import React, {Component} from 'react';

export default class Seek {
    render() {
        return(
            <div>
                <li className="dropdown">
                <a href="">
                    <img src="../img/serch.gif" alt="" width="25px" height="25px" />
                    <small>さがす</small>
                </a>
                </li>
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
                <li className="dropdown">
                    <a href="">
                        <img src="../img/icon-home-c01.png" alt="" width="25px" height="25px" />
                        <small>マイページ</small>
                    </a>
                </li>
            </div>
        )
    }
}