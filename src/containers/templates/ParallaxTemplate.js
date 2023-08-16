import React from "react";
import './ParallaxTemplate.css';

// Assets
import imgOne from '../../assets/img/gallery/one.jpg';
import imgTwo from '../../assets/img/gallery/two.jpg';
import imgThree from '../../assets/img/gallery/three.jpg';
import imgFour from '../../assets/img/gallery/four.jpg';
import imgFive from '../../assets/img/gallery/five.jpg';
import imgSix from '../../assets/img/gallery/six.jpg';
import imgSeven from '../../assets/img/gallery/seven.jpg';
import imgEight from '../../assets/img/gallery/eight.jpg';
import imgNine from '../../assets/img/gallery/nine.jpg';
import imgTen from '../../assets/img/gallery/ten.jpg';
import imgEleven from '../../assets/img/gallery/eleven.jpg';




function ParallaxTemplate() {
    return (
        <div class="external">
        <div class="horizontal-scroll-wrapper">
            <div class="img-wrapper slower">
            <a href="https://www.instagram.com/imaaldrs_/" target="_blank">
                <img src={imgOne} alt=""/>
            </a>
            
            </div>

            <div class="img-wrapper faster">
                <a href="https://www.instagram.com/imaaldrs_/" target="_blank">
                    <img src={imgTwo} alt=""/>
                </a>
            </div>

            <div class="img-wrapper slower vertical">
                <a href="https://www.instagram.com/imaaldrs_/" target="_blank">
                    <img src={imgThree} alt=""/> 
                </a>
            </div>

            <div class="img-wrapper slower slower-down">
                <a href="https://www.instagram.com/imaaldrs_/" target="_blank">
                    <img src={imgFour} alt=""/>
                </a>
            </div>

            <div class="img-wrapper">
                <a href="https://www.instagram.com/imaaldrs_/" target="_blank">
                    <img src={imgFive} alt=""/>
                </a>
            </div>

            <div class="img-wrapper slower">
                <a href="https://www.instagram.com/imaaldrs_/" target="_blank">
                    <img src={imgSix} alt=""/>
                </a>
            </div>

            <div class="img-wrapper faster1">
                <a href="https://www.instagram.com/imaaldrs_/" target="_blank">
                    <img src={imgSeven} alt=""/>
                </a> 
            </div>
            
            <div class="img-wrapper slower slower2">
                <a href="https://www.instagram.com/imaaldrs_/" target="_blank">
                    <img src={imgEight} alt=""/>
                </a>
            </div>
            
            <div class="img-wrapper">
                <a href="https://www.instagram.com/imaaldrs_/" target="_blank">
                    <img src={imgNine} alt=""/>
                </a>
            </div>
            
            <div class="img-wrapper slower">
                <a href="https://www.instagram.com/imaaldrs_/" target="_blank">
                    <img src={imgTen} alt=""/>
                </a>
            </div>
            
            <div class="img-wrapper slower last">
                <a href="https://www.instagram.com/imaaldrs_/" target="_blank">
                    <img src={imgEleven} alt=""/>
                </a>
            </div>
        </div>
        </div>



    )
}

export default ParallaxTemplate;