import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    CardDeck, Card, CardImg,
    CardTitle, CardSubtitle, CardImgOverlay
} from 'reactstrap';
import ReactSlick from 'react-slick';

import './CarouselLink.css';

const settings = {
    
    dots: true,
    infinite: false,
    centerMode: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
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

class CarouselLink extends Component {

    render() {
        return (
            <div className="dashboard-carousel-link">
                <ReactSlick className="break-after-medium" {...settings}>
                    <div className="who-is-online">
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <CardSubtitle className="centered subtitle" >See who is <b>online</b>
                            
                            </CardSubtitle>  
                            <img width="30px" src={require('../../assets/images/arrow.svg')} alt="Soul Coach Link arrow" />
                        </Card>
                    </div>
                    <div className="online-priests">
                        <Card>
                            <CardImg class="" top width="100%" src={require('../../assets/images/priest1.png')} alt="Father Samuel" />
                            <CardTitle>Father Samuel</CardTitle>
                        </Card>
                    </div>
                    <div className="online-priests">
                        <Card>
                            <CardImg class="" top width="100%" src={require('../../assets/images/priest1.png')} alt="Father Samuel" />
                            <CardTitle>Father Samuel</CardTitle>
                        </Card>
                    </div>
                    <div className="online-priests">
                        <Card>
                            <CardImg class="" top width="100%" src={require('../../assets/images/priest1.png')} alt="Father Samuel" />
                            <CardTitle>Father Samuel</CardTitle>
                        </Card>
                    </div>
                    <div className="online-priests">
                        <Card>
                            <CardImg class="" top width="100%" src={require('../../assets/images/priest1.png')} alt="Father Samuel" />
                            <CardTitle>Father Samuel</CardTitle>
                        </Card>
                    </div>
                    <div className="online-priests">
                        <Card>
                            <CardImg class="" top width="100%" src={require('../../assets/images/priest1.png')} alt="Father Samuel" />
                            <CardTitle>Father Samuel</CardTitle>
                        </Card>
                    </div>
                </ReactSlick>

                <div className="see-all-link">SEE ALL ></div>
            </div>
        );
    }
}

export default CarouselLink;