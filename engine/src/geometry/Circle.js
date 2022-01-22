import Point from "./Vector";

export default class Circle {

    /**
     * The radius of the circle
     *
     * @type {number}
     */
    radius;

    /**
     * The x position of the circle
     *
     * @type {number}
     */
    x;

    /**
     * The y position of the circle
     *
     * @type {number}
     */
    y;

    /**
     * The constructor
     *
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     */
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    /**
     * Get the area of the circle
     *
     * @return {number}
     */
    get area() {
        return Math.PI * (this.radius * this.radius);
    }

    /**
     * Set the radius so the the area equals this value
     *
     * @param {number} area
     */
    set area(area) {
        this.radius = Math.sqrt(area / Math.PI);
    }

    /**
     * Get the bottom of the circle
     *
     * @return {number}
     */
    get bottom() {
        return this.y - this.radius;
    }

    /**
     * Set the y position so that bottom is equal to..
     *
     * @param {number} bottom
     */
    set bottom(bottom) {
        this.y = bottom + this.radius;
    }

    /**
     * Get the circumference of the circle
     *
     * @return {number}
     */
    get circumference() {
        return 2 * Math.PI * this.radius;
    }

    /**
     * Set the radius so the the circumference equals this value
     *
     * @param {number} circumference
     */
    set circumference(circumference) {
        this.radius = circumference / (Math.PI * 2)
    }

    /**
     * Get the diameter of the circle
     *
     * @return {number}
     */
    get diameter() {
        return 2 * this.radius;
    }

    /**
     * Set the radius so the the diameter equals this value
     *
     * @param {number} diameter
     */
    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    /**
     * Get the height of the circle
     *
     * @return {number}
     */
    get height() {
        return this.radius * 2;
    }

    /**
     * Set the height of the circle
     *
     * @param {number} height
     */
    set height(height) {
        this.radius = height / 2;
    }

    /**
     * Get the left of the circle
     *
     * @return {number}
     */
    get left() {
        return this.x - this.radius;
    }

    /**
     * Set the x position so that left is equal to..
     *
     * @param {number} left
     */
    set left(left) {
        this.x = left + this.radius;
    }

    /**
     * Get the position as a Vector
     *
     * @return {Point}
     */
    get position() {
        return new Point(this.x, this.y);
    }

    /**
     * Get the right of the circle
     *
     * @return {number}
     */
    get right() {
        return this.x + this.radius;
    }

    /**
     * Set the x position so that right is equal to..
     *
     * @param {number} right
     */
    set right(right) {
        this.x = right - this.radius;
    }

    /**
     * Get the top of the circle
     *
     * @return {number}
     */
    get top() {
        return this.y + this.radius;
    }

    /**
     * Set the y position so that top is equal to..
     *
     * @param {number} top
     */
    set top(top) {
        this.y = top - this.radius;
    }

    /**
     * Get the width of the rectangle
     *
     * @return {number}
     */
    get width() {
        return this.radius * 2;
    }

    /**
     * Set the width of the rectangle
     *
     * @param {number} width
     */
    set width(width) {
        this.radius = width / 2;
    }

    /**
     * Does this circle contain a vector?
     *
     * @param {Point} vector
     */
    containsVector(vector) {
        return this.position.distanceTo(vector) <= this.radius;
    }

    /**
     * Does this circle overlap another circle?
     *
     * @param {Circle} circle
     *
     * @return {boolean}
     */
    overlapsCircle(circle) {
        return this.position.distanceTo(circle.position) <= (this.radius + circle.radius);
    }
}