
import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ReactSlick from 'react-slick';

const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    adaptiveHeight: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
};

class CarouselStreams extends Component {

    render() {
        return (
            <div className="dashboard-carousel-streams">
                <ReactSlick {...settings}>
                    <div>
                        <img src={require('../../assets/images/stream-card.png')} alt="" />
                    </div>
                    <div>
                        <img src={require('../../assets/images/stream2.jpg')} alt="" />
                    </div>
                    <div>
                        <img src={require('../../assets/images/stream3.jpg')} alt="" />
                    </div>
                    <div>
                        <img src={require('../../assets/images/stream1.jpg')} alt="" />
                    </div>
                    <div>
                        <img src={require('../../assets/images/stream2.jpg')} alt="" />
                    </div>
                    <div>
                        <img src={require('../../assets/images/stream3.jpg')} alt="" />
                    </div>
                    <div>
                        <img src={require('../../assets/images/stream1.jpg')} alt="" />
                    </div>
                    <div>
                        <img src={require('../../assets/images/stream2.jpg')} alt="" />
                    </div>
                    <div>
                        <img src={require('../../assets/images/stream3.jpg')} alt="" />
                    </div>
                </ReactSlick>
            </div>
        );
    }
}

export default CarouselStreams;