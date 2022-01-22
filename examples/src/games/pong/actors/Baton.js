import {Rectangle} from "@brynteg/engine";

export default class Baton extends Rectangle {

    score;
    speed;

    constructor(x, y, width, height, speed = 10) {
        super(x, y, width, height);
        this.score = 0;
        this.speed = speed;
    }
}