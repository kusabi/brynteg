import {Rectangle} from "@brynteg/engine";

export default class Player extends Rectangle {


    constructor(x, y, width, height, speed = 10) {
        super(x, y, width, height);

    }
}