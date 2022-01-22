export default class Time {

    /**
     * The previous time ticks
     *
     * @type {Array}
     */
    static ticks = [];

    /**
     * The difference between the latest two time ticks in seconds
     *
     * @type {number}
     */
    static get delta() {
        return (Time.latest - Time.previous) / 1000;
    }

    /**
     * Get the latest time tick
     *
     * @return {number}
     */
    static get latest() {
        if (Time.ticks.length === 0) {
            Time.ticks = [0, Time.milliseconds];
        }
        return Time.ticks[1];
    }

    /**
     * Get the current time in milliseconds
     *
     * @return {number}
     */
    static get milliseconds() {
        return performance.now();
    }

    /**
     * Get the previous time tick
     *
     * @return {number}
     */
    static get previous() {
        if (Time.ticks.length === 0) {
            Time.ticks = [0, Time.milliseconds];
        }
        return Time.ticks[0];
    }

    /**
     * Get the current time in seconds
     *
     * @return {number}
     */
    static get seconds() {
        return Time.milliseconds / 1000;
    }

    /**
     * Tick the time and calculate a delta time
     *
     * @param {number} time
     */
    static tick(time = Time.milliseconds) {

        if (Time.ticks.length === 0) {
            Time.ticks = [0, time];
            return;
        }

        if (time === 0) {
            Time.ticks = [0, Time.milliseconds];
            return;
        }

        Time.ticks.length > 1 && Time.ticks.shift();
        Time.ticks.push(time);
    }
}