import {Input, Mathematics, Rectangle, Renderer, Scene} from "@brynteg/engine";


export default class Gameplay extends Scene {

    box;
    boxes = [];

    constructor() {
        super();

        const boxes = 50;
        const minBoxSize = 5;
        const maxBoxSize = 50;

        this.box = new Rectangle(
            Mathematics.random(0, Renderer.window.width - maxBoxSize),
            Mathematics.random(0, Renderer.window.height - maxBoxSize),
            maxBoxSize,
            maxBoxSize
        )

        for (let i = 0; i < boxes; i++) {
            this.boxes.push(
                new Rectangle(
                    Mathematics.random(0, Renderer.window.width - maxBoxSize),
                    Mathematics.random(0, Renderer.window.height - maxBoxSize),
                    Mathematics.random(minBoxSize, maxBoxSize),
                    Mathematics.random(minBoxSize, maxBoxSize)
                )
            );
        }

    }

    render() {
        let overlapPlayer = false;
        for (const box of this.boxes) {

            let overlapping = false;

            for (const otherBox of this.boxes) {
                if (box !== otherBox && box.overlapsRectangle(otherBox)) {
                    overlapping = true;
                    break;
                }
            }

            if (this.box.overlapsRectangle(box)) {
                overlapPlayer = true;
                overlapping = true;
            }

            Renderer.drawRectangle(box, {
                fillColor: overlapping === true ? '#0F0' : '#F00',
                strokeColor: overlapping === true ? '#0F0' : '#F00',
            });
        }

        Renderer.drawRectangle(this.box, {
            fillColor: overlapPlayer === true ? '#0F0' : '#00F',
            strokeColor: overlapPlayer === true ? '#0F0' : '#00F',
        });
    }

    update() {
        this.box.translate(Input.direction.scale(5));
    }
}