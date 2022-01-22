export default class Time {

    /**
     * The last time from the update loop
     *
     * @type {number}
     */
    static last;

    /**
     * The delta time between the last two ticks
     *
     * @type {number}
     */
    static delta;

    /**
     * Tick the time and calculate a delta time
     *
     * @param {number} time
     */
    static tick(time) {
        if (Time.last == null) {
            Time.last = time;
        }
        Time.delta = time - Time.last;
        Time.last = time;
    }


}