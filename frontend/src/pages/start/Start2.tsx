import React, { Component } from 'react';
import './Start1.css';
import { withRouter } from "react-router-dom";

class Start1 extends Component {

    handleClick = () => {
        window.location.href = '/dashboard';
    }

    render() {
        return (
            <div className="start-container" onClick={this.handleClick}>

                <div className="break-after-medium single-line fixed-width">
                    <span className="flex flex-image"><img src={require('./../../assets/images/catholic.svg')} /></span>
                    <span className="flex selector-subtitle">Catholic</span>
                </div>
                <div className="break-after-medium single-line fixed-width">
                    <span className="flex flex-image"><img src={require('./../../assets/images/Lutheran.svg')} /></span>
                    <span className="flex selector-subtitle">Lutheran</span>
                </div>
                <div className="break-after-medium single-line fixed-width">
                    <span className="flex flex-image"><img src={require('./../../assets/images/Orthodox.svg')} /></span>
                    <span className="flex selector-subtitle">Orthodox</span>
                </div>
                <div className="break-after-medium single-line fixed-width">
                    <span className="flex flex-image"><img src={require('./../../assets/images/Islam.svg')} /></span>
                    <span className="flex selector-subtitle">Islam</span>
                </div>
                <div className="break-after-large single-line fixed-width">
                    <span className="flex flex-image"><img src={require('./../../assets/images/Judaism.svg')} /></span>
                    <span className="flex selector-subtitle">Judaism</span>
                </div>
                <div className="break-after-medium single-line fixed-width">
                    ...
                </div>
                <div className="break-after-medium single-line fixed-width">
                    more to come soon!
                </div>

            </div>
        );
    }
}

export default withRouter(Start1);