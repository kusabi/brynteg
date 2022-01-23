import {Circle, Mathematics, Renderer, Scene, Time, Vector} from "@brynteg/engine";

class Ball extends Circle {
    velocity;

    /**
     *
     * @param {Vector} position
     * @param {number} radius
     * @param {Vector} velocity
     */
    constructor(position, radius, velocity = Vector.zero) {
        super(position.x, position.y, radius);
        this.velocity = velocity;
    }
}

export default class Gameplay extends Scene {

    balls = [];

    constructor() {
        super();

        const balls = 15;
        const radius = 30;

        for (let i = 0; i < balls; i++) {
            this.balls.push(
                new Ball(
                    new Vector(Mathematics.random(radius, Renderer.window.width - radius), Renderer.window.top - 40 - radius),
                    radius,
                    Vector.random.scale(300)
                )
            );
        }

    }

    render() {
        for (const ball of this.balls) {

            let overlapping = false;

            for (const otherBall of this.balls) {
                if (ball !== otherBall && ball.overlapsCircle(otherBall)) {
                    overlapping = true;
                    break;
                }
            }

            Renderer.drawCircle(ball, {
                fillColor: overlapping === true ? '#0F0' : '#F00',
                strokeColor: overlapping === true ? '#0F0' : '#F00',
            });
        }
    }

    update() {

        const bounceDampening = 0.99999;

        for (const ball of this.balls) {
            if (ball.bottom <= Renderer.window.bottom) {
                ball.bottom = Renderer.window.bottom;
                ball.velocity.scale(1, -bounceDampening);
            }

            if (ball.left <= Renderer.window.left) {
                ball.left = Renderer.window.left;
                ball.velocity.scale(-bounceDampening, 1);
            }

            if (ball.right >= Renderer.window.right) {
                ball.right = Renderer.window.right;
                ball.velocity.scale(-bounceDampening, 1);
            }

            ball.velocity.translate(0, -9.8);
            ball.position.translate(ball.velocity.copy.scale(Time.delta));
        }
    }
}