class Brick {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.img = new Image();
        this.img.src = "assets/brick.png";
    }

    render(ctx) {
        ctx.drawImage(this.img, this.x, this.y);
    }
}