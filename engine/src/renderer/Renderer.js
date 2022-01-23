import {Rectangle} from "../geometry";

export default class Renderer {

    /**
     * The singleton instance of the renderer
     *
     * @type {Renderer}
     */
    static singleton = null;

    /**
     * Getter method to access the renderer instance
     *
     * @return {Renderer}
     */
    static get instance() {
        if (Renderer.singleton === null) {
            Renderer.singleton = new Renderer();
        }
        return Renderer.singleton;
    }

    /**
     * Set the renderer implementation instance
     *
     * @param {Renderer} renderer
     */
    static set instance(renderer) {
        Renderer.singleton = renderer;
    }

    /**
     * Get the window dimensions as a rectangle
     *
     * @return {Rectangle}
     */
    static get window() {
        return Renderer.instance.window;
    }

    /**
     * Get the window dimensions as a rectangle
     *
     * @return {Rectangle}
     */
    get window() {
        return new Rectangle(0, 0, 0, 0);
    }

    /**
     * Clear the entire rendering screen
     */
    static clearScreen() {
        Renderer.instance.clearScreen();
    }

    /**
     * Draw a circle to the screen
     *
     * @param {Circle} circle
     * @param {Object} options
     */
    static drawCircle(circle, options = {}) {
        Renderer.instance.drawCircle(circle, options);
    }

    /**
     * Draw a rectangle to the screen
     *
     * @param {Rectangle} rectangle
     * @param {Object} options
     */
    static drawRectangle(rectangle, options = {}) {
        Renderer.instance.drawRectangle(rectangle, options);
    }

    /**
     * Draw text to the screen
     *
     * @param {string} text
     * @param {Vector} position
     */
    static drawText(text, position) {
        Renderer.instance.drawText(text, position);
    }

    /**
     * Clear the entire rendering screen
     */
    clearScreen() {
        console.log('Not clearing the screen', {});
    }

    /**
     * Draw a circle to the screen
     *
     * @param {Circle} circle
     * @param {Object} options
     */
    drawCircle(circle, options = {}) {
        console.log('Not drawing circle', {circle, options});
    }

    /**
     * Draw a rectangle to the screen
     *
     * @param {Rectangle} rectangle
     * @param {Object} options
     */
    drawRectangle(rectangle, options = {}) {
        console.log('Not drawing circle', {rectangle, options});
    }

    /**
     * Draw text to the screen
     *
     * @param {string} text
     * @param {Vector} position
     */
    drawText(text, position) {
        console.log('Not drawing circle', {text, position});
    }
}