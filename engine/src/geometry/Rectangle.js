import Vector from "./Vector";

export default class Rectangle {

    /**
     * The position vector
     *
     * @type {Vector}
     */
    position;
    /**
     * The size vector
     *
     * @type {Vector}
     */
    size;

    /**
     * The constructor
     *
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     */
    constructor(x, y, width, height) {
        this.position = new Vector(x, y);
        this.size = new Vector(width, height);
    }

    /**
     * Get the area of the rectangle
     *
     * @return {number}
     */
    get area() {
        return this.width * this.height;
    }

    /**
     * Get the bottom-left vector
     *
     * @return {Vector}
     */
    get bl() {
        return new Vector(this.left, this.bottom);
    }

    /**
     * Get the bottom of the rectangle
     *
     * @return {number}
     */
    get bottom() {
        return this.y;
    }

    /**
     * Set the y position so that bottom is equal to..
     *
     * @param {number} bottom
     */
    set bottom(bottom) {
        this.y = bottom;
    }

    /**
     * Get the bottom-right vector
     *
     * @return {Vector}
     */
    get br() {
        return new Vector(this.right, this.bottom);
    }

    /**
     * Get the vector at the center of the rectangle
     *
     * @return {Vector}
     */
    get center() {
        return new Vector(this.x + (this.width / 2), this.y + (this.height / 2));
    }

    /**
     * Set the center vector
     *
     * @param {Vector} vector
     */
    set center(vector) {
        this.x = vector.x - (this.width / 2)
        this.y = vector.y - (this.width / 2)
    }

    /**
     * Get an exact copy of this rectangle
     *
     * @return {Rectangle}
     */
    get copy() {
        return new Rectangle(this.x, this.y, this.width, this.height);
    }

    /**
     * Get the height
     *
     * @returns {number}
     */
    get height() {
        return this.size.y;
    }

    /**
     * Set the height
     *
     * @param {number} height
     */
    set height(height) {
        this.size.y = height;
    }

    /**
     * Get the left of the rectangle
     *
     * @return {number}
     */
    get left() {
        return this.x;
    }

    /**
     * Set the x position so that left is equal to..
     *
     * @param {number} left
     */
    set left(left) {
        this.x = left;
    }

    /**
     * Get the right of the rectangle
     *
     * @return {number}
     */
    get right() {
        return this.x + this.width;
    }

    /**
     * Set the x position so that right is equal to..
     *
     * @param {number} right
     */
    set right(right) {
        this.x = right - this.width;
    }

    /**
     * Get the top-left vector
     *
     * @return {Vector}
     */
    get tl() {
        return new Vector(this.left, this.top);
    }

    /**
     * Get the top of the rectangle
     *
     * @return {number}
     */
    get top() {
        return this.y + this.height;
    }

    /**
     * Set the y position so that top is equal to..
     *
     * @param {number} top
     */
    set top(top) {
        this.y = top - this.height;
    }

    /**
     * Get the top-right vector
     *
     * @return {Vector}
     */
    get tr() {
        return new Vector(this.right, this.top);
    }

    /**
     * Get the width
     *
     * @returns {number}
     */
    get width() {
        return this.size.x;
    }

    /**
     * Set the width
     *
     * @param {number} width
     */
    set width(width) {
        this.size.x = width;
    }

    /**
     * Get the x position
     *
     * @returns {number}
     */
    get x() {
        return this.position.x;
    }

    /**
     * Set the x position
     *
     * @param {number} x
     */
    set x(x) {
        this.position.x = x;
    }

    /**
     * Get the y position
     *
     * @returns {number}
     */
    get y() {
        return this.position.y;
    }

    /**
     * Set the y position
     *
     * @param {number} y
     */
    set y(y) {
        this.position.y = y;
    }

    /**
     * Does this rectangle contain a Rectangle?
     *
     * @param {Rectangle} rectangle
     *
     * @return {boolean}
     */
    containsRectangle(rectangle) {
        return this.containsVector(rectangle.tl) && this.containsVector(rectangle.br);
    }

    /**
     * Does this rectangle contain a vector?
     *
     * @param {Vector} vector
     *
     * @return {boolean}
     */
    containsVector(vector) {
        return vector.x >= this.left && vector.x <= this.right && vector.y <= this.top && vector.y >= this.bottom
    }

    /**
     * Get the overlapping rectangle, made between two rectangles
     *
     * @param {Rectangle} rectangle
     *
     * @return {Rectangle|null}
     */
    overlappingRectangle(rectangle) {
        if (this.overlapsRectangle(rectangle) === false) {
            return null;
        }
        const left = Math.max(this.left, rectangle.left);
        const top = Math.min(this.top, rectangle.top);
        const right = Math.min(this.right, rectangle.right);
        const bottom = Math.max(this.bottom, rectangle.bottom);
        return new Rectangle(left, bottom, right - left, top - bottom);
    }

    /**
     * Does this rectangle overlap another rectangle?
     *
     * @param {Rectangle} rectangle
     */
    overlapsRectangle(rectangle) {
        return this.left < rectangle.right && this.right >= rectangle.left && this.top > rectangle.bottom && this.bottom <= rectangle.top;
    }

    /**
     * Add a number, two numbers or another vector to the position
     *
     * @param {number|Vector} a
     * @param {number|null} b
     *
     * @return {Vector}
     */
    translate(a, b = null) {
        const updated = this.position.translate(a, b);
        this.x = updated.x;
        this.y = updated.y;
    }
}