import {Element, Input, Renderer, SceneManager, Vector} from "@brynteg/engine";

export default class Menu extends Element {

    position;

    selected = 0;

    items = [];

    constructor(position) {
        super();
        this.position = position;

        this.cursorCounter = 0;
        this.cursorVisible = true;
    }

    push(text, callback) {
        this.items.push({text, callback});
    }

    update() {
        if (this.cursorCounter++ > 25) {
            this.cursorCounter = 0;
            this.cursorVisible = !this.cursorVisible;
        }

        if (Input.instance.up.justDown) {
            this.selected++;
            if (this.selected >= this.items.length) {
                this.selected = 0;
            }
        }

        if (Input.instance.down.justDown) {
            this.selected--;
            if (this.selected < 0) {
                this.selected = this.items.length - 1;
            }
        }

        if (Input.instance.a.justDown) {
            this.items[this.selected].callback();
        }
    }

    render() {
        const pos = this.position.copy;
        const selected = this.selected.toString();
        for (const index in this.items) {
            if (selected === index && this.cursorVisible) {
                Renderer.instance.drawText('>', pos.copy.translate(new Vector(-40, 0)), {
                    fontSize: '3rem',
                    fontFamily: 'Courier'
                });
            }
            Renderer.instance.drawText(this.items[index].text, pos, {
                fontSize: '3rem',
                fontFamily: 'Courier'
            });
            pos.y += 50;
        }
    }
}