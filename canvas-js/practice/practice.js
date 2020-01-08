const canvas = document.getElementById('canvas');
console.dir(canvas);

const context = canvas.getContext('2d');

// rect takes 4 args:
// 1. upper x
// 2. upper y
// 3. lower x
// 4. lower y

// context.rect(100,100,300,300);
// context.stroke();

// context.moveTo(100,100);
// context.lineTo(400,400);
// context.lineTo(100,400);
// context.lineTo(400,100);
// context.lineTo(100,100);
// context.stroke();

function Ball(x,y){
    this.x = x;
    this.y =y
    this.radius = 50;
    this.sr = 0; //starting radian is 0, which is 3:00 on the circle
    this.er = Math.PI * 2;
    this.fillColor = "#00A7D4";
    this.xDirection = 1;
    this.yDirection = 1;

    // this.draw = function(){
    //     context.beginPath();
    //     context.arc(this.x,this.y,this.radius,this.sr,this.er);
    //     context.fillStyle = this.fillColor;
    //     context.fill();
    //     this.tick = 1;
    // }
}

Ball.prototype.updateBallPosition = ()=>{
    this.tick++;
    console.log(this.tick)
    context.clearRect(0,0,canvas.width,canvas.height)
    this.x += 1 * this.xDirection;
    this.y += 5 * this.yDirection;
    if(this.x >= canvas.width - this.radius){
        // we have reached the right side of the screen!
        // Reverse course!
        this.xDirection = -this.xDirection;
    }else if(this.y >= canvas.height - this.radius){
        this.yDirection = -this.yDirection;
    }else if(this.x <= 0 + this.radius){
        this.xDirection = -this.xDirection;
    }else if(this.y <= 0 + this.radius){
        this.yDirection = -this.yDirection;
    }
    this.draw();
}

Ball.prototype.draw = ()=>{
    context.beginPath();
    context.arc(this.x,this.y,this.radius,this.sr,this.er);
    context.fillStyle = this.fillColor;
    context.fill();
    this.tick = 1;
}



const theBall = new Ball(100,100);
console.log(theBall);
// theBall.draw();
setInterval(theBall.updateBallPosition,20);


const theBall2 = new Ball(300,250);
setInterval(theBall2.updateBallPosition,20);