import React, { Component } from 'react';
import './Start1.css';
import { useHistory } from "react-router-dom"

class Start1 extends Component {

    history = useHistory();

    handleClick() {
        history.push("/start2");
    }

    render() {
        return (
            <div className="start-container">

                <div className="break-after-large">
                    This is <b>not</b> a psychological therapy.
                </div>
                <div className="break-after-large">Soul Coach is based on
                    <b>religious support approach.</b>
                </div>

                <div className="break-after-large">
                    This is a platform based on <b>your religion.</b>
                </div>
                <div className="break-after-large">
                    We help you to <b>build, reconnect or strengthen</b> the relationship with your religious community.
                    </div>
            </div>
        );
    }
}

export default Start1;