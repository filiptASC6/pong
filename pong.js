

var ballX = 400;
var ballY = 400;
var pballX;
var pballY;
var r1 = 2;
var ballRadius = 30;
var ballVX = 0;
var ballVY = 0;
var ballSpeed = 80;
var pad1 = 400;
var pad2 = 400;
var pad1Vel = 20
var pad2Vel = 20;
var speed = 10;
var velMulti = 0.5;
var p1points = 0;
var p2points = 0;

function setup() { 
  createCanvas(1246, 590);
	textAlign(CENTER);
	textSize(70);
	angleMode(DEGREES);
    rectMode(CENTER);
	 ballVX = random(-5,5);
    ballVY = random(2,4);
textSize(50);
} 

function draw() { 
 		background(25);
  		fill(255);
		line(width/2,0,width/2,height);
	
		paddles();
		bounce();
  
	
		

  
	if(dist(mouseX,mouseY,ballX,ballY) <= (r1 + ballRadius)/2 + 1) {
	
	ballX = mouseX + (ballX-mouseX)*(r1+ballRadius)/dist(mouseX,mouseY,ballX,ballY);
	ballY = mouseY + (ballY-mouseY)*(r1+ballRadius)/dist(mouseX,mouseY,ballX,ballY);
	ballVX = (ballX - mouseX) / 3;
	ballVY = (ballY - mouseY) / 3;	
 	
	}	
	
		
	ballX = ballX + ballVX;
    ballY = ballY + ballVY;
    fill("white")
	ellipse(mouseX,mouseY,r1);
	ellipse(ballX,ballY,ballRadius);
		
	}
	
	

function paddles() {
	  if(key == 'w') {
    	pad1Vel -= speed;  
    } else
    if(key == 's') {
    	pad1Vel += speed;  
    }
		
		pad1Vel *= velMulti;
		pad1 += pad1Vel;
        
    if(pad1 > 1200) {
    	pad1 = 1200;  
    } else if(pad1 < 50) {
    	pad1 = 50;  
    }
	fill("lime ")
	rect(50,pad1,20,100);
		
  
  if(keyIsDown(UP_ARROW)) {
    	pad2Vel -= speed;  
    } else
    if(keyIsDown(DOWN_ARROW)) {
    	pad2Vel += speed;  
    }
		
		pad2Vel *= velMulti;
		pad2 += pad2Vel;
		if(pad2 > 1200) {
    	pad2 = 1200;  
    } else if(pad2 < 50) {
    	pad2 = 50;  
    }
		
fill("cyan")
rect(1200,pad2,20,100);

}


function getClosest() {
	  if(dist(ballX,ballY,pad1,10) < dist(ballX,ballY,pad2,500)) {
    	return(1);  
    } else {
    	return(2);  
    }
}


function bounce() {
  	if(ballX<61 + ballRadius  && dist(ballX,ballY,61,pad1) < 55) {
			ballVX = -ballVX;
	} else
  if(ballX<0 + ballRadius ) {

  		die(1);
  }

  if(ballX>width - 61 - ballRadius / 2 && dist(ballX,ballY,width - 61,pad2) < 55) {
			ballVX = -ballVX;
	} else
  if(ballX>width - ballRadius /2) {

  		die(2);
  }
    
  if(ballY<0 + ballRadius / 2 || ballY>height - ballRadius / 2) {
			ballVY = -ballVY;	
	}
}


function lose(d) {
	if(d == 1) {
  	p2points += 1;  
  } else if(d == 2) {
  	p1points += 1;  
  }
  ballX = 400;
  ballY = 400;
   if(random(1,2) == 1) {
     ballVX = -5 -(abs(p1points - p2points));
   } else {
     ballVX = 5 +(abs(p1points - p2points));
   }

  
 ballVY = random(2,4);
}


// var canvasWidth = 1246
// var canvasHeight = 590;
// var x = Math.floor(Math.random() * 600) + 100;
// var y = 260;
// var xspeed = 10;
// var yspeed = 8;
// var paddleWidth = 20
// var paddleHeight = 170
// var paddleX;
// var paddleY;
// var paddle2Y;
// var xVelocity = 50;

// var started = false;

// //global variables, that define speed of moving ball and position
// let r = 20
// // radius of ball
// // function getRandom(min, max) {
// //     return Math.random() * (2 - 1) + 1;
// //   }
// function setup(){
//     createCanvas(canvasWidth,canvasHeight);
// }
// function draw(){
  
//     background (45);
//     // if you remove the background an afterimage of the ball will cover up the screen
//     // it erases everything i put before
//     fill("yellow")
//     // make color of ball blue, you can make it a different color by replacing blue with another 
//     //color
//     circle(x, y, r*2,);
//     //starting point of ball and it's radius that's being multiplied 
//     x += xspeed;
//     y += yspeed;

//     if (!started) {
//         paddleX = [20,1210];
//         paddleY = 250;
//         paddle2Y = 130;
//         started = true;
//       }
//     fill("cyan");
//     rect (paddleX[0],paddleY, paddleWidth,paddleHeight);
   
//     fill("lime");
//     rect (paddleX[1],paddle2Y,paddleWidth,paddleHeight);

   

         

//     if ((x > paddleX - r &&
//         x < paddleX + paddleWidth) && 
//         (y + r >= paddleY))  {
//         xspeed = -xspeed ;
//         yspeed = -yspeed *((Math.random()* .5)+.3) ;
//         }


//     if ((x > paddleX - r &&
//         x < paddleX + paddleWidth) && 
//         (y + r >= paddle2Y))  {
//         xspeed = -xspeed;
//         yspeed = -yspeed * ((Math.random()* .5)+.3);
//         }

    
    

//     // makes the x and y values move along with the speed, making it look like the ball is
//     //moving
// //     if (x > canvasWidth - r || x < r) {
// //         xspeed = -xspeed;
// //  }
//     // // if the x value reaches the width - the radius or if it is less than the radius then 
//     // // the ball will reverse 
//     if (y > canvasHeight - r || y < r) {
//         yspeed = -yspeed * ((Math.random()* .5)+.3);
//     }

// }


// function keyPressed(){
//     if (keyCode === UP_ARROW) {
//         paddle2Y -= xVelocity;


//     } else if (keyCode === DOWN_ARROW) {
//       paddle2Y += xVelocity;
//     }
//   }

// function keyTyped() {
//     if (key === 'w') {
//         paddleY -= xVelocity;
      
//     } else if (key === 's') {
        
//       paddleY += xVelocity;
//     }
//   }