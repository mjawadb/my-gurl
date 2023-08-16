import React, { Component } from "react";
// Assets
import heroImg from '../../assets/img/hero-img.jpg';
import loveLetter from '../../assets/img/love-letter.png';
import bear from '../../assets/img/bear.png';
import flower from '../../assets/img/flower.png';

import './MyGirl.css';
import { simpleParallaxDelay, simpleParallaxOverflow } from "../templates/Style/SimpleParallax";
import ParallaxTemplate from "../templates/ParallaxTemplate";
import Plx from "react-plx";
import rawrImg from '../../assets/img/cute.jpg';
import hengker from '../../assets/img/hengker.jpg';
import humble from '../../assets/img/humble.jpg';
import perfect from '../../assets/img/perfect.jpg';
import dunno from '../../assets/img/dunno.jpg';
import loveFlowers from '../../assets/img/love-flowers.png';
import pixelLove from '../../assets/img/pixelLove.png';


class MyGirl extends Component {
    state = {
        parallaxDataLoveletter: [
            {
              start: 500,
              end: 900,
              easing: "ease-in",  
              properties: [
                {
                  startValue: 100,
                  endValue: 0,
                  property: "translateX",
                },
              ],
            },
          ],
          parallaxDataFlowers: [
            {
              start: 500,
              end: 900,
              easing: "ease-in",  
              properties: [
                {
                  startValue: -100,
                  endValue: 0,
                  property: "translateX",
                },
              ],
            },
          ],
          parallaxFadeIn: [
            {
              start: "self",
              end: "1300",
              easing: "ease-in",  
              properties: [
                {
                  startValue: 0,
                  endValue: 1,
                  property: "opacity",
                },
              ],
            },
          ],
          parallaxpixelLove: [
            {
              start: 2800,
              end: 3200,
              duration: 100000,
              easing: "ease-in",  
              properties: [
                {
                  startValue: -1000,
                  endValue: 0,
                  property: "translateX",
                },
              ],
            },
          ],
          parallaxpixelLoveTwo: [
            {
              start: 2800,
              end: 3200,
              duration: 100000,
              easing: "ease-in",  
              properties: [
                {
                  startValue: 1000,
                  endValue: 0,
                  property: "translateX",
                },
              ],
            },
          ],
    }

    componentDidMount() {
        simpleParallaxDelay();

        const heroText = document.querySelectorAll('.hero-text');
        heroText.forEach(h => {
            h.style.animation = 'fadeIn 2s forwards'
        })
    }

    handleRawr = (e) => {
      e.target.nextSibling.style.display = 'inherit';
      e.target.style.animation = 'fadeOut .2s forwards';

      setTimeout(() => {
        e.target.style.display = 'none';
        const rawrImg = document.querySelector('.rawr-img');
        const rawrP = document.querySelector('.rawr-p');
        rawrImg.style.animation = 'fadeInScaleRawrImg .3s ease-in forwards';
        rawrP.style.animation = 'fadeInScaleRawrP .3s ease-in forwards';
        
      }, 200);
    }

    render() {
        return (
            <div class="container">
            <div class="hero">
                <img class="thumbnail" src={heroImg} alt="Hero Image" />           
                <h1 class="hero-text main-text font-bold text-white text-7xl">Fatimah Azzahra</h1>
                <h2 class="hero-text text-white text-lg tracking-widest">aka. My Girl</h2>
            </div>

            <div class="about h-80 p-10 w-screen">
                <div class="text-about-wrapper w-full h-24 font-bold">
                    <p class="text-about main-text text-4xl font-sans text-white">Introducing My Girl</p>
                </div>
                
                <div class="introducing text-white text-xl w-full h-56 font-bold">
                    <p className="text-shadow">
                        Hi, so this is my Girl. She's so cute, and i love her so much!
                        I can't express how i love her.
                    </p>
                </div>
            </div>

            <div class="my-fav-things p-10 relative px-0">
                <h1 className="text-white main-text text-center text-4xl px-10">Why Do I Love Her So Much?</h1>
                <Plx parallaxData={this.state.parallaxDataLoveletter}>
                    <img className="love-letter absolute w-64 thumbnail-2" src={loveLetter} alt="" />
                </Plx>
                <Plx parallaxData={this.state.parallaxDataFlowers}>
                    <img className="flowers absolute w-64 thumbnail-2" src={flower} alt="" />
                </Plx>

                <div className="reason reason-1">
                  <p className="mt-64 text-center main-text text-white text-3xl">1. She's <span>cute</span> ! ! !</p>
                  <button className="button mt-5 p-2 text-white" onClick={this.handleRawr}>Press This</button>
                  <div className="rawr">
                    <img src={rawrImg} className="rawr-img" alt="Rawr"/>
                    <p className="rawr-p text-white font-bold text-xl p-1">RAWR! 🦁🖐️</p>
                  </div>
                </div>
                
                <div className="reason reason-2">
                  <p className="mt-32 text-center main-text text-white text-3xl">2. She's <span>Active</span></p>
                  <img className="rounded-xl" src={hengker} alt="" />
                </div>

                <div className="reason reason-3">
                  <p className="mt-32 text-center main-text text-white text-3xl">3. She's <span>Humble</span></p>
                  <img className="rounded-xl" src={humble} alt="" />
                </div>

                <div className="reason reason-4">
                  <p className="mt-32 text-center main-text text-white text-3xl">4. She's <span>Perfect</span></p>
                  <img className="rounded-xl" src={perfect} alt="" />
                </div>

                <div className="reason reason-5 mb-72">
                  <p className="mt-32 text-center main-text text-white text-3xl">5. i dunno <span>i just love her</span></p>
                  <img className="rounded-xl" src={dunno} alt="" />
                  <Plx parallaxData={this.state.parallaxpixelLove}>
                    <img className="w-32 absolute love-flowers" src={pixelLove} alt="" />
                    <img className="w-32 absolute love-flowers-4" src={pixelLove} alt="" />
                  </Plx>
                  <Plx parallaxData={this.state.parallaxpixelLoveTwo}>
                    <img className="w-32 absolute love-flowers-2" src={pixelLove} alt="" />
                    <img className="w-32 absolute love-flowers-3" src={pixelLove} alt="" />
                  </Plx>
                </div>
            </div>

            <div className=""></div>
        </div>
        )
    }
}

export default MyGirl;