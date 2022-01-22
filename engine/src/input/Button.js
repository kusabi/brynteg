export default class Button {

    /**
     * Is the button currently held down?
     *
     * @type {boolean}
     */
    isDown = false;

    /**
     * Was the button just pressed?
     *
     * @type {boolean}
     */
    justDown = false;

    /**
     * Is the button currently not being pressed?
     *
     * @type {boolean}
     */
    isUp = false;

    /**
     * Was the button just released?
     *
     * @type {boolean}
     */
    justUp = false;
}