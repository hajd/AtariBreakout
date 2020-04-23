var canvas;
var ctx;
var backgroundColor;
var paddle;
var bricks;
var ball;

function createBricks() {
    for(var i = 0; i < bricks.length; i++) {
        bricks.pop();
    }

    for(var i = 0; i < 8; i++) {
        for(var a = 0; a < 6; a++) {
            bricks.push(new Brick(84 * i + 42 , 39 * a));
        }
    }
}

window.onload = function(){
    canvas = document.getElementById("breakoutCanvas");
    ctx = canvas.getContext("2d");

    document.addEventListener("keydown", keyDown);
    document.addEventListener("keyup", keyUp);

    setInterval(draw, 0);
    setInterval(update, 5);

    backgroundColor = "#444444";

    paddle = new Paddle(canvas.width / 2, canvas.height - 50);
    ball = new Ball();
    bricks = [];
    createBricks();
};

function draw() {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    paddle.render(ctx);

    for(var i = 0; i < bricks.length; i++) {
        bricks[i].render(ctx);
    }

    ball.render(ctx);
}

function update() {
    paddle.update();
    ball.update();
}

function keyDown(e) {
    paddle.keyDown(e.key);
}

function keyUp(e) {
    paddle.keyUp(e.key);
}