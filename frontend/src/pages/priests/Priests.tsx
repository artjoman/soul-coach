import React, { Component } from 'react';
import './Priests.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImgOverlay
} from 'reactstrap';

class Priests extends Component {
    render() {
        return (
            <div className="priests-container">
                    <div className="online-priests">
                        <Card>
                            <CardImg className="card-image" src={require('../../assets/images/priest1.png')} alt="Father Samuel" />
                            <CardTitle>Father Samuel</CardTitle>
                            <CardSubtitle>Online</CardSubtitle>
                        </Card>
                    </div>
                    <br/>
                    <br/>
                    <div className="online-priests">
                        <Card>
                            <CardImg className="card-image" src={require('../../assets/images/priest1.png')} alt="Father Samuel" />
                            <CardTitle>Father Samuel</CardTitle>
                            <CardSubtitle>Online</CardSubtitle>
                        </Card>
                    </div>
                    <br/>
                    <br/>
                    <div className="online-priests">
                        <Card>
                            <CardImg className="card-image" src={require('../../assets/images/priest1.png')} alt="Father Samuel" />
                            <CardTitle>Father Samuel</CardTitle>
                            <CardSubtitle>Online</CardSubtitle>
                        </Card>
                    </div>
                    <br/>
                    <div className="online-priests">
                        <Card>
                            <CardImg className="card-image" src={require('../../assets/images/priest1.png')} alt="Father Samuel" />
                            <CardTitle>Father Samuel</CardTitle>
                            <CardSubtitle>Online</CardSubtitle>
                        </Card>
                    </div>
            </div>
        );
    }
}

export default Priests;