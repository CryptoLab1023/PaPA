import React, { Component } from 'react';
import EditBar from './EditBar';
import MyPoint from './MyPoint';
import MyIine from './MyIine';

export default class MyInfoMein {
    render() {
        return (
            <div>
                <EditBar />
                <MyPoint />
                <MyIine />
            </div>
        )
    }
}