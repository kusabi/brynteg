import {Input, Rectangle, Renderer, Scene, Time, Vector} from "@brynteg/engine";
import {Ball, Baton} from "../actors";


export default class Gameplay extends Scene {

    constructor() {
        super();

        const batonWidth = 10;
        const batonHeight = 60;

        const ballRadius = 10;

        this.specialWait = 20;
        this.specialCounter = this.specialWait;
        this.specialCounterInUse = 0;
        this.player1 = new Baton(10, 10, batonWidth, batonHeight);
        this.player2 = new Baton(Renderer.window.right - 10 - batonWidth, 10, batonWidth, batonHeight);
        this.ball = new Ball(Renderer.window.center.x, Renderer.window.center.y, ballRadius);

        this.resetMatch();

    }

    render() {
        // Get the renderer window
        const window = Renderer.window;

        Renderer.drawText(this.player1.score, new Vector(30, 30));
        Renderer.drawText(this.player2.score, new Vector(window.right - 30, 30));

        const specialRect = this.specialRectangle();
        if (specialRect) {
            Renderer.drawRectangle(specialRect, {
                fillColor: '#484818'
            });
        }
        Renderer.drawRectangle(this.player1);


        Renderer.drawRectangle(this.player2);
        Renderer.drawRectangle(this.ball);


    }

    update() {

        // Get the renderer window
        const window = Renderer.window;

        // Update the ball
        this.ball.translate(this.ball.velocity.copy.scale(Time.delta));
        if (this.ball.bottom <= window.bottom) {
            this.ball.bottom = window.bottom;
            this.ball.velocity.y *= -1;
        }
        if (this.ball.top >= window.top) {
            this.ball.top = window.top;
            this.ball.velocity.y *= -1;
        }
        if (this.ball.right >= window.right) {
            this.player1.score++;
            this.resetMatch();
        }
        if (this.ball.left <= window.left) {
            this.player2.score++
            this.resetMatch();
        }
        const specialRect = this.specialRectangle();
        if (specialRect) {
            if (this.ball.overlapsRectangle(specialRect)) {
                this.ball.left = specialRect.right;
                this.ball.velocity.x *= -3;
                if (this.ball.velocity.length > 1000) {
                    this.ball.velocity.normalize().scale(1000);
                }
            }
        }
        if (this.ball.overlapsRectangle(this.player1)) {
            this.ball.left = this.player1.right;
            this.ball.velocity.x *= -.9;
        }
        if (this.ball.overlapsRectangle(this.player2)) {
            this.ball.right = this.player2.left;
            this.ball.velocity.x *= -1;
        }

        // Move player 1 based on input
        this.player1.y += Input.vertical * this.player1.speed;

        // Player 1 special move...
        this.specialCounter++;
        if (Input.a.justDown && this.specialCounter >= this.specialWait) {
            this.specialCounter = 0;
            this.specialCounterInUse = 1;
        }
        if (this.specialCounterInUse > 0) {
            this.specialCounterInUse++;
            if (this.specialCounterInUse > 8) {
                this.specialCounterInUse = 0;
            }
        }

        // Move player 2 using AI
        this.player2.bottom = this.ball.center.y - (this.player2.height / 2);
    }

    specialRectangle() {
        if (this.specialCounterInUse > 0) {
            const strength = this.specialCounterInUse * 2;
            return new Rectangle(
                this.player1.x - strength,
                this.player1.y - strength,
                this.player1.width + (strength * 2),
                this.player1.height + (strength * 2)
            );
        }
        return null;
    }

    resetGame() {
        this.player1.score = 0;
        this.player2.score = 0;
        this.resetMatch();
    }

    resetMatch() {
        this.player1.left = 10;
        this.player1.top = Renderer.window.center.y - (this.player1.height / 2);

        this.player2.right = Renderer.window.right - 10;
        this.player2.top = Renderer.window.center.y - (this.player2.height / 2);

        this.ball.top = Renderer.window.center.y - (this.ball.height / 2);
        this.ball.left = Renderer.window.center.x - (this.ball.width / 2);
        this.ball.velocity = new Vector(
            Math.random() * 40 - 20,
            Math.random() * 10 - 5,
        )
        this.ball.velocity.normalize().scale(500);
    }
}