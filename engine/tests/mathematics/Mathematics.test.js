import {Mathematics} from '../../src'

test('abs', () => {
    expect(Mathematics.abs(10)).toBe(10);
    expect(Mathematics.abs(-10)).toBe(10);
});

test('acos', () => {
    expect(Mathematics.acos(.2)).toBe(Math.acos(.2));
});

test('acosh', () => {
    expect(Mathematics.acosh(10)).toBe(Math.acosh(10));
});

test('asin', () => {
    expect(Mathematics.asin(.2)).toBe(Math.asin(.2));
});

test('asinh', () => {
    expect(Mathematics.asinh(10)).toBe(Math.asinh(10));
});

test('atan', () => {
    expect(Mathematics.atan(.2)).toBe(Math.atan(.2));
});

test('atan2', () => {
    expect(Mathematics.atan2(10, 20)).toBe(Math.atan2(10, 20));
});


test('atanh', () => {
    expect(Mathematics.atanh(.1)).toBe(Math.atanh(.1));
});

test('cbrt', () => {
    expect(Mathematics.cbrt(1000)).toBe(Math.cbrt(1000));
});

test('ceil', () => {
    expect(Mathematics.ceil(10.1)).toBe(Math.ceil(10.1));
});

test('clamp', () => {
    expect(Mathematics.clamp(5, 0, 10)).toBe(5);
    expect(Mathematics.clamp(5, 5, 10)).toBe(5);
    expect(Mathematics.clamp(5, 6, 10)).toBe(6);
    expect(Mathematics.clamp(10, 6, 10)).toBe(10);
    expect(Mathematics.clamp(11, 6, 10)).toBe(10);
    expect(Mathematics.clamp(11, 5, 5)).toBe(5);
    expect(Mathematics.clamp(1000, 0, 100)).toBe(100);
    expect(Mathematics.clamp(-1000, 0, 100)).toBe(0);
});

test('clz32', () => {
    expect(Mathematics.clz32(10)).toBe(Math.clz32(10));
});

test('cos', () => {
    expect(Mathematics.cos(0)).toBe(Math.cos(0));
    expect(Mathematics.cos(90)).toBe(Math.cos(90));
});

test('cosh', () => {
    expect(Mathematics.cosh(.5)).toBe(Math.cosh(.5));
});

test('exp', () => {
    expect(Mathematics.exp(10)).toBe(Math.exp(10));
});

test('expm1', () => {
    expect(Mathematics.expm1(10)).toBe(Math.expm1(10));
});

test('floor', () => {
    expect(Mathematics.floor(10.9999)).toBe(Math.floor(10.9999));
});

test('fround', () => {
    expect(Mathematics.fround(10.99)).toBe(Math.fround(10.99));
});

test('hypot', () => {
    expect(Mathematics.hypot()).toBe(0);
    expect(Mathematics.hypot(10)).toBe(10);
    expect(Mathematics.hypot(-10)).toBe(10);
    expect(Mathematics.hypot(1, 2, Infinity)).toBe(Infinity);
    expect(Mathematics.hypot(1, 2, -Infinity)).toBe(Infinity);
    expect(Mathematics.hypot(1, 2, NaN)).toBe(NaN);
    expect(Mathematics.hypot(1, 2, 3, 4, 5)).toBe(7.416198487095663);
});

test('imul', () => {
    expect(Mathematics.imul(7, 5)).toBe(Math.imul(7, 5));
});

test('lerp', () => {
    expect(Mathematics.lerp(10, 20, .5)).toBe(15);
    expect(Mathematics.lerp(10, 20, .2)).toBe(12);
    expect(Mathematics.lerp(10, 20, 1)).toBe(20);
    expect(Mathematics.lerp(10, 20, 0)).toBe(10);
    expect(Mathematics.lerp(10, 20, 2)).toBe(30);
});

test('log', () => {
    expect(Mathematics.log(10)).toBe(Math.log(10));
});

test('log10', () => {
    expect(Mathematics.log10(10)).toBe(Math.log10(10));
});

test('log1p', () => {
    expect(Mathematics.log1p(10)).toBe(Math.log1p(10));
});

test('log2', () => {
    expect(Mathematics.log2(10)).toBe(Math.log2(10));
});

test('max', () => {
    expect(Mathematics.max(5, 0, 10)).toBe(10);
});

test('min', () => {
    expect(Mathematics.min(5, 0, 10)).toBe(0);
});

test('pingPong', () => {
    expect(Mathematics.pingPong(-8, 1, 5)).toBe(2);
    expect(Mathematics.pingPong(-7, 1, 5)).toBe(1);
    expect(Mathematics.pingPong(-6, 1, 5)).toBe(2);
    expect(Mathematics.pingPong(-5, 1, 5)).toBe(3);
    expect(Mathematics.pingPong(-4, 1, 5)).toBe(4);
    expect(Mathematics.pingPong(-3, 1, 5)).toBe(5);
    expect(Mathematics.pingPong(-2, 1, 5)).toBe(4);
    expect(Mathematics.pingPong(-1, 1, 5)).toBe(3);
    expect(Mathematics.pingPong(0, 1, 5)).toBe(2);
    expect(Mathematics.pingPong(1, 1, 5)).toBe(1);
    expect(Mathematics.pingPong(2, 1, 5)).toBe(2);
    expect(Mathematics.pingPong(3, 1, 5)).toBe(3);
    expect(Mathematics.pingPong(4, 1, 5)).toBe(4);
    expect(Mathematics.pingPong(5, 1, 5)).toBe(5);
    expect(Mathematics.pingPong(6, 1, 5)).toBe(4);
    expect(Mathematics.pingPong(7, 1, 5)).toBe(3);
    expect(Mathematics.pingPong(8, 1, 5)).toBe(2);
    expect(Mathematics.pingPong(9, 1, 5)).toBe(1);
    expect(Mathematics.pingPong(10, 1, 5)).toBe(2);
    expect(Mathematics.pingPong(11, 1, 5)).toBe(3);
    expect(Mathematics.pingPong(12, 1, 5)).toBe(4);
    expect(Mathematics.pingPong(13, 1, 5)).toBe(5);
    expect(Mathematics.pingPong(14, 1, 5)).toBe(4);
    expect(Mathematics.pingPong(15, 1, 5)).toBe(3);
    expect(Mathematics.pingPong(16, 1, 5)).toBe(2);
    expect(Mathematics.pingPong(17, 1, 5)).toBe(1);
    expect(Mathematics.pingPong(18, 1, 5)).toBe(2);
    expect(Mathematics.pingPong(19, 1, 5)).toBe(3);
    expect(Mathematics.pingPong(20, 1, 5)).toBe(4);
    expect(Mathematics.pingPong(21, 1, 5)).toBe(5);

    expect(Mathematics.pingPong(50000, 7, 7)).toBe(7);
    expect(Mathematics.pingPong(9, 7, 8)).toBe(7);
    expect(Mathematics.pingPong(10, 7, 8)).toBe(8);
    expect(Mathematics.pingPong(15, 7, 8)).toBe(7);
});

test('pow', () => {
    expect(Mathematics.pow(10, 0)).toBe(1);
    expect(Mathematics.pow(10, 1)).toBe(10);
    expect(Mathematics.pow(10, 2)).toBe(100);
    expect(Mathematics.pow(10, 3)).toBe(1000);
});

test('random', () => {

    for (let i = 0; i < 5; i++) {
        const value = Mathematics.random();
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThanOrEqual(1);
    }

    for (let i = 0; i < 5; i++) {
        const value = Mathematics.random(10);
        expect(value).toBeGreaterThanOrEqual(0);
        expect(value).toBeLessThanOrEqual(10);
    }

    for (let i = 0; i < 5; i++) {
        const value = Mathematics.random(100, 150);
        expect(value).toBeGreaterThanOrEqual(100);
        expect(value).toBeLessThanOrEqual(150);
    }
});

test('round', () => {
    expect(Mathematics.round(5.5)).toBe(6);
    expect(Mathematics.round(5.499999999)).toBe(5);
});

test('sign', () => {
    expect(Mathematics.sign(5)).toBe(1);
    expect(Mathematics.sign(-5)).toBe(-1);
});

test('sin', () => {
    expect(Mathematics.sin(0)).toBe(Math.sin(0));
    expect(Mathematics.sin(90)).toBe(Math.sin(90));
});

test('sinh', () => {
    expect(Mathematics.sinh(0.5)).toBe(Math.sinh(0.5));
});

test('sqrt', () => {
    expect(Mathematics.sqrt(100)).toBe(10);
});

test('tan', () => {
    expect(Mathematics.tan(0)).toBe(Math.tan(0));
    expect(Mathematics.tan(90)).toBe(Math.tan(90));
});

test('tanh', () => {
    expect(Mathematics.tanh(0.5)).toBe(Math.tanh(0.5));
});

test('trunc', () => {
    expect(Mathematics.trunc(5.5)).toBe(5);
    expect(Mathematics.trunc(5.499999999)).toBe(5);
});

test('wrap', () => {
    expect(Mathematics.wrap(5, 1, 10)).toBe(5);
    expect(Mathematics.wrap(15, 1, 10)).toBe(5);
    expect(Mathematics.wrap(25, 1, 10)).toBe(5);

    expect(Mathematics.wrap(-1, 2, 8)).toBe(6);
    expect(Mathematics.wrap(0, 2, 8)).toBe(7);
    expect(Mathematics.wrap(1, 2, 8)).toBe(8);
    expect(Mathematics.wrap(2, 2, 8)).toBe(2);
    expect(Mathematics.wrap(5, 2, 8)).toBe(5);
    expect(Mathematics.wrap(10, 2, 8)).toBe(3);
    expect(Mathematics.wrap(12, 2, 8)).toBe(5);
    expect(Mathematics.wrap(14, 2, 8)).toBe(7);
    expect(Mathematics.wrap(15, 2, 8)).toBe(8);
    expect(Mathematics.wrap(25, 2, 8)).toBe(4);

    expect(Mathematics.wrap(1, 1, 2)).toBe(1);
    expect(Mathematics.wrap(2, 1, 2)).toBe(2);
    expect(Mathematics.wrap(3, 1, 2)).toBe(1);
    expect(Mathematics.wrap(4, 1, 2)).toBe(2);
    expect(Mathematics.wrap(5, 1, 2)).toBe(1);

    expect(Mathematics.wrap(1, 1, 1)).toBe(1);
    expect(Mathematics.wrap(2, 1, 1)).toBe(1);
    expect(Mathematics.wrap(3, 1, 1)).toBe(1);
    expect(Mathematics.wrap(4, 1, 1)).toBe(1);
    expect(Mathematics.wrap(5, 1, 1)).toBe(1);

    expect(Mathematics.wrap(0, 1, 2)).toBe(2);
    expect(Mathematics.wrap(-1, 1, 2)).toBe(1);
    expect(Mathematics.wrap(-2, 1, 2)).toBe(2);
    expect(Mathematics.wrap(-3, 1, 2)).toBe(1);
    expect(Mathematics.wrap(-4, 1, 2)).toBe(2);

    expect(Mathematics.wrap(0, 1, 1)).toBe(1);
    expect(Mathematics.wrap(-1, 1, 1)).toBe(1);
    expect(Mathematics.wrap(-2, 1, 1)).toBe(1);
    expect(Mathematics.wrap(-3, 1, 1)).toBe(1);
    expect(Mathematics.wrap(-4, 1, 1)).toBe(1);


    expect(Mathematics.wrap(0, 0, 360)).toBe(0);
    expect(Mathematics.wrap(360, 0, 360)).toBe(360);
    expect(Mathematics.wrap(361, 0, 360)).toBe(0);
});


describe('coverage', () => {
    const native = Object.getOwnPropertyNames(Math);
    const engine = Object.getOwnPropertyNames(Mathematics);

    // Test we have covered all of the methods and properties
    test.each(native)('we have not declared our own version of [%s]', (property) => {
        expect(engine.includes(property)).toBeTruthy();
    });
});
