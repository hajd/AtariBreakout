class Paddle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = 0;
        this.speed = 3;
        this.img = new Image();
        this.img.src = "assets/paddle.png";
    }

    render(ctx) {
        ctx.drawImage(this.img, this.x, this.y);
    }

    update() {
        var move = this.velocity * this.speed;

        if(this.x + move > canvas.width - this.img.width) {
            move = 0;
        }
        else if(this.x + move < 0) {
            move = 0;
        }

        this.x += move;
    }

    keyDown(k) {
        switch(k.toLowerCase()) {
            case "a":
                this.velocity = -1;
                break;
            case "d":
                this.velocity = 1;
                break;
        }
    }

    keyUp(k) {
        this.velocity = 0;
    }
}