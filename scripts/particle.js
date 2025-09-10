//Particles script
const canvas2 = document.getElementById("canvas1");
const ctx = canvas2.getContext('2d');
canvas2.width = window.innerWidth;
canvas2.height =window.innerHeight;

let particlesArray;

//Create particle
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    //method to draw individual particle
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#FFF';//COLOR OF PARTICLES
        ctx.fill();
    }

    //check particle position, check mouse position, move the particle, draw the particle
    update() {
        //check if particle is still winthin canvas
        if(this.x > canvas2.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if(this.y > canvas2.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        //move particle
        this.x += this.directionX;
        this.y += this.directionY;

        //draw particle
        this.draw();
    }
}

//create particle array
function init() {
    particlesArray = [];
    let numberOfParticles = (canvas2.height * canvas2.width) / 12000;

    for (let i = 0; i < numberOfParticles; i++) { //INCREASE HERE THE NUMBER OF PARTICLES
        let size = (Math.random() * 5) + 2;//INCREASE PARTICLE SIZE
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5;
        let color = '#fff';//COLOR OF PARTICLES

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

//check if particles are close enough to draw line between them
function connect() {

    let opacityValue = 1;

    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a;  b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            if(distance < (canvas2.width / 7) * (canvas2.height / 7)) {
                opacityValue = 1 - (distance / 20000);
                ctx.strokeStyle = 'rgba(255,255,255,' + opacityValue + ')';//COLOR OF CONNECTIONS
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

//animation loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

//resize event
window.addEventListener('resize',
    function() {
        canvas2.width = innerWidth;
        canvas2.height = innerHeight;
        init();
    }
);

init();
animate();
