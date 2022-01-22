import {Rectangle, Vector} from "../../src";

describe('Constructor', () => {
    test('requires four numbers', () => {
        let r = new Rectangle(10, 20, 30, 40)
        expect(r.x).toBe(10);
        expect(r.y).toBe(20);
        expect(r.width).toBe(30);
        expect(r.height).toBe(40);
    });
});

describe('Assignment', () => {
    test('change the x value', () => {
        let v = new Rectangle(10, 20, 30, 40)
        v.x = 20;
        expect(v.x).toBe(20);
        expect(v.y).toBe(20);
        expect(v.width).toBe(30);
        expect(v.height).toBe(40);
    });

    test('change the y value', () => {
        let v = new Rectangle(10, 20, 30, 40)
        v.y = 30;
        expect(v.x).toBe(10);
        expect(v.y).toBe(30);
        expect(v.width).toBe(30);
        expect(v.height).toBe(40);
    });

    test('change the width value', () => {
        let v = new Rectangle(10, 20, 30, 40)
        v.width = 500;
        expect(v.x).toBe(10);
        expect(v.y).toBe(20);
        expect(v.width).toBe(500);
        expect(v.height).toBe(40);
    });

    test('change the height value', () => {
        let v = new Rectangle(10, 20, 30, 40)
        v.height = 500;
        expect(v.x).toBe(10);
        expect(v.y).toBe(20);
        expect(v.width).toBe(30);
        expect(v.height).toBe(500);
    });

    test('assign from another rectangle', () => {
        let a = new Rectangle(10, 10, 10, 10);
        let b = new Rectangle(20, 20, 20, 20);
        a = b.copy;
        b.x = 30;
        b.y = 30;
        b.width = 30;
        b.height = 30;
        expect(a.x).toBe(20);
        expect(a.y).toBe(20);
        expect(a.width).toBe(20);
        expect(a.height).toBe(20);
        expect(b.x).toBe(30);
        expect(b.y).toBe(30);
        expect(b.width).toBe(30);
        expect(b.height).toBe(30);
    });
});

describe('Magic accessors', () => {

    test('Set left', () => {
        let r = new Rectangle(10, 20, 30, 40)
        expect(r.left).toBe(10);
        r.left = 100;
        expect(r.left).toBe(100);
    });

    test('Set top', () => {
        let r = new Rectangle(10, 20, 30, 40)
        expect(r.top).toBe(60);
        r.top = 200;
        expect(r.top).toBe(200);
        expect(r.y).toBe(160);
    });

    test('Set right', () => {
        let r = new Rectangle(10, 20, 30, 40)
        expect(r.width).toBe(30);
        expect(r.right).toBe(40);
        r.right = 300;
        expect(r.width).toBe(30);
        expect(r.left).toBe(270);
        expect(r.right).toBe(300);
    });

    test('Set bottom', () => {
        let r = new Rectangle(10, 20, 30, 40)
        expect(r.height).toBe(40);
        expect(r.bottom).toBe(20);
        r.bottom = 400;
        expect(r.height).toBe(40)
        expect(r.top).toBe(440)
        expect(r.bottom).toBe(400)
    });

    test('Set center', () => {
        let r = new Rectangle(10, 20, 30, 40)
        expect(r.x).toBe(10);
        expect(r.y).toBe(20);
        expect(r.width).toBe(30);
        expect(r.height).toBe(40);
        r.center = new Vector(200, 250);
        expect(r.x).toBe(185);
        expect(r.y).toBe(235);
        expect(r.width).toBe(30);
        expect(r.height).toBe(40);
    });

    test('Set position', () => {
        let r = new Rectangle(10, 20, 30, 40)
        expect(r.x).toBe(10);
        expect(r.y).toBe(20);
        expect(r.width).toBe(30);
        expect(r.height).toBe(40);
        r.position = new Vector(200, 250);
        expect(r.x).toBe(200);
        expect(r.y).toBe(250);
        expect(r.width).toBe(30);
        expect(r.height).toBe(40);
    });

    test('Set size', () => {
        let r = new Rectangle(10, 20, 30, 40)
        expect(r.x).toBe(10);
        expect(r.y).toBe(20);
        expect(r.width).toBe(30);
        expect(r.height).toBe(40);
        r.size = new Vector(200, 250);
        expect(r.x).toBe(10);
        expect(r.y).toBe(20);
        expect(r.width).toBe(200);
        expect(r.height).toBe(250);
    });

    test('Get left', () => {
        let r = new Rectangle(10, 20, 30, 40)
        expect(r.left).toBe(10);
    });

    test('Get top', () => {
        let r = new Rectangle(10, 20, 30, 40)
        expect(r.top).toBe(60);
    });

    test('Get right', () => {
        let r = new Rectangle(10, 20, 30, 40)
        expect(r.right).toBe(40);
    });

    test('Get bottom', () => {
        let r = new Rectangle(10, 20, 30, 40)
        expect(r.bottom).toBe(20);
    });

    test('Get top left', () => {
        let r = new Rectangle(10, 20, 30, 40)
        expect(r.tl.x).toBe(10);
        expect(r.tl.y).toBe(60);
    });

    test('Get top right', () => {
        let r = new Rectangle(10, 20, 30, 40)
        expect(r.tr.x).toBe(40);
        expect(r.tr.y).toBe(60);
    });

    test('Get bottom left', () => {
        let r = new Rectangle(10, 20, 30, 40)
        expect(r.bl.x).toBe(10);
        expect(r.bl.y).toBe(20);
    });

    test('Get bottom right', () => {
        let r = new Rectangle(10, 20, 30, 40)
        expect(r.br.x).toBe(40);
        expect(r.br.y).toBe(20);
    });

    test('Get center', () => {
        let r = new Rectangle(10, 20, 30, 40)
        expect(r.center.x).toBe(25);
        expect(r.center.y).toBe(40);
    });

    test('Get position', () => {
        let r = new Rectangle(10, 20, 30, 40)
        expect(r.position.x).toBe(10);
        expect(r.position.y).toBe(20);
    });

    test('Get size', () => {
        let r = new Rectangle(10, 20, 30, 40)
        expect(r.size.x).toBe(30);
        expect(r.size.y).toBe(40);
    });

    test('Get area', () => {
        expect(new Rectangle(0, 0, 2, 10).area).toBe(20);
        expect(new Rectangle(0, 0, 20, 10).area).toBe(200);
    });
});

describe('Modifiers', () => {

    test('translate', () => {
        let r = new Rectangle(10, 20, 30, 40)

        r.translate(30);
        expect(r.x).toBe(40);
        expect(r.y).toBe(50);

        r.translate(10, 20);
        expect(r.x).toBe(50);
        expect(r.y).toBe(70);

        r.translate(Vector.up.scale(10));
        expect(r.x).toBe(50);
        expect(r.y).toBe(80);
    });

});

describe('Contains', () => {
    test('Vector', () => {
        let a = new Rectangle(0, 0, 10, 10);
        expect(a.containsVector(new Vector(0, 0))).toBe(true);
        expect(a.containsVector(new Vector(0, 10))).toBe(true);
        expect(a.containsVector(new Vector(10, 0))).toBe(true);
        expect(a.containsVector(new Vector(10, 10))).toBe(true);
        expect(a.containsVector(new Vector(5, 5))).toBe(true);

        expect(a.containsVector(new Vector(-1, 0))).toBe(false);
        expect(a.containsVector(new Vector(0, -1))).toBe(false);
        expect(a.containsVector(new Vector(-1, -1))).toBe(false);
        expect(a.containsVector(new Vector(11, 10))).toBe(false);
        expect(a.containsVector(new Vector(10, 11))).toBe(false);
        expect(a.containsVector(new Vector(11, 11))).toBe(false);
    });

    test('Rectangle', () => {
        let a = new Rectangle(0, 0, 10, 10);
        expect(a.containsRectangle(new Rectangle(0, 0, 10, 10))).toBe(true);
        expect(a.containsRectangle(new Rectangle(4, 5, 1, 2))).toBe(true);

        expect(a.containsRectangle(new Rectangle(-1, 0, 10, 10))).toBe(false);
        expect(a.containsRectangle(new Rectangle(0, -1, 10, 10))).toBe(false);
        expect(a.containsRectangle(new Rectangle(-1, -1, 10, 10))).toBe(false);
        expect(a.containsRectangle(new Rectangle(0, 0, 11, 10))).toBe(false);
        expect(a.containsRectangle(new Rectangle(0, 0, 10, 11))).toBe(false);
        expect(a.containsRectangle(new Rectangle(0, 0, 11, 11))).toBe(false);
    });
});


describe('Overlaps', () => {

    test('rectangle', () => {
        let a = new Rectangle(0, 0, 10, 10);
        let b = new Rectangle(4, 4, 2, 2);

        let o = a.overlappingRectangle(b);
        expect(a.overlapsRectangle(b)).toBe(true);
        expect(o.x).toBe(4);
        expect(o.y).toBe(4);
        expect(o.height).toBe(2);
        expect(o.width).toBe(2);

        o = b.overlappingRectangle(a);
        expect(b.overlapsRectangle(a)).toBe(true);
        expect(o.x).toBe(4);
        expect(o.y).toBe(4);
        expect(o.height).toBe(2);
        expect(o.width).toBe(2);

        let noOverlap = new Rectangle(0, 0, 10, 10).overlappingRectangle(new Rectangle(100, 100, 10, 10));
        expect(noOverlap).toBe(null);

    });

});