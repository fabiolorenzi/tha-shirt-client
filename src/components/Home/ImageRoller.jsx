import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./stylesheets/ImageRoller.css";

import Image1 from "../../img/roller_image_01.jpg";
import Image2 from "../../img/roller_image_02.jpg";
import Image3 from "../../img/roller_image_03.jpg";
import Image4 from "../../img/roller_image_04.jpg";
import Image5 from "../../img/roller_image_05.jpg";

function ImageRoller() {
    return(
        <div className="imageRollerContainer" data-testid="imageRollerContainer">
            <AliceCarousel autoPlay autoPlayInterval="4000" infinite="true">
                <div className="sliderimg">
                    <h1>All our shops soon open! Stay ready!</h1>
                    <img src={Image1} alt="first" />
                </div>
                <div className="sliderimg">
                    <h1>Summer discount! Enjoy the best time of the year</h1>
                    <img src={Image2} alt="second" />
                </div>
                <div className="sliderimg">
                    <h1>All the best clothes for the best parties!</h1>
                    <img src={Image3} alt="third" />
                </div>
                <div className="sliderimg">
                    <h1>Be quick! The special discount is just for this July!</h1>
                    <img src={Image4} alt="fourth" />
                </div>
                <div className="sliderimg">
                    <h1>Clothes for every occasion!</h1>
                    <img src={Image5} alt="fifth" />
                </div>
            </AliceCarousel>
        </div>
    );
};

export default ImageRoller;