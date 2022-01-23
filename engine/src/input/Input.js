import {Vector} from "../geometry";
import Button from "./Button";

export default class Input {
    /**
     * The singleton instance of the input
     *
     * @type {Input}
     */
    static singleton = null;

    /**
     * Get the a button
     *
     * @return {Button}
     */
    static get a() {
        return Input.instance.a;
    }

    /**
     * Get all of the buttons
     *
     * @returns {Button[]}
     */
    static get all() {
        return Input.instance.all;
    }

    /**
     * Get any button?
     *
     * @return {Button|null}
     */
    static get any() {
        return Input.instance.any;
    }

    /**
     * Get the b button
     *
     * @return {Button}
     */
    static get b() {
        return Input.instance.b;
    }

    /**
     * Get the directional input as a vector
     *
     * @return {Vector}
     */
    static get direction() {
        return Input.instance.direction;
    }

    /**
     * Get the down button.
     *
     * @return {Button}
     */
    static get down() {
        return Input.instance.down;
    }

    /**
     * Get the horizontal input as a number between -1 (left) and 1 (right)
     */
    static get horizontal() {
        return Input.instance.horizontal;
    }

    /**
     * Get the input singleton
     *
     * @return {Input}
     */
    static get instance() {
        if (Input.singleton === null) {
            Input.singleton = new Input();
        }
        return Input.singleton;
    }

    /**
     * Set the input singleton instance
     *
     * @param {Input} input
     */
    static set instance(input) {
        Input.singleton = input;
    }

    /**
     * Get the left button.
     *
     * @return {Button}
     */
    static get left() {
        return Input.instance.left;
    }

    /**
     * Get the right button.
     *
     * @return {Button}
     */
    static get right() {
        return Input.instance.right;
    }

    /**
     * Get the up button.
     *
     * @return {Button}
     */
    static get up() {
        return Input.instance.up;
    }

    /**
     * Get the vertical input as a number between -1 (up) and 1 (down)
     *
     * @returns {number}
     */
    static get vertical() {
        return Input.instance.vertical;
    }

    /**
     * Get the x button
     *
     * @return {Button}
     */
    static get x() {
        return Input.instance.x;
    }

    /**
     * Get the y button
     *
     * @return {Button}
     */
    static get y() {
        return Input.instance.y;
    }

    /**
     * Get the A button input.
     *
     * @return {Button}
     */
    get a() {
        return new Button();
    }

    /**
     * Get all of the buttons
     *
     * @returns {Button[]}
     */
    get all() {
        return [this.a, this.b, this.x, this.y, this.up, this.down, this.left, this.right];
    }

    /**
     * Get any button?
     *
     * @return {Button|null}
     */
    get any() {
        for (const button of this.all) {
            if (button.isDown) {
                return button;
            }
        }
        return null;
    }

    /**
     * Get the B button input.
     *
     * @return {Button}
     */
    get b() {
        return new Button();
    }

    /**
     * Get the directional input as a vector
     *
     * @return {Vector}
     */
    get direction() {
        return new Vector(this.horizontal, this.vertical);
    }

    /**
     * Get the down button.
     *
     * @return {Button}
     */
    get down() {
        return new Button();
    }

    /**
     * Get the horizontal input as a number between -1 (left) and 1 (right)
     */
    get horizontal() {
        return 0;
    }

    /**
     * Get the left button.
     *
     * @return {Button}
     */
    get left() {
        return new Button();
    }

    /**
     * Get the right button.
     *
     * @return {Button}
     */
    get right() {
        return new Button();
    }

    /**
     * Get the up button.
     *
     * @return {Button}
     */
    get up() {
        return new Button();
    }

    /**
     * Get the vertical input as a number between -1 (up) and 1 (down)
     *
     * @returns {number}
     */
    get vertical() {
        return 0;
    }

    /**
     * Get the X button input.
     *
     * @return {Button}
     */
    get x() {
        return new Button();
    }

    /**
     * Get the Y button input.
     *
     * @return {Button}
     */
    get y() {
        return new Button();
    }

    /**
     * Update the input manager if it needs an update loop
     */
    static update() {
        Input.instance.update();
    }

    /**
     * Update the input manager if it needs an update loop
     */
    update() {

    }
}