import {Vector} from "../../src";

describe('Constructor', () => {
    test('requires two numbers', () => {
        let v = new Vector(10, 10)
        expect(v.x).toBe(10);
        expect(v.y).toBe(10);
    });

    test('createFromAngle', () => {

        expect(Vector.createFromAngle(0).x).toBe(0);
        expect(Vector.createFromAngle(0).y).toBe(1);

        expect(Vector.createFromAngle(45).x).toBe(0.7071067812);
        expect(Vector.createFromAngle(45).y).toBe(0.7071067812);

        expect(Vector.createFromAngle(90).x).toBe(1);
        expect(Vector.createFromAngle(90).y).toBe(0);

        expect(Vector.createFromAngle(135).x).toBe(0.7071067812);
        expect(Vector.createFromAngle(135).y).toBe(-0.7071067812);

        expect(Vector.createFromAngle(180).x).toBe(0);
        expect(Vector.createFromAngle(180).y).toBe(-1);

        expect(Vector.createFromAngle(225).x).toBe(-0.7071067812);
        expect(Vector.createFromAngle(225).y).toBe(-0.7071067812);

        expect(Vector.createFromAngle(270).x).toBe(-1);
        expect(Vector.createFromAngle(270).y).toBe(0);

        expect(Vector.createFromAngle(315).x).toBe(-0.7071067812);
        expect(Vector.createFromAngle(315).y).toBe(0.7071067812);

        expect(Vector.createFromAngle(360).x).toBe(0);
        expect(Vector.createFromAngle(360).y).toBe(1);
    });
});

describe('Comparisons', () => {
    test('equals', () => {
        const vectors = [Vector.zero, Vector.one, Vector.left, Vector.right, Vector.up, Vector.down];
        for (let a in vectors) {
            for (let b in vectors) {
                expect(vectors[a].equals(vectors[b])).toBe(a === b);
            }
        }
    });
});


describe('Assignment', () => {
    test('change the x value', () => {
        let v = new Vector(10, 10);
        v.x = 20;
        expect(v.x).toBe(20);
        expect(v.y).toBe(10);
    });

    test('change the y value', () => {
        let v = new Vector(10, 10);
        v.y = 20;
        expect(v.x).toBe(10);
        expect(v.y).toBe(20);
    });

    test('assign from another vector', () => {
        let a = new Vector(10, 10);
        let b = new Vector(20, 20);
        a = b.copy;
        b.x = 30;
        b.y = 30;
        expect(a.x).toBe(20);
        expect(a.y).toBe(20);
        expect(b.x).toBe(30);
        expect(b.y).toBe(30);
    });
});

describe('Static standard vectors', () => {
    test('Vector.zero returns a 0, 0 Vector', () => {
        expect(Vector.zero.x).toBe(0);
        expect(Vector.zero.y).toBe(0);
    });

    test('Vector.one returns a 0, 0 Vector', () => {
        expect(Vector.one.x).toBe(1);
        expect(Vector.one.y).toBe(1);
    });

    test('Vector.up returns a 0, -1 Vector', () => {
        expect(Vector.up.x).toBe(0);
        expect(Vector.up.y).toBe(1);
    });

    test('Vector.down returns a 0, 1 Vector', () => {
        expect(Vector.down.x).toBe(0);
        expect(Vector.down.y).toBe(-1);
    });

    test('Vector.left returns a -1, 0 Vector', () => {
        expect(Vector.left.x).toBe(-1);
        expect(Vector.left.y).toBe(0);
    });

    test('Vector.right returns a 1, 0 Vector', () => {
        expect(Vector.right.x).toBe(1);
        expect(Vector.right.y).toBe(0);
    });
});

describe('Magic Access', () => {
    test('length of vector', () => {
        let v = new Vector(3, 4)
        expect(v.length).toBe(5);
    });

    test('length of vector 0, 0', () => {
        let v = new Vector(0, 0)
        expect(v.length).toBe(0);
    });

    test('angle of vector', () => {
        expect(Vector.zero.angle).toBe(0);
        expect(Vector.up.angle).toBe(0);
        expect(Vector.down.angle).toBe(180);
        expect(Vector.right.angle).toBe(90);
        expect(Vector.left.angle).toBe(270);
        expect(new Vector(1, 1).angle).toBe(45);
        expect(new Vector(1, -1).angle).toBe(135);
        expect(new Vector(-1, -1).angle).toBe(225);
        expect(new Vector(-1, 1).angle).toBe(315);
    })

    test('getting the unit vector returns a new instance of vector, and leave the new one in place', () => {
        let v = new Vector(3, 4)
        expect(v.normalized.length).toBe(1);
        expect(v.length).toBe(5);
    });

    test('copy is not the same instance', () => {
        let v = new Vector(3, 4);
        let c = v.copy;
        c.x = 10;
        c.y = 20;
        expect(v.x).toBe(3);
        expect(v.y).toBe(4);
        expect(c.x).toBe(10);
        expect(c.y).toBe(20);
    })

});

describe('Modifiers', () => {
    test('scale with integer scales uniformly', () => {
        let v = new Vector(3, 4)
        v.scale(10);
        expect(v.x).toBe(30);
        expect(v.y).toBe(40);
    });

    test('scale with two integers scales non-uniformly', () => {
        let v = new Vector(3, 4)
        v.scale(10, 100);
        expect(v.x).toBe(30);
        expect(v.y).toBe(400);
    });

    test('scale with Vector scales accordingly', () => {
        let v = new Vector(3, 4)
        v.scale(new Vector(2, 100));
        expect(v.x).toBe(6);
        expect(v.y).toBe(400);
    });

    test('translate with integer scales uniformly', () => {
        let v = new Vector(3, 4)
        v.translate(10);
        expect(v.x).toBe(13);
        expect(v.y).toBe(14);
    });

    test('translate with two integers scales non-uniformly', () => {
        let v = new Vector(3, 4)
        v.translate(10, 100);
        expect(v.x).toBe(13);
        expect(v.y).toBe(104);
    });

    test('translate with Vector scales accordingly', () => {
        let v = new Vector(3, 4)
        v.translate(new Vector(2, 100));
        expect(v.x).toBe(5);
        expect(v.y).toBe(104);
    });

    test('subtract negates the translate', () => {
        let v = new Vector(3, 4)
        v.subtract(new Vector(2, 100));
        expect(v.x).toBe(1);
        expect(v.y).toBe(-96);


        v = new Vector(3, 4)
        v.subtract(1);
        expect(v.x).toBe(2);
        expect(v.y).toBe(3);

        v = new Vector(3, 4)
        v.subtract(1, 2);
        expect(v.x).toBe(2);
        expect(v.y).toBe(2);
    });

    test('normalize transforms this instance into the unit length vector', () => {
        let v = new Vector(3, 4)
        expect(v.normalize().length).toBe(1);
        expect(v.length).toBe(1);
    });
});

describe('Spacial math', () => {

    test('Angle to another vector', () => {
        expect(Vector.zero.angleTo(Vector.up)).toBe(0);
        expect(Vector.zero.angleTo(Vector.right)).toBe(90);
        expect(Vector.zero.angleTo(Vector.down)).toBe(180);
        expect(Vector.zero.angleTo(Vector.left)).toBe(270);
    });

    test('Direction to another vector', () => {
        let d = Vector.zero.directionTo(Vector.up);
        expect(d.x).toBe(0);
        expect(d.y).toBe(1)

        d = Vector.zero.directionTo(Vector.down);
        expect(d.x).toBe(0);
        expect(d.y).toBe(-1)

        d = Vector.zero.directionTo(Vector.left);
        expect(d.x).toBe(-1);
        expect(d.y).toBe(0)

        d = Vector.zero.directionTo(Vector.right);
        expect(d.x).toBe(1);
        expect(d.y).toBe(0)
    });

    test('Distance to another vector', () => {
        let d = Vector.zero.distanceTo(Vector.up);
        expect(d).toBe(1);

        d = Vector.zero.distanceTo(Vector.down);
        expect(d).toBe(1);

        d = Vector.zero.distanceTo(Vector.left);
        expect(d).toBe(1);

        d = Vector.zero.distanceTo(Vector.right);
        expect(d).toBe(1);

        d = new Vector(-7, -4).distanceTo(new Vector(17, 6.5));
        expect(d).toBe(26.196373794859472);
    });

    test('Dot products', () => {
        expect(Vector.dot(new Vector(7, 2), new Vector(3, 6))).toBe(33);
    });

    test('Angle between', () => {
        expect(Vector.angle(Vector.up, new Vector(0, 1))).toBe(0);
        expect(Vector.angle(Vector.up, new Vector(0, 100))).toBe(0);
        expect(Vector.angle(Vector.up, new Vector(1, 0))).toBe(90);
        expect(Vector.angle(Vector.up, new Vector(100, 0))).toBe(90);
        expect(Vector.angle(Vector.up, new Vector(0, -1))).toBe(180);
        expect(Vector.angle(Vector.up, new Vector(0, -100))).toBe(180);
        expect(Vector.angle(Vector.up, new Vector(-1, 0))).toBe(270);
        expect(Vector.angle(Vector.up, new Vector(-100, 0))).toBe(270);
    });
});