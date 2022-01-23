import {Circle, Input, Renderer, Scene, Time, Vector} from "@brynteg/engine";


export default class SplashScreen extends Scene {

    circles = [];

    moonPosition;

    constructor() {
        super();

        const numCircles = 600;
        const minRadius = 1;
        const maxRadius = 2;
        const minHorizontal = maxRadius + 5;
        const maxHorizontal = 800 - maxRadius - 5;
        const minVertical = maxRadius + 5;
        const maxVertical = 600 - maxRadius - 5;

        this.moonPosition = new Vector(200, 100);

        for (let i = 0; i < numCircles; i++) {
            this.circles.push(
                new Circle(
                    Math.random() * (maxHorizontal - minHorizontal) + minHorizontal,
                    Math.random() * (maxVertical - minVertical) + minVertical,
                    Math.random() * (maxRadius - minRadius) + minRadius
                )
            );
        }
    }

    render() {
        for (const circle of this.circles) {
            Renderer.drawCircle(circle, {fillColor: '#ccc', borderColor: '#fff'});
        }
        Renderer.drawCircle(new Circle(this.moonPosition.x, this.moonPosition.y, 70), {fillColor: '#ffffff', strokeColor: '#fff'});
        Renderer.drawCircle(new Circle(this.moonPosition.x, this.moonPosition.y, 65), {fillColor: '#efefef', strokeColor: '#efefef'});
        Renderer.drawCircle(new Circle(this.moonPosition.x, this.moonPosition.y, 60), {fillColor: '#e0e0e0', strokeColor: '#eee'});

        Renderer.drawText("The Legend of Zelda: A Link to the Past", new Vector(400, 500));
    }

    update() {
        this.moonPosition.translate(Input.direction.scale(Time.delta * 500))
    }
}