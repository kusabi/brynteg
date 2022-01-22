import "./index.css";
import {CanvasRenderer} from "@brynteg/engine";
import Examples from "./Examples";
import KeyboardInput from "@brynteg/engine/src/input/KeyboardInput";


let game = new Examples(
    new CanvasRenderer(document.getElementById('canvas')),
    new KeyboardInput()
);


// The game loop
function loop(time) {
    game.loop(time);
    window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);

