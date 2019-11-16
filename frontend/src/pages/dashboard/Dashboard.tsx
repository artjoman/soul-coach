import React, { Component } from 'react';
import CarouselStreams from '../../components/carousel-streams/CarouselStreams';
import CarouselLink from '../../components/carousel-link/CarouselLink';
import './Dashboard.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardImgOverlay
} from 'reactstrap';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container">

                <div className="break-after-medium">
                    <CarouselStreams></CarouselStreams>
                </div>

                <div className="break-after-medium">
                    <Card>
                        <CardImg class="" top width="100%" src={require('../../assets/images/stream-card.png')} alt="Soul Coach Stream" />
                        <div className="gray-overlay"></div>
                        <CardImgOverlay>
                            <CardTitle>Soul Coach Stream</CardTitle>
                            <CardSubtitle>Records & upcoming Streams</CardSubtitle>
                        </CardImgOverlay>
                    </Card>
                </div>

                <div className="break-after-medium">
                    <CarouselLink></CarouselLink>
                </div>

            </div>
        );
    }
}

export default Dashboard;