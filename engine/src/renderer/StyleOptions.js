export default class StyleOptions {
    /**
     * The supplied options dictionary
     *
     * @type {{}}
     */
    options = {};

    constructor(options = {}) {
        this.options = options;
    }

    /**
     * Get the fill color
     *
     * @type {string}
     */
    get fillColor() {
        return this.options?.fillColor ?? '#666666';
    }

    /**
     * Get the font family
     *
     * @type {string}
     */
    get fontFamily() {
        return this.options?.fontFamily ?? 'Arial';
    }

    /**
     * Get the font size
     *
     * @type {string}
     */
    get fontSize() {
        return this.options?.fontSize ?? '1rem';
    }

    /**
     * Should we fill the stroke?
     *
     * @type {boolean}
     */
    get shouldFill() {
        return (this.options?.fill ?? true) === true;
    }

    /**
     * Get the stroke color
     *
     * @type {string}
     */
    get strokeColor() {
        return this.options?.strokeColor ?? '#000000';
    }

    /**
     * Get the stroke width
     *
     * @type {number}
     */
    get strokeWidth() {
        return parseInt(this.options?.strokeWidth ?? 0);
    }

    /**
     * Get the text align attribute
     *
     * @type {string}
     */
    get textAlign() {
        return this.options?.textAlign ?? 'left';
    }
}