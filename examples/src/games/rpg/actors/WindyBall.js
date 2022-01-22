import {Vector, Actor} from "@brynteg/engine";

export default class Player extends Actor {

    gravity = 9.8;
    speed = 10;

    constructor(x, y) {
        super(x, y);
        this.velocity = Vector.zero();
    }

    draw(renderer) {
        renderer.drawCircle(this.position.x, this.position.y, 25, {fill: true});
    }

    update(delta) {
        this.velocity.x += (this.speed);
        this.velocity.y += (this.gravity);

        this.position.translate(this.velocity.scaled(delta));


        if (this.position.x >= 800) {
            this.velocity.x *= -1;
        }

        if (this.position.y >= 600) {
            this.velocity.y *= -1;
        }
    }
}