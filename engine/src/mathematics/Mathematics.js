export default class Mathematics {
    /**
     * The mathematical constant e. This is Euler's number, the base of natural logarithms.
     *
     * @type {number}
     */
    static E = Math.E;

    /**
     * The natural logarithm of 10.
     *
     * @type {number}
     */
    static LN10 = Math.LN10;

    /**
     * The natural logarithm of 2.
     *
     * @type {number}
     */
    static LN2 = Math.LN2;

    /**
     * The base-10 logarithm of e.
     *
     * @typ {number}
     */
    static LOG10E = Math.LOG10E;

    /**
     * The base-2 logarithm of e.
     *
     * @typ {number}
     */
    static LOG2E = Math.LOG2E;

    /**
     * PI
     *
     * @type {number}
     */
    static PI = Math.PI;

    /**
     * The multiplier to transform degrees to radians
     *
     * @typ {number}
     */
    static DEG2RAD = Mathematics.PI / 180;

    /**
     * The multiplier to transform radians to degrees
     *
     * @typ {number}
     */
    static RAD2DEG = 180 / Mathematics.PI;

    /**
     * The square root of 0.5, or, equivalently, one divided by the square root of 2.
     *
     * @typ {number}
     */
    static SQRT1_2 = Math.SQRT1_2;

    /**
     * The square root of 2.
     *
     * @typ {number}
     */
    static SQRT2 = Math.SQRT2;

    /**
     * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
     * For example, the absolute value of -5 is the same as the absolute value of 5.
     *
     * @param {number} x A numeric expression for which the absolute value is needed.
     *
     * @returns {number}
     */
    static abs(x) {
        return Math.abs(x);
    }

    /**
     * Returns the arc cosine (or inverse cosine) of a number..
     *
     * @param {number} x A numeric expression for which the arc cosine is needed.
     *
     * @returns {number}
     */
    static acos(x) {
        return Math.acos(x)
    }

    /**
     * Returns the inverse hyperbolic cosine of a number.
     *
     * @param {number} x A numeric expression that contains an angle measured in radians.
     *
     * @returns {number}
     */
    static acosh(x) {
        return Math.acosh(x)
    }

    /**
     * Returns the arc sine of a number.
     *
     * @param {number} x A numeric expression for which the arc sine is needed.
     *
     * @returns {number}
     */
    static asin(x) {
        return Math.asin(x)
    }

    /**
     * Returns the inverse hyperbolic sine of a number.
     *
     * @param {number} x A numeric expression that contains an angle measured in radians.
     *
     * @returns {number}
     */
    static asinh(x) {
        return Math.asinh(x)
    }

    /**
     * Returns the arc tangent of a number.
     *
     * @param {number} x A numeric expression for which the arc tangent is needed.
     *
     * @returns {number}
     */
    static atan(x) {
        return Math.atan(x)
    }

    /**
     * Returns the angle (in radians) from the X axis to a point.
     *
     * @param {number} y A numeric expression representing the cartesian y-coordinate.
     * @param {number} x A numeric expression representing the cartesian x-coordinate.
     *
     * @returns {number}
     */
    static atan2(y, x) {
        return Math.atan2(y, x)
    }

    /**
     * Returns the inverse hyperbolic tangent of a number.
     *
     * @param {number} x A numeric expression that contains an angle measured in radians.
     *
     * @returns {number}
     */
    static atanh(x) {
        return Math.atanh(x)
    }

    /**
     * Returns an implementation-dependent approximation to the cube root of number.
     *
     * @param {number} x A numeric expression.
     *
     * @returns {number}
     */
    static cbrt(x) {
        return Math.cbrt(x);
    }

    /**
     * Returns the smallest integer greater than or equal to its numeric argument.
     *
     * @param {number} x A numeric expression.
     *
     * @returns {number};
     */
    static ceil(x) {
        return Math.ceil(x);
    }

    /**
     * Clamp a value between two other values
     *
     * @param {number} value
     * @param {number} min
     * @param {number} max
     *
     * @returns {number}
     */
    static clamp(value, min, max) {
        return value < min ? min : value > max ? max : value;
    }

    /**
     * Returns the number of leading zero bits in the 32-bit binary representation of a number.
     *
     * @param {number} x A numeric expression.
     *
     * @returns {number}
     */
    static clz32(x) {
        return Math.clz32(x);
    }

    /**
     * Returns the cosine of a number.
     *
     * @param {number} x A numeric expression that contains an angle measured in radians.
     *
     * @returns {number}
     */
    static cos(x) {
        return Math.cos(x);
    }

    /**
     * Returns the hyperbolic cosine of a number.
     *
     * @param {number} x A numeric expression that contains an angle measured in radians.
     *
     * @returns {number}
     */
    static cosh(x) {
        return Math.cosh(x)
    }

    /**
     * Returns e (the base of natural logarithms) raised to a power.
     *
     * @param {number} x A numeric expression representing the power of e.
     *
     * @returns {number}
     */
    static exp(x) {
        return Math.exp(x);
    }

    /**
     * Returns the result of (e^x - 1), which is an implementation-dependent approximation to
     * subtracting 1 from the exponential function of x (e raised to the power of x, where e
     * is the base of the natural logarithms).
     *
     * @param {number} x A numeric expression.
     *
     * @returns {number}
     */
    static expm1(x) {
        return Math.expm1(x);
    }

    /**
     * Returns the greatest integer less than or equal to its numeric argument.
     *
     * @param {number} x A numeric expression.
     *
     * @return {number}
     */
    static floor(x) {
        return Math.floor(x);
    }

    /**
     * Returns the nearest single precision float representation of a number.
     *
     * @param {number} x A numeric expression.
     *
     * @returns {number}
     */
    static fround(x) {
        return Math.fround(x);
    }

    /**
     * Returns the square root of the sum of squares of its arguments.
     * @param values Values to compute the square root for.
     *     If no arguments are passed, the result is +0.
     *     If there is only one argument, the result is the absolute value.
     *     If any argument is +Infinity or -Infinity, the result is +Infinity.
     *     If any argument is NaN, the result is NaN.
     *     If all arguments are either +0 or −0, the result is +0.
     *
     * @return {number}
     */
    static hypot(...values) {
        return Math.hypot(...values);
    }

    /**
     * Returns the result of 32-bit multiplication of two numbers.
     *
     * @param {number} x First number
     * @param {number} y Second number
     *
     * @returns {number}
     */
    static imul(x, y) {
        return Math.imul(x, y);
    }

    /**
     * Interoperate between two values by a percentage
     *
     * @param {number} from
     * @param {number} to
     * @param {number} amount
     *
     * @returns {number}
     */
    static lerp(from, to, amount) {
        return from + ((to - from) * amount);
    }

    /**
     * Returns the natural logarithm (base e) of a number.
     *
     * @param {number} x A numeric expression.
     *
     * @returns {number}
     */
    static log(x) {
        return Math.log(x);
    }

    /**
     * Returns the base 10 logarithm of a number.
     *
     * @param {number} x A numeric expression.
     *
     * @returns {number}
     */
    static log10(x) {
        return Math.log10(x);
    }

    /**
     * Returns the natural logarithm of 1 + x.
     *
     * @param {number} x A numeric expression.
     *
     * @returns {number}
     */
    static log1p(x) {
        return Math.log1p(x);
    }

    /**
     * Returns the base 2 logarithm of a number.
     *
     * @param {number} x A numeric expression.
     *
     * @returns {number}
     */
    static log2(x) {
        return Math.log2(x);
    }

    /**
     * Returns the larger of a set of supplied numeric expressions.
     *
     * @param values Numeric expressions to be evaluated.
     *
     * @returns {number}
     */
    static max(...values) {
        return Math.max(...values);
    }

    /**
     * Returns the smaller of a set of supplied numeric expressions.
     *
     * @param values Numeric expressions to be evaluated.
     *
     * @returns {number}
     */
    static min(...values) {
        return Math.min(...values);
    }

    /**
     * Bounces the value between the min and max value
     *
     * @param {number} value
     * @param {number} min
     * @param {number} max
     *
     * @return {number}
     */
    static pingPong(value, min, max) {
        if (min === max) {
            return min;
        }

        if (value >= min && value <= max) {
            return value;
        }

        const range = max - min;

        if (value > max) {
            const overBy = value - max;
            const overTimes = Mathematics.floor(overBy / range);
            const augmentBy = overBy % range;
            return overTimes % 2 === 0 ? max - augmentBy : min + augmentBy;
        }

        if (value < min) {
            const underBy = Mathematics.abs(value - min);
            const underTimes = Mathematics.floor(underBy / range);
            const augmentBy = underBy % range;
            return underTimes % 2 === 0 ? min + augmentBy : max - augmentBy;
        }
    }

    /**
     * Returns the value of a base expression taken to a specified power.
     *
     * @param {number} value The base value of the expression.
     * @param {number} exponent The exponent value of the expression.
     *
     * @returns {number}
     */
    static pow(value, exponent) {
        return Math.pow(value, exponent)
    }

    /**
     * Random number between two numbers
     *
     * @param {number|null} min
     * @param {number|null} max
     *
     * @returns {number}
     */
    static random(min = null, max = null) {

        if (min === null && max === null) {
            min = 0;
            max = 1;
        } else if (max === null) {
            max = min;
            min = 0;
        }

        return Math.random() * (max - min) + min;
    }

    /**
     * Returns a supplied numeric expression rounded to the nearest integer.
     *
     * @param {number} x The value to be rounded to the nearest integer.
     *
     * @returns {number}
     */
    static round(x) {
        return Math.round(x);
    }

    /**
     * Returns the sign of the x, indicating whether x is positive, negative or zero.
     *
     * @param x The numeric expression to test
     *
     * @returns {number}
     */
    static sign(x) {
        return Math.sign(x);
    }

    /**
     * Returns the sine of a number.
     *
     * @param {number} x A numeric expression that contains an angle measured in radians.
     *
     * @returns {number}
     */
    static sin(x) {
        return Math.sin(x);
    }

    /**
     * Returns the hyperbolic sine of a number.
     *
     * @param {number} x A numeric expression that contains an angle measured in radians.
     *
     * @returns {number}
     */
    static sinh(x) {
        return Math.sinh(x)
    }

    /**
     * Returns the square root of a number.
     *
     * @param {number} x A numeric expression.
     *
     * @returns {number}
     */
    static sqrt(x) {
        return Math.sqrt(x);
    }

    /**
     * Returns the tangent of a number.
     *
     * @param {number} x A numeric expression that contains an angle measured in radians.
     *
     * @returns {number}
     */
    static tan(x) {
        return Math.tan(x);
    }

    /**
     * Returns the hyperbolic tangent of a number.
     *
     * @param {number} x A numeric expression that contains an angle measured in radians.
     *
     * @returns {number}
     */
    static tanh(x) {
        return Math.tanh(x)
    }

    /**
     * Returns the integral part of the a numeric expression, x, removing any fractional digits.
     * If x is already an integer, the result is x.
     *
     * @param {number} x A numeric expression.
     *
     * @returns {number}
     */
    static trunc(x) {
        return Math.trunc(x);
    }

    /**
     * Wrap a value between two other values
     *
     * @param {number} value
     * @param {number} min
     * @param {number} max
     *
     * @returns {number}
     */
    static wrap(value, min, max) {
        let augment = (value - min) % (max + 1 - min);
        return augment < 0 ? max + 1 + augment : min + augment;
    }
}