import {Circle, Scene, Vector} from "@brynteg/engine";

export default class CircleOverlap extends Scene {

    constructor() {
        super();

        this.a = new Circle(20, 20, 10);
        this.av = new Vector(300);
        this.b = new Circle(100, 100, 40);
        this.bv = new Vector(200);
        this.c = new Circle(30, 300, 60);
        this.cv = new Vector(100);

    }

    draw(renderer) {
        renderer.drawCircle(this.a, {fill: true, fillColor: '#2d2', strokeColor: '#2d2'});
        renderer.drawCircle(this.b, {fill: true, fillColor: '#22d', strokeColor: '#22d'});
        renderer.drawCircle(this.c, {fill: true, fillColor: '#d22', strokeColor: '#d22'});


        if (this.a.overlapsCircle(this.b) || this.a.overlapsCircle(this.c)) {
            renderer.drawCircle(this.a, {fill: true, fillColor: '#dd2', strokeColor: '#dd2'});
        }

        if (this.b.overlapsCircle(this.a) || this.b.overlapsCircle(this.c)) {
            renderer.drawCircle(this.b, {fill: true, fillColor: '#2dd', strokeColor: '#2dd'});
        }

        if (this.c.overlapsCircle(this.a) || this.c.overlapsCircle(this.b)) {
            renderer.drawCircle(this.c, {fill: true, fillColor: '#d2d', strokeColor: '#d2d'});
        }

    }

    update(delta) {
        this.a.position.translate(this.av.copy.scale(delta));
        this.b.position.translate(this.bv.copy.scale(delta));
        this.c.position.translate(this.cv.copy.scale(delta));

        const circles = [this.a, this.b, this.c];
        const velocities = [this.av, this.bv, this.cv];
        for (let ia in circles) {
            const ca = circles[ia];
            const va = velocities[ia];

            // Collide to the right
            if (ca.right >= 800) {
                va.x *= -1;
                ca.right = 800;
            }

            // Collide to the left
            if (ca.left <= 0) {
                va.x *= -1;
                ca.left = 0;
            }

            // Collide with the bottom
            if (ca.bottom >= 600) {
                va.y *= -1;
                ca.bottom = 600;
            }

            // Collide with the top
            if (ca.top <= 0) {
                va.y *= -1;
                ca.top = 0;
            }

            for (let ib in circles) {
                if (ia !== ib) {
                    const cb = circles[ib];
                    const vb = velocities[ib];

                    if (ca.overlapsCircle(cb)) {

                        // const fa = ca.radius * va.length;
                        // const fb = cb.radius * vb.length;
                        //
                        // const reflect = cb.position.directionTo(ca.position).unit.scale(fb / fa);
                        // const push = va.unit.scale(fa / fb);
                        // const balance = reflect.copy.translate(push);
                        //
                        // console.log({balance})
                        // va.x = balance.x;
                        // va.y = balance.y;
                        // va.scale(-1);
                        // vb.scale(-1);
                    }
                }

            }
        }

    }
}