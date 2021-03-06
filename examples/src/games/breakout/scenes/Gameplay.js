import {Input, Mathematics, Rectangle, Renderer, Scene, Time, Vector} from "@brynteg/engine";
import {Ball, Player, Brick} from "../actors";


export default class Gameplay extends Scene {

    bricks = [];
    player;
    ball;

    constructor() {
        super();


        this.reset();
    }

    render() {
        for (const brick of this.bricks) {
            if (brick.alive) {
                Renderer.drawRectangle(brick);
            }
        }
        Renderer.drawRectangle(this.player);
        Renderer.drawRectangle(this.ball);
    }

    update() {
        // Player movement
        this.player.x += Input.horizontal * 500 * Time.delta;
        if (this.player.left < Renderer.window.left) {
            this.player.left = Renderer.window.left
        }
        if (this.player.right > Renderer.window.right) {
            this.player.right = Renderer.window.right
        }

        // Ball movement
        this.ball.translate(this.ball.velocity.copy.scale(Time.delta));
        if (this.ball.left < Renderer.window.left) {
            this.ball.left = Renderer.window.left;
            this.ball.velocity.x *= -1;
        }
        if (this.ball.right > Renderer.window.right) {
            this.ball.right = Renderer.window.right
            this.ball.velocity.x *= -1;
        }
        if (this.ball.top > Renderer.window.top) {
            this.ball.top = Renderer.window.top
            this.ball.velocity.y *= -1;
        }
        if (this.ball.bottom < Renderer.window.bottom) {
            this.reset();
        }

        for (const collider of [...this.bricks, this.player]) {

            if (collider instanceof Brick && collider.alive === false) {
                continue;
            }

            if (this.ball.overlapsRectangle(collider)) {
                if (this.ball.left < collider.left && this.ball.right > collider.left) {
                    this.ball.right = collider.left;
                    this.ball.velocity.x *= -1;
                } else if (this.ball.right > collider.right && this.ball.left < collider.right) {
                    this.ball.left = collider.right;
                    this.ball.velocity.x *= -1;
                } else if (this.ball.top > collider.top && this.ball.bottom < collider.top) {
                    this.ball.bottom = collider.top;
                    this.ball.velocity.y *= -1;
                } else if (this.ball.bottom < collider.bottom && this.ball.top > collider.bottom) {
                    this.ball.top = collider.bottom;
                    this.ball.velocity.y *= -1;
                }

                if (collider instanceof Brick) {
                    collider.alive = false;
                }
            }
        }

    }

    reset() {
        // Setup the bricks
        this.bricks = [];
        const rows = 15;
        const columns = 15;
        const paddingSides = 70;
        const padding = 30;
        const gap = 5;
        const spaceWidth = Renderer.window.width - (paddingSides * 2);
        const spaceHeight = (Renderer.window.height / 2) - padding;
        const brickWidth = (spaceWidth / columns) - gap;
        const brickHeight = (spaceHeight / rows) - gap;
        for (let x = 0; x < columns; x++) {
            for (let y = 0; y < rows; y++) {
                this.bricks.push(new Brick(
                    paddingSides + (x * brickWidth) + (x * gap),
                    Renderer.window.height - (padding + (y * brickHeight) + (y * gap)),
                    brickWidth,
                    brickHeight
                ))
            }
        }

        // Setup the player
        const playerWidth = Renderer.window.width - 100;
        const playerHeight = 10;
        this.player = new Player(Renderer.window.center.x - (playerWidth / 2), 10 + playerHeight, playerWidth, playerHeight);

        // Setup the ball
        const ballSize = 10;
        this.ball = new Ball(
            Renderer.window.center.x - (ballSize / 2),
            (Renderer.window.height / 4) + (ballSize / 2),
            ballSize,
            ballSize
        );

        const startingDirection = [45, 135, 225, 315];
        this.ball.velocity = Vector.createFromAngle(startingDirection[Math.floor(Math.random()*startingDirection.length)]).scale(5);
        this.ball.velocity.normalize().scale(500);
    }

}