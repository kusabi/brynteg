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
     * Get the window dimensions as a rectangle
     *
     * @return {Rectangle}
     */
    get window() {
        return new Rectangle(0, 0, 0, 0);
    }

    /**
     * Set the renderer instance
     *
     * @param {Renderer} renderer
     */
    static setRenderer(renderer) {
        Renderer.singleton = renderer;
    }

    /**
     * Clear the entire rendering screen
     */
    clearScreen() {

    }

    drawCircle(circle, options = {}) {
        console.log('Not drawing circle', {circle, options});
    }

    drawRectangle(rectangle, options = {}) {
        console.log('Not drawing circle', {rectangle, options});
    }

    drawText(text, position) {
        console.log('Not drawing circle', {text, position});
    }
}