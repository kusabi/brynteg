import {Vector} from "@brynteg/engine";
import WindyBall from "./WindyBall";

export default class Player extends WindyBall {

    speed = 50;
    gravity = 9.8;

    constructor(x, y) {
        super(x, y);
        this.velocity = Vector.zero();
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

    draw(renderer) {
        renderer.drawCircle(this.position.x, this.position.y, 25, {fill: true, fillColor: '#4D4'});
    }
}