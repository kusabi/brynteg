import {Game, SceneManager} from "@brynteg/engine";
import {Gameplay, SplashScreen} from "./games/breakout/scenes";
import {MenuScreen} from "./hub/scenes";

export default class Examples extends Game {

    constructor(renderer, input) {
        super(renderer, input);

        SceneManager.instance.loadScene(new MenuScreen());
        // SceneManager.instance.loadScene(new Gameplay());
    }
}