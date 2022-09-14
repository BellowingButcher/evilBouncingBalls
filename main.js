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
//begins drawing the ball. No idea whats going on here really, need some clearing up
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

// begins the update method for the velocity of the circles
update() [
        if ((this.x + this.size) >= width) {
            this.velx = -(this.velX);
        }
        if ((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }
        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }
        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }

        this.x += this.velX;
        this.y += this.velY;
    ]
}

const testBall = new Ball(50, 100, 4, 4, 'blue', 10);