import {Rectangle, Renderer, Scene, Vector} from "@brynteg/engine";

export default class RectangleOverlap extends Scene {

    constructor() {
        super();

        this.a = new Rectangle(0, 0, 100, 100);
        this.av = new Vector(150);
        this.b = new Rectangle(100, 100, 200, 200);
        this.bv = new Vector(100);
        this.c = new Rectangle(20, 300, 300, 300);
        this.cv = new Vector(200);

    }

    render() {
        Renderer.drawRectangle(this.a, {fill: true, fillColor: '#2d2', strokeColor: '#2d2'});
        Renderer.drawRectangle(this.b, {fill: true, fillColor: '#22d', strokeColor: '#22d'});
        Renderer.drawRectangle(this.c, {fill: true, fillColor: '#d22', strokeColor: '#d22'});

        if (this.a.overlaps(this.b)) {
            const o = this.a.overlap(this.b);
            Renderer.drawRectangle(o, {fill: true, fillColor: '#dd2', strokeColor: '#dd2'});
        }

        if (this.a.overlaps(this.c)) {
            const o = this.a.overlap(this.c);
            Renderer.drawRectangle(o, {fill: true, fillColor: '#dd2', strokeColor: '#dd2'});
        }

        if (this.b.overlaps(this.c)) {
            const o = this.b.overlap(this.c);
            Renderer.drawRectangle(o, {fill: true, fillColor: '#dd2', strokeColor: '#dd2'});
        }

        if (this.a.overlaps(this.b)) {
            const oa = this.a.overlap(this.b);
            if (this.c.overlaps(oa)) {
                const o = this.c.overlap(oa);
                Renderer.drawRectangle(o, {fill: true, fillColor: '#2dd', strokeColor: '#2dd'});
            }
        }
    }

    update(delta) {
        this.a.position.translate(this.av.copy.scale(delta));
        this.b.position.translate(this.bv.copy.scale(delta));
        this.c.position.translate(this.cv.copy.scale(delta));

        if (this.a.right >= 800) {
            this.av.x *= -1;
            this.a.right = 800;
        }
        if (this.a.left <= 0) {
            this.av.x *= -1;
            this.a.left = 0;
        }

        if (this.a.bottom >= 600) {
            this.av.y *= -1;
            this.a.bottom = 600;
        }
        if (this.a.top <= 0) {
            this.av.y *= -1;
            this.a.top = 0;
        }


        if (this.b.right >= 800) {
            this.bv.x *= -1;
            this.b.right = 800;
        }
        if (this.b.left <= 0) {
            this.bv.x *= -1;
            this.b.left = 0;
        }

        if (this.b.bottom >= 600) {
            this.bv.y *= -1;
            this.b.bottom = 600;
        }
        if (this.b.top <= 0) {
            this.bv.y *= -1;
            this.b.top = 0;
        }


        if (this.c.right >= 800) {
            this.cv.x *= -1;
            this.c.right = 800;
        }
        if (this.c.left <= 0) {
            this.cv.x *= -1;
            this.c.left = 0;
        }

        if (this.c.bottom >= 600) {
            this.cv.y *= -1;
            this.c.bottom = 600;
        }
        if (this.c.top <= 0) {
            this.cv.y *= -1;
            this.c.top = 0;
        }
    }
}