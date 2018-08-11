import React, {Component} from 'react';

export default class EditBar {
    render () {
        return (
            <div>
                <div className="edit-bar-wrapper">
                    <div className="edit-bar-img">
                        <img src=""  className="myface-img"/>
                    </div>
                    <div className="name-editlink-wrapper">
                        <span className="myname">オム</span>
                        <a link=""><span>プロフィール編集</span></a>
                    </div>
                </div>
            </div>
        )
    }
}