var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");  

var score = 0;
var lives = 4;

var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
<<<<<<< HEAD
var ballRadius = 16;
=======
var ballRadius = 15;
>>>>>>> make_game_easier

var paddleHeight = 10;
var paddleWidth = 80;
var paddleX = (canvas.width-paddleWidth)/2;

var brickRowCount = 4;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

var rightPressed = false;
var leftPressed = false;
