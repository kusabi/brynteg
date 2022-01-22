import {Circle, Vector} from "../../src";

describe('Constructor', () => {
    test('requires three numbers', () => {
        let c = new Circle(10, 20, 30)
        expect(c.x).toBe(10);
        expect(c.y).toBe(20);
        expect(c.radius).toBe(30);
    });
});

describe('Magic accessors', () => {
    test('get left', () => {
        let c = new Circle(10, 20, 30)
        expect(c.left).toBe(-20);
    });

    test('get bottom', () => {
        let c = new Circle(10, 20, 30)
        expect(c.bottom).toBe(-10);
    });

    test('get right', () => {
        let c = new Circle(10, 20, 30)
        expect(c.right).toBe(40);
    });

    test('get top', () => {
        let c = new Circle(10, 20, 30)
        expect(c.top).toBe(50);
    });

    test('get height', () => {
        let c = new Circle(10, 20, 30)
        expect(c.height).toBe(60);
    });

    test('get width', () => {
        let c = new Circle(10, 20, 30)
        expect(c.width).toBe(60);
    });

    test('get position', () => {
        let c = new Circle(10, 20, 30)
        expect(c.position).toBeInstanceOf(Vector);
        expect(c.position.x).toBe(10);
        expect(c.position.y).toBe(20);
    });

    test('get circumference', () => {
        expect(new Circle(0, 0, 10).circumference).toBe(62.83185307179586);
    });

    test('get diameter', () => {
        expect(new Circle(0, 0, 10).diameter).toBe(20);
    });

    test('get area', () => {
        expect(new Circle(0, 0, 10).area).toBe(314.1592653589793);
    });

    test('set left', () => {
        let c = new Circle(10, 20, 30)
        c.left = 0;
        expect(c.left).toBe(0);
        expect(c.x).toBe(30);
    });

    test('set bottom', () => {
        let c = new Circle(10, 20, 30)
        c.bottom = 0;
        expect(c.bottom).toBe(0);
        expect(c.y).toBe(30);
    });

    test('set right', () => {
        let c = new Circle(10, 20, 30)
        c.right = 0;
        expect(c.right).toBe(0);
        expect(c.x).toBe(-30);
    });

    test('set top', () => {
        let c = new Circle(10, 20, 30)
        c.top = 0;
        expect(c.top).toBe(0);
        expect(c.y).toBe(-30);
    });

    test('set height', () => {
        let c = new Circle(10, 20, 30)
        c.height = 10;
        expect(c.height).toBe(10);
        expect(c.radius).toBe(5);
    });

    test('set width', () => {
        let c = new Circle(10, 20, 30)
        c.width = 10;
        expect(c.width).toBe(10);
        expect(c.radius).toBe(5);
    });

    test('set circumference', () => {
        let c = new Circle(0, 0, 10);
        expect(c.circumference).toBe(62.83185307179586);
        c.circumference = 10;
        expect(c.circumference).toBe(10);
        expect(c.radius).toBe(1.5915494309189535);
    });

    test('set diameter', () => {
        let c = new Circle(0, 0, 10);
        expect(c.diameter).toBe(20);
        c.diameter = 10;
        expect(c.diameter).toBe(10);
        expect(c.radius).toBe(5);
    });

    test('set area', () => {
        let c = new Circle(0, 0, 10);
        expect(c.area).toBe(314.1592653589793);
        c.area = 10;
        expect(c.area).toBe(10);
        expect(c.radius).toBe(1.7841241161527712);
    });
});


describe('Contains', () => {
    test('Point', () => {
        expect(new Circle(0, 0, 10).containsVector(new Vector(0, 0))).toBe(true);
        expect(new Circle(0, 0, 10).containsVector(new Vector(-10, 0))).toBe(true);
        expect(new Circle(0, 0, 10).containsVector(new Vector(-11, 0))).toBe(false);
        expect(new Circle(0, 0, 10).containsVector(new Vector(0, -10))).toBe(true);
        expect(new Circle(0, 0, 10).containsVector(new Vector(0, -11))).toBe(false);
        expect(new Circle(0, 0, 10).containsVector(new Vector(10, 0))).toBe(true);
        expect(new Circle(0, 0, 10).containsVector(new Vector(11, 0))).toBe(false);
        expect(new Circle(0, 0, 10).containsVector(new Vector(0, 10))).toBe(true);
        expect(new Circle(0, 0, 10).containsVector(new Vector(0, 11))).toBe(false);
    });
});


describe('Overlaps', () => {

    test('Circle', () => {
        expect(new Circle(0, 0, 10).overlapsCircle(new Circle(0, 0, 10))).toBe(true);
        expect(new Circle(0, 0, 10).overlapsCircle(new Circle(20, 0, 10))).toBe(true);
        expect(new Circle(0, 0, 10).overlapsCircle(new Circle(21, 0, 10))).toBe(false);
        expect(new Circle(0, 0, 10).overlapsCircle(new Circle(0, 20, 10))).toBe(true);
        expect(new Circle(0, 0, 10).overlapsCircle(new Circle(0, 21, 10))).toBe(false);
    });
});