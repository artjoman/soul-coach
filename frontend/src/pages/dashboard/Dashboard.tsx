import React, { Component } from 'react';
import CarouselStreams from '../../components/carousel-streams/CarouselStreams';
import './Dashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <div className="welcome-of-the-day">Hello! Have a nice Day! </div>
                <h2>Soul Coach Streams</h2>
                <CarouselStreams></CarouselStreams>  
            </div>
        );
    }
}

export default Dashboard;