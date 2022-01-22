import Renderer from "./Renderer";
import StyleOptions from "./StyleOptions";
import {Rectangle} from "../geometry";


class CanvasRenderer extends Renderer {

    constructor(element) {
        super();
        this.element = element;
        this.context = element.getContext('2d');
    }

    get window() {
        return new Rectangle(0, 0, this.element.width, this.element.height);
    }

    clearScreen() {
        this.context.clearRect(this.window.x, this.window.y, this.window.width, this.window.height);
    }

    drawCircle(circle, options = {}) {

        options = new StyleOptions(options);

        this.context.beginPath();
        this.context.arc(circle.x, this.window.height - circle.y, circle.radius, 0, 2 * Math.PI);

        if (options.shouldFill) {
            this.context.fillStyle = options.fillColor;
            this.context.fill();
        }

        this.context.lineWidth = options.strokeWidth;
        this.context.strokeStyle = options.strokeColor;
        this.context.stroke();
    }

    drawRectangle(rectangle, options = {}) {

        options = new StyleOptions(options);

        this.context.beginPath();
        this.context.rect(rectangle.x, this.window.height - rectangle.y, rectangle.width, -rectangle.height);

        if (options.shouldFill) {
            this.context.fillStyle = options.fillColor;
            this.context.fill();
        }

        this.context.lineWidth = options.strokeWidth;
        this.context.strokeStyle = options.strokeColor;
        this.context.stroke();
    }

    drawText(text, position, options = {}) {

        options = new StyleOptions(options);

        this.context.font = `${options.fontSize} ${options.fontFamily}`;
        this.context.fillStyle = options.fillColor;
        this.context.textAlign = options.textAlign;
        this.context.fillText(text, position.x, this.window.height - position.y);
    }
}


export default CanvasRenderer;