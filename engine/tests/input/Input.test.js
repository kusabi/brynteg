import {Button, Input} from "../../src";

class DummyInput extends Input {
    get a() {
        let b = new Button()
        b.justDown = true;
        b.isDown = true;
        b.justUp = false;
        b.isUp = false;
        return b;
    }

    get b() {
        let b = new Button()
        b.justDown = true;
        b.isDown = true;
        b.justUp = false;
        b.isUp = false;
        return b;
    }

    get x() {
        let b = new Button()
        b.justDown = true;
        b.isDown = true;
        b.justUp = false;
        b.isUp = false;
        return b;
    }

    get y() {
        let b = new Button()
        b.justDown = true;
        b.isDown = true;
        b.justUp = false;
        b.isUp = false;
        return b;
    }

    get up() {
        let b = new Button()
        b.justDown = true;
        b.isDown = true;
        b.justUp = false;
        b.isUp = false;
        return b;
    }

    get down() {
        let b = new Button()
        b.justDown = true;
        b.isDown = true;
        b.justUp = false;
        b.isUp = false;
        return b;
    }

    get left() {
        let b = new Button()
        b.justDown = true;
        b.isDown = true;
        b.justUp = false;
        b.isUp = false;
        return b;
    }

    get right() {
        let b = new Button()
        b.justDown = true;
        b.isDown = true;
        b.justUp = false;
        b.isUp = false;
        return b;
    }

    get any() {
        let b = new Button()
        b.justDown = true;
        b.isDown = true;
        b.justUp = false;
        b.isUp = false;
        return b;
    }
}

describe('Defaults', () => {
    test('Default instance', () => {
        expect(Input.instance).toBeInstanceOf(Input);
    });

    test('a', () => {
        expect(Input.a).toBeInstanceOf(Button);
        expect(Input.a.justDown).toBe(false);
        expect(Input.a.isDown).toBe(false);
        expect(Input.a.justUp).toBe(false);
        expect(Input.a.isUp).toBe(false);
    });

    test('b', () => {
        expect(Input.b).toBeInstanceOf(Button);
        expect(Input.b.justDown).toBe(false);
        expect(Input.b.isDown).toBe(false);
        expect(Input.b.justUp).toBe(false);
        expect(Input.b.isUp).toBe(false);
    });

    test('x', () => {
        expect(Input.x).toBeInstanceOf(Button);
        expect(Input.x.justDown).toBe(false);
        expect(Input.x.isDown).toBe(false);
        expect(Input.x.justUp).toBe(false);
        expect(Input.x.isUp).toBe(false);
    });

    test('y', () => {
        expect(Input.y).toBeInstanceOf(Button);
        expect(Input.y.justDown).toBe(false);
        expect(Input.y.isDown).toBe(false);
        expect(Input.y.justUp).toBe(false);
        expect(Input.y.isUp).toBe(false);
    });

    test('up', () => {
        expect(Input.up).toBeInstanceOf(Button);
        expect(Input.up.justDown).toBe(false);
        expect(Input.up.isDown).toBe(false);
        expect(Input.up.justUp).toBe(false);
        expect(Input.up.isUp).toBe(false);
    });

    test('down', () => {
        expect(Input.down).toBeInstanceOf(Button);
        expect(Input.down.justDown).toBe(false);
        expect(Input.down.isDown).toBe(false);
        expect(Input.down.justUp).toBe(false);
        expect(Input.down.isUp).toBe(false);
    });

    test('left', () => {
        expect(Input.left).toBeInstanceOf(Button);
        expect(Input.left.justDown).toBe(false);
        expect(Input.left.isDown).toBe(false);
        expect(Input.left.justUp).toBe(false);
        expect(Input.left.isUp).toBe(false);
    });

    test('right', () => {
        expect(Input.right).toBeInstanceOf(Button);
        expect(Input.right.justDown).toBe(false);
        expect(Input.right.isDown).toBe(false);
        expect(Input.right.justUp).toBe(false);
        expect(Input.right.isUp).toBe(false);
    });

    test('all', () => {
        expect(Input.all.length).toBe(8);
    });

    test('any', () => {
        expect(Input.any).toBe(null);
    });

    test('horizontal', () => {
        expect(Input.horizontal).toBe(0);
    });

    test('vertical', () => {
        expect(Input.vertical).toBe(0);
    });

    test('direction', () => {
        expect(Input.direction.x).toBe(0);
        expect(Input.direction.y).toBe(0);
        Input.instance = new DummyInput();
    });
});

describe('Abstracted access', () => {

    test('a', () => {
        expect(Input.a).toBeInstanceOf(Button);
        expect(Input.a.justDown).toBe(true);
        expect(Input.a.isDown).toBe(true);
        expect(Input.a.justUp).toBe(false);
        expect(Input.a.isUp).toBe(false);
    });

    test('b', () => {
        expect(Input.b).toBeInstanceOf(Button);
        expect(Input.b.justDown).toBe(true);
        expect(Input.b.isDown).toBe(true);
        expect(Input.b.justUp).toBe(false);
        expect(Input.b.isUp).toBe(false);
    });

    test('x', () => {
        expect(Input.x).toBeInstanceOf(Button);
        expect(Input.x.justDown).toBe(true);
        expect(Input.x.isDown).toBe(true);
        expect(Input.x.justUp).toBe(false);
        expect(Input.x.isUp).toBe(false);
    });

    test('y', () => {
        expect(Input.y).toBeInstanceOf(Button);
        expect(Input.y.justDown).toBe(true);
        expect(Input.y.isDown).toBe(true);
        expect(Input.y.justUp).toBe(false);
        expect(Input.y.isUp).toBe(false);
    });

    test('up', () => {
        expect(Input.up).toBeInstanceOf(Button);
        expect(Input.up.justDown).toBe(true);
        expect(Input.up.isDown).toBe(true);
        expect(Input.up.justUp).toBe(false);
        expect(Input.up.isUp).toBe(false);
    });

    test('down', () => {
        expect(Input.down).toBeInstanceOf(Button);
        expect(Input.down.justDown).toBe(true);
        expect(Input.down.isDown).toBe(true);
        expect(Input.down.justUp).toBe(false);
        expect(Input.down.isUp).toBe(false);
    });

    test('left', () => {
        expect(Input.left).toBeInstanceOf(Button);
        expect(Input.left.justDown).toBe(true);
        expect(Input.left.isDown).toBe(true);
        expect(Input.left.justUp).toBe(false);
        expect(Input.left.isUp).toBe(false);
    });

    test('right', () => {
        expect(Input.right).toBeInstanceOf(Button);
        expect(Input.right.justDown).toBe(true);
        expect(Input.right.isDown).toBe(true);
        expect(Input.right.justUp).toBe(false);
        expect(Input.right.isUp).toBe(false);
    });

    test('any', () => {
        expect(Input.any).toBeInstanceOf(Button);
        expect(Input.any.justDown).toBe(true);
        expect(Input.any.isDown).toBe(true);
        expect(Input.any.justUp).toBe(false);
        expect(Input.any.isUp).toBe(false);
    });

    test('horizontal', () => {
        expect(Input.horizontal).toBe(0);
    });

    test('vertical', () => {
        expect(Input.vertical).toBe(0);
    });

    test('direction', () => {
        expect(Input.direction.x).toBe(0);
        expect(Input.direction.y).toBe(0);
    });
});
