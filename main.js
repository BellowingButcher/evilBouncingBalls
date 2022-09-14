// set up canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//function to generate random number

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

// function to generate random color

function randomRGB() {
    return `rgb(
            ${random(0, 255)},
            ${random(0, 255)},
            ${random(0, 255)}
    )`;
}

//Determines class Ball
class Ball {
//Has a constructor for each property inside (). 
    constructor(x, y, velX, velY, color, size) {
// 'this.' refers to the spacific ball that has been made
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }
}