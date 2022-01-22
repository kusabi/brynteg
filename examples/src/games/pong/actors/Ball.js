import {Rectangle, Vector} from "@brynteg/engine";

export default class Ball extends Rectangle {

    velocity;

    constructor(x, y, size) {
        super(x, y, size, size);

        this.velocity = new Vector(100, 500);
    }
}