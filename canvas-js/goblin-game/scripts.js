// create an html tag (canvas) with js
const canvas = document.createElement('canvas');
// Create a context
const context = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

const bgImage = new Image();
// const bgImage = document.createElement('img'); // <img />
bgImage.src = 'background.png'


// ==============CLASSES==============
class Hero{
    constructor(x,y){
        this.x = x;
        this.y =y;
        this.image = new Image();
        this.image.src = "hero.png";
        this.speed = 10;
    }
    update = ()=>{
        if(keysDown.ArrowDown){this.y += this.speed;}
        if(keysDown.ArrowUp){this.y -= this.speed}
        if(keysDown.ArrowLeft){this.x -= this.speed}
        if(keysDown.ArrowRight){this.x += this.speed}
    }
    checkCollision = (objCheck)=>{
        console.log(this.x,objCheck.x)
        console.log(this.y,objCheck.y)
        if((this.x <= (objCheck.x + 32)
            && (this.y <= objCheck.y + 32)
            && (this.x >= objCheck.x + 32)

        )){
            console.log("Hero hit the goblin!!!!")
        }
    }
}

class Goblin{
    constructor(x,y){
        this.x = x;
        this.y =y;
        this.image = new Image();
        this.image.src = "goblin.png";
    }
}
// ========================================

let keysDown = {};

// Make our hero move!!!
addEventListener('keydown',(e)=>{
    if(e.key === "ArrowDown"){
        // console.log("User pressed the down arrow!!!");
        keysDown[e.key] = true;
    }
    if(e.key === "ArrowLeft"){
        keysDown[e.key] = true;
    }    
    if(e.key === "ArrowUp"){
        keysDown[e.key] = true;
    }    
    if(e.key === "ArrowRight"){
        keysDown[e.key] = true;
    }
})

addEventListener('keyup',(e)=>{
    if(e.key === "ArrowDown"){
        keysDown[e.key] = false;
    }
    if(e.key === "ArrowLeft"){
        keysDown[e.key] = false;
    }    
    if(e.key === "ArrowUp"){
        keysDown[e.key] = false;
    }    
    if(e.key === "ArrowRight"){
        keysDown[e.key] = false;
    }    
})

const theHero = new Hero(100,100);
const goblin = new Goblin(200,200);
// =================DRAW OUR STUFF!!!!=================
function draw(){
    context.drawImage(bgImage,0,0);
    theHero.update();
    theHero.checkCollision(goblin);
    context.drawImage(theHero.image,theHero.x,theHero.y);
    context.drawImage(goblin.image,goblin.x,goblin.y);
    requestAnimationFrame(draw);
}

draw();