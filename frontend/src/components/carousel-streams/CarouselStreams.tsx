
import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ReactSlick from 'react-slick';

const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
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