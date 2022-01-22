import SceneManager from "./SceneManager";
import {Renderer} from "../renderer";
import {Input} from "../input";
import {Time} from "../time";
import Element from "./Element";

export default class Game extends Element {

    constructor(renderer, input) {
        super();
        Renderer.setRenderer(renderer);
        Input.setInput(input);
    }

    /**
     * The main game loop
     *
     * @param {number} time
     */
    loop(time) {
        Time.tick(time)
        this.update(Time.delta);
        this.render();
    }

    /**
     * Run the render calls
     *
     * @see Element.renderd
     */
    render() {
        Renderer.instance.clearScreen();
        // Renderer.instance.drawRectangle(Renderer.instance.window, {
        //     fillColor: 'rgba(0, 0, 0, 0.6)'
        // });
        SceneManager.instance.render();
    }

    /**
     * Start the game loop
     *
     * @param {number} time
     */
    start(time = 0) {
        this.loop(time);
        window.requestAnimationFrame(this.start.bind(this));
    }

    /**
     * Run the update calls
     *
     * @see Element.render
     */
    update() {
        SceneManager.instance.update();
        Input.instance.update()
    }
}