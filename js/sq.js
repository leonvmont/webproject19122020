var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2 ;
var xT = 0
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var rv = Math.floor((Math.random() * 10) + 1);
var xf = 320
var yf = 305
var yl = 210

document.onkeydown = checkKey;

// Get a key press from player to move
function checkKey(e) {

    //e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
		yf = yf-15
    }
    else if (e.keyCode == '40') {
        // down arrow
		yf = yf+15
    }
    else if (e.keyCode == '37') {
       // left arrow
	   xf = xf-15
    }
    else if (e.keyCode == '39') {
       // right arrow
	   xf = xf+15
    }

}

function drawBall() {
    ctx.beginPath();
    ctx.arc(xf, yf, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
	ctx.closePath();
    
	
}

function drawTruck() {
    ctx.beginPath();
    ctx.rect(xT, 20, 90, 50);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
}

function drawBus() {
	
    ctx.beginPath();
    ctx.rect(xT, 120, 80, 50);
    ctx.fillStyle = "#ffdf00";
    ctx.fill();
    ctx.closePath();
}

function drawCar() {
    ctx.beginPath();
    ctx.rect(xT, 220, 50, 50);
    ctx.fillStyle = "#009c3b";
    ctx.fill();
    ctx.closePath();
}


var vehicles = [];
var vTypes = ['Car', 'Truck', 'Bus'];
var vType = vTypes[Math.floor(Math.random() * vTypes.length)];

function varray() {
	for (var i = 0; i < 11; i++) {
		if (i < 3) {
			vehicles[i] = new Vehicle(x,yl-(i*40),vType);
		} else if (i < 6) {
			vehicles[i] = new Vehicle((x-50),yl-(i*60),vType);
		} else if (i < 9) {
			vehicles[i] = new Vehicle((x-100),yl-(i*60),vType);
		} else {
			vehicles[i] = new Vehicle((x-150),yl-(i*80),vType);
		}
	}	
}

function Vehicle(x,y,vType){
	this.x = x;
	this.y = y;
	
	if (vType == 'Car') {
		this.display = function(){
		ctx.rect(this.x,this.y,50,50);
		ctx.fillStyle = "#009c3b";
		ctx.fill();
	} 
	} else if (vType == 'Truck') {
		this.display = function(){
		ctx.rect(this.x,this.y,80,50);
		ctx.fillStyle = "#ffdf00";
		ctx.fill();		
	}
	} else {
		this.display = function(){
		ctx.rect(this.x,this.y,90,50);
		ctx.fillStyle = "#000000";
		ctx.fill();
		}
		
	}
	this.move = function(){
		this.x = this.x + 2;
		this.y = this.y + 0;
	}
}

window.addEventListener('load', function () {
  //alert("It's loaded!")
  varray();
})

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	drawTruck();
	drawBus();
	drawCar();
	x += dx;
	xT += dx;
	y += dy;
	for (var i = 0; i < vehicles.length; i++) {
		vehicles[i].move();
		vehicles[i].display();
	}
}

//canvas.addEventListener("keypress", moveF(e));

setInterval(draw, 10);
