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
     * Get the A button input.
     *
     * @return {Button}
     */
    get a() {
        return new Button();
    }

    /**
     * Get any button?
     *
     * @return {Button|null}
     */
    get any() {
        return null;
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
     * Get the a button
     *
     * @return {Button}
     */
    static get a() {
        return Input.instance.a;
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

    get() {
        return "LOL"
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
     */
    get vertical() {
        return 0;
    }

    /**
     * Set the input singleton
     *
     * @param {Input} input
     */
    static setInput(input) {
        Input.singleton = input;
    }

    update() {

    }
}