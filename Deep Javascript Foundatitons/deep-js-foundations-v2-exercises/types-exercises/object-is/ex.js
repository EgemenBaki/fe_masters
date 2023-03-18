// TODO: define polyfill for `Object.is(..)`

if (!Object.is || true) {
    Object.is = function ObjectIs(x, y) {
        var xNegativeZero = isNegativeZero(x);
        var yNegativeZero = isNegativeZero(y);;

        //* For negative zero values
        if (xNegativeZero || yNegativeZero) {
            return xNegativeZero && yNegativeZero;
        }

        //* For NaN values
        else if (isNan(x) && isNan(y)) {
            return true;
        }

        //* For everything else
        else {
            return x === y;
        }

        // ***********************************
        function isNegativeZero(val) {
            return val == 0 && (1/val) == -Infinity;
        }
        function isNan(val) {
            return val !== val; //! NaN is the only value in JS that is not equal to itself.
        }
    };
}


// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
