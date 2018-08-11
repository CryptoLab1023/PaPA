import React, {Component} from 'react' ;


export default class Woman extends React.Component {

    render() {

        const style = {
            "backgroundColor": "blue",
        }

        return (
            <div className = "select-woman" style = {style} >
                <div className="select-img">
                    <img src="../img/www.pakutaso.com-shared-img-thumb-SAYA160312500I9A3721-400x287.jpg" alt="" />
                    <div className="select-age-message">
                        <div className="select-info">
                            <span>25才</span>
                            <span>東京都</span>
                        </div>
                        <div className="select-message-container">
                            <span className="select-message">message</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
