var message;
message = 'abcdefg';
//Type Assertions
var assertion1 = message.endsWith('g');
var assertion2 = message.endsWith('g');
var drawShape = function (Coordinates) {
    //...
};
drawShape({
    x: 1,
    y: 2,
    z: 3
});
//Classes
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    return Point;
}());
//Object or and instance of a class
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
//Access Modifiers [public (default), private]
var Point2 = /** @class */ (function () {
    //Can also add these like this but better to do directly in the constructor
    // private x: number;
    // public y: number; 
    //convention is to begin with underscore so all properties can be camalCase
    function Point2(_x, _y) {
        this._x = _x;
        this._y = _y;
        //this is also automatically done if access modifiers are added in the constructor
        // this.x = x; 
        // this.y = y;
    }
    Point2.prototype.draw2 = function () {
        console.log('X: ' + this._x + ' Y: ' + this._y);
    };
    Object.defineProperty(Point2.prototype, "x", {
        //
        //Getters
        get: function () {
            return this._x;
        },
        //Setters 
        set: function (value) {
            if (value < 0) {
                throw new Error('Value must be greater than 0');
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point2;
}());
var point2 = new Point2(1, 2);
//point2.x = 3; //cannot reassign this because it is 'private' and can only be initialized inside the constructor
//Using getters and setters
var x = point2.x;
point2.x = 10;
point2.draw2();
