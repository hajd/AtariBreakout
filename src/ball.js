class Ball {
    constructor(x, y) {
        this.x = canvas.width/2;
        this.y = canvas.height/2+100;
        this.img = new Image();
        this.img.src = "assets/ball.png";
        this.velocity = {x: 1, y: -1};
    }

    render(ctx) {
        ctx.drawImage(this.img, this.x, this.y);
    }

    update() {
        if(this.x > canvas.width-this.img.naturalWidth) {
            this.velocity.x *= -1;
        }
        else if(this.x < 0) {
            this.velocity.x *= -1;
        }
        else if(this.y < 0) {
            this.velocity.y *= -1;
        }
        else if(this.y > canvas.height-this.img.naturalHeight) {
            createBricks();
            this.x = canvas.width/2;
            this.y = canvas.height/2+100;
        }

        if(isCollidingLeft(this.x, this.y, this.img.naturalWidth, this.img.naturalHeight, paddle.x, paddle.y, paddle.img.width, paddle.img.height)) {
            this.velocity.x *= -1;
        }
        else if(isCollidingRight(this.x, this.y, this.img.naturalWidth, this.img.naturalHeight, paddle.x, paddle.y, paddle.img.width, paddle.img.height)) {
            this.velocity.x *= -1;
        }
        else if(isCollidingTop(this.x, this.y, this.img.naturalWidth, this.img.naturalHeight, paddle.x, paddle.y-1, paddle.img.width, paddle.img.height)) {
            this.velocity.y *= -1;
        }

        for(var i = 0; i < bricks.length; i++) {
            if(isCollidingLeft(this.x, this.y, this.img.naturalWidth, this.img.naturalHeight, bricks[i].x,bricks[i].y, bricks[i].img.naturalWidth, bricks[i].img.naturalHeight)) {
                bricks.splice(i, 1);
                this.velocity.x *= -1;
            }
            else if(isCollidingRight(this.x, this.y, this.img.naturalWidth, this.img.naturalHeight, bricks[i].x,bricks[i].y, bricks[i].img.naturalWidth, bricks[i].img.naturalHeight)) {
                bricks.splice(i, 1);
                this.velocity.x *= -1;
            }
            else if(isCollidingTop(this.x, this.y, this.img.naturalWidth, this.img.naturalHeight, bricks[i].x,bricks[i].y, bricks[i].img.naturalWidth, bricks[i].img.naturalHeight)) {
                bricks.splice(i, 1);
                this.velocity.y *= -1;
            }
            else if(isCollidingBot(this.x, this.y, this.img.naturalWidth, this.img.naturalHeight, bricks[i].x,bricks[i].y+2, bricks[i].img.naturalWidth, bricks[i].img.naturalHeight)) {
                bricks.splice(i, 1);
                this.velocity.y *= -1;
            }
        }
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}