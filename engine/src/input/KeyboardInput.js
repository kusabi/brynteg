import Input from "./Input";
import Button from "./Button";

export default class KeyboardInput extends Input {

    _a;
    _b;
    _down;
    _left;
    _right;
    _up;
    _x;
    _y;

    constructor() {
        super();
        this._a = new Button();
        this._b = new Button();
        this._x = new Button();
        this._y = new Button();
        this._up = new Button();
        this._down = new Button();
        this._left = new Button();
        this._right = new Button();
        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    }

    get a() {
        return this._a
    }

    get b() {
        return this._b;
    }

    get down() {
        return this._down
    }

    get horizontal() {
        return (this.left.isDown ? -1 : 0) + (this.right.isDown ? 1 : 0);
    }

    get left() {
        return this._left;
    }

    get right() {
        return this._right;
    }

    get up() {
        return this._up
    }

    get vertical() {
        return (this.up.isDown ? 1 : 0) + (this.down.isDown ? -1 : 0);
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y
    }

    /**
     * Get the button from the event keycode
     *
     * @param {string} code
     * @return {Button|null}
     */
    getButtonFromKeyCode(code) {
        switch (code) {
            case 'KeyW':
            case 'ArrowUp':
                return this.up;
            case 'KeyS':
            case 'ArrowDown':
                return this.down;
            case 'KeyA':
            case 'ArrowLeft':
                return this.left;
            case 'KeyD':
            case 'ArrowRight':
                return this.right;
            case 'Numpad8':
                return this.y;
            case 'Numpad5':
                return this.a;
            case 'Numpad4':
                return this.x;
            case 'Numpad6':
                return this.b;
            default:
                return null;
        }
    }

    onKeyDown(event) {
        let button = this.getButtonFromKeyCode(event.code);
        if (button === null) {
            return;
        }
        button.justDown = !button.isDown;
        button.isDown = true;
        button.isUp = false;
        button.justUp = false;
    }

    onKeyUp(event) {
        let button = this.getButtonFromKeyCode(event.code);
        if (button === null) {
            return;
        }
        button.justDown = false;
        button.isDown = !button.isDown;
        button.isUp = true;
        button.justUp = true;
    }

    update() {
        for (const button of this.all) {
            button.justDown = false;
            button.justUp = false;
        }
    }
}