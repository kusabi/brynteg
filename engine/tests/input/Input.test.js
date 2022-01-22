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
}
Input.setInput(new DummyInput());

describe('Abstracted access', () => {
    test('a', () => {
        expect(Input.a).toBeInstanceOf(Button);
        expect(Input.a.justDown).toBe(true);
        expect(Input.a.isDown).toBe(true);
        expect(Input.a.justUp).toBe(false);
        expect(Input.a.isUp).toBe(false);
    });
});
