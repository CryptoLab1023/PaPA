import React, {Component} from 'react' ;
import Woman from './woman';
import Navbar from './navbar';

export default class selectMein extends Component {

    render() {
    return (
        <div>
            {/* start nav-bar */}
            <Navbar />
            {/* end nav-bar */}
            {/* start select-woman */}
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
            {/* end select-woman */}
        </div>
    )
    }
}
