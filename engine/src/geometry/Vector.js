import {Mathematics} from "../mathematics";

export default class Vector {

    /**
     * The vectors x value
     *
     * @type {number}
     */
    x = 0;

    /**
     * The vectors y value
     *
     * @type {number}
     */
    y = 0;

    /**
     * The constructor of the vector
     *
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Create a Vector that points down
     *
     * @return {Vector}
     */
    static get down() {
        return new Vector(0, -1);
    }

    /**
     * Create a Vector that points left
     *
     * @return {Vector}
     */
    static get left() {
        return new Vector(-1, 0);
    }

    /**
     * Create a Vector of 1, 1
     *
     * @return {Vector}
     */
    static get one() {
        return new Vector(1, 1);
    }

    /**
     * Create a Vector that has random values
     *
     * @return {Vector}
     */
    static get random() {
        return new Vector(Mathematics.random(-1, 1), Mathematics.random(-1, 1)).normalized;
    }

    /**
     * Create a Vector that points right
     *
     * @return {Vector}
     */
    static get right() {
        return new Vector(1, 0);
    }

    /**
     * Create a Vector that points up
     *
     * @return {Vector}
     */
    static get up() {
        return new Vector(0, 1);
    }

    /**
     * Create a Vector of 0, 0
     *
     * @return {Vector}
     */
    static get zero() {
        return new Vector(0, 0);
    }

    /**
     * Get the angle represented by this vector in degrees
     *
     * @return {number}
     */
    get angle() {
        return Vector.angle(Vector.up, this);
    }

    /**
     * Create an exact copy of this vector
     *
     * @return {Vector}
     */
    get copy() {
        return new Vector(this.x, this.y);
    }

    /**
     * Calculate the length of the vector
     *
     * @return {number}
     */
    get length() {
        return Mathematics.sqrt(Mathematics.pow(this.x, 2) + Mathematics.pow(this.y, 2));
    }

    /**
     * Getter for the unit length vector
     *
     * @return {Vector}
     */
    get normalized() {
        const length = this.length;
        return new Vector(this.x / length, this.y / length);
    }

    /**
     * Calculate the angle in degrees between two vectors
     *
     * @param {Vector} a
     * @param {Vector} b
     *
     * @return {number}
     */
    static angle(a, b) {
        if (a.length === 0 || b.length === 0) {
            return 0;
        }
        const radians = Mathematics.atan2(a.y, a.x) - Mathematics.atan2(b.y, b.x);
        return Mathematics.wrap(radians * Mathematics.RAD2DEG, 0, 359);
    }

    /**
     * Create a vector from degrees
     *
     * @param {number} degrees
     * @param {number} length
     *
     * @return {Vector}
     */
    static createFromAngle(degrees, length = 1) {
        const radians = degrees * Mathematics.DEG2RAD;

        let x = parseFloat(Mathematics.sin(radians).toFixed(10));
        let y = parseFloat(Mathematics.cos(radians).toFixed(10));

        return new Vector(x === 0 ? 0 : x, y === 0 ? 0 : y).scale(length);
    }

    /**
     * Calculate the dot product between two vectors
     *
     * @param {Vector} a
     * @param {Vector} b
     *
     * @return {number}
     */
    static dot(a, b) {
        return (a.x * b.x) + (a.y * b.y);
    }

    /**
     * Get the angle to another vector
     *
     * @param {Vector} vector
     *
     * @return {number}
     */
    angleTo(vector) {
        return this.directionTo(vector).angle;
    }

    /**
     * Generate a vector that points in the direction to another vector
     *
     * @param {Vector} vector
     *
     * @return {Vector}
     */
    directionTo(vector) {
        return new Vector(vector.x - this.x, vector.y - this.y);
    }

    /**
     * Calculate the distance to another vector
     *
     * @param {Vector} vector
     */
    distanceTo(vector) {
        return Mathematics.abs(
            Mathematics.sqrt(Mathematics.pow(vector.x - this.x, 2) + (Mathematics.pow(vector.y - this.y, 2)))
        )
    }

    /**
     * Is this vector equal to another vector?
     *
     * @param {Vector} vector
     *
     * @return {boolean}
     */
    equals(vector) {
        return this.x === vector.x && this.y === vector.y;
    }

    /**
     * Normalise this vector to it's unit vector
     *
     * @return {Vector}
     */
    normalize() {
        const normal = this.normalized;
        this.x = normal.x;
        this.y = normal.y;
        return this;
    }

    /**
     * Multiple by a number, two numbers or another vector
     *
     * @param {number|Vector} a
     * @param {number|null} b
     *
     * @return {Vector}
     */
    scale(a, b = null) {
        b = b === null ? (a instanceof Vector ? a.y : a) : b;
        a = a instanceof Vector ? a.x : a;

        this.x *= a;
        this.y *= b;

        return this;
    }

    /**
     * Subtract a number, two numbers or another vector
     *
     * @param {number|Vector} a
     * @param {number|null} b
     *
     * @return {Vector}
     */
    subtract(a, b = null) {
        b = b === null ? (a instanceof Vector ? a.y : a) : b;
        a = a instanceof Vector ? a.x : a;

        this.x -= a;
        this.y -= b;

        return this;
    }

    /**
     * Add a number, two numbers or another vector
     *
     * @param {number|Vector} a
     * @param {number|null} b
     *
     * @return {Vector}
     */
    translate(a, b = null) {
        b = b === null ? (a instanceof Vector ? a.y : a) : b;
        a = a instanceof Vector ? a.x : a;

        this.x += a;
        this.y += b;

        return this;
    }
}