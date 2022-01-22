import {Rectangle} from "@brynteg/engine";

export default class Brick extends Rectangle {

    alive = true;

    constructor(x, y, width, height) {
        super(x, y, width, height);
    }
}