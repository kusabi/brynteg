import {Scene, SceneManager, Vector} from "@brynteg/engine";
import {Menu} from "../elements";
import {SplashScreen as PongSplashScreen} from "../../games/pong/scenes";
import {SplashScreen as BreakoutSplashScreen} from "../../games/breakout/scenes";
import {SplashScreen as RpgSplashScreen} from "../../games/rpg/scenes";


export default class MenuScreen extends Scene {

    constructor() {
        super();
        this.menu = new Menu(new Vector(50, 50));

        this.menu.push('Pong', () => {
            SceneManager.instance.loadScene(new PongSplashScreen())
        })

        this.menu.push('Breakout', () => {
            SceneManager.instance.loadScene(new BreakoutSplashScreen())
        })

        this.menu.push('RPG', () => {
            SceneManager.instance.loadScene(new RpgSplashScreen())
        })
    }

    render() {
        this.menu.render()
    }

    update() {
        this.menu.update()
    }
}