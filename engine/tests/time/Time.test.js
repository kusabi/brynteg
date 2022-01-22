import {Time} from "../../src";

test('Get the current time', () => {
    expect(Time.seconds).toBeCloseTo(performance.now() / 1000, 1)
});

test('Previous without a tick  is the same as previous with just 1 tick', () => {
    Time.ticks = [];
    expect(Time.previous).toBe(0);

    Time.ticks = [];
    Time.tick();
    expect(Time.previous / 1000).toBeCloseTo(0);
});

test('Latest without a tick is the same as latest with just 1 tick', () => {
    Time.ticks = [];
    expect(Time.latest / 1000).toBeCloseTo(Time.seconds);

    Time.ticks = [];
    Time.tick();
    expect(Time.latest / 1000).toBeCloseTo(Time.seconds);
});

test('Tick modifies delta', () => {
    expect(Time.delta).toBeCloseTo(Time.seconds, 1);

    for (let i = 0; i < 50; i++) {
        Time.tick();
        expect(Time.delta).toBeCloseTo(0, 1);
    }

    for (let i = 0; i < 100; i++) {
        Time.tick(0);
        let delta = Time.delta;
        let seconds = Time.seconds;
        expect(delta).toBeCloseTo(seconds, 1);
    }
});
