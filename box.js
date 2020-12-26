class Box {
    constructor(x, y, width, height) {
        var boxOptions = {
            restitution: 0.8,
        }
        this.body = Bodies.rectangle(x, y, width, height, boxOptions);
        this.widthinbox = width;
        this.heightforthebox = height;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y)
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.widthinbox, this.heightforthebox);
        pop();
    }
}