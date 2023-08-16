import simpleParallax from 'simple-parallax-js';

export const simpleParallaxDelay = () => {
    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image, {
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)'
    });

    var imageTwo = document.getElementsByClassName('thumbnail-2');
    new simpleParallax(image, {
        overflow: true
    });
}

export const simpleParallaxOverflow = () => {
    
}