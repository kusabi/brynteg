import {Input, Rectangle, Renderer, Scene, SceneManager} from "@brynteg/engine";
import MenuScreen from "./MenuScreen";


export default class SplashScreen extends Scene {

    constructor() {
        super();

        this.counter = 0;
        this.underscoreVisible = true;
    }

    render() {

        const center = Renderer.instance.window.center;

        Renderer.instance.drawText("Brynteg", center, {
            fillColor: 'white',
            fontSize: '3rem',
            textAlign: 'center',
            fontFamily: 'Courier'
        });

        if (this.underscoreVisible === true) {
            Renderer.instance.drawRectangle(new Rectangle(center.x + 105, center.y, 20, 2), {
                fill: true,
                fillColor: 'white',
                strokeColor: 'white',
            })
        }
    }

    update() {
        if (this.counter++ > 25) {
            this.counter = 0;
            this.underscoreVisible = !this.underscoreVisible;
        }

        if (Input.instance.anyKey) {
            SceneManager.instance.loadScene(new MenuScreen())
        }
    }
}