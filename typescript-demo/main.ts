let message;
message = 'abcdefg';
//Type Assertions
let assertion1 = (<string>message).endsWith('g');
let assertion2 = (message as string).endsWith('g');

//Interfaces
interface Coordinates { //Pascal convention for interfaces
    x: number, 
    y: number, 
    z: number
}

let drawShape = ( Coordinates ) => {
    //...
}

drawShape({
    x: 1,
    y: 2,
    z: 3
})


//Classes
class Point {
    x: number;
    y: number; 
    
    draw() {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    }
}

//Object or and instance of a class
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();

//Access Modifiers [public (default), private]
class Point2 {

    //Can also add these like this but better to do directly in the constructor
    // private x: number;
    // public y: number; 

    //convention is to begin with underscore so all properties can be camalCase
    constructor(private _x?: number, private _y?: number) { //? means it is optional and all following should also be ?
        //this is also automatically done if access modifiers are added in the constructor
        // this.x = x; 
        // this.y = y;
    }
    
    draw2() {
        console.log('X: ' + this._x + ' Y: ' + this._y);
    }

    //
    //Getters
    get x() {
        return this._x;
    }
    //Setters 
    set x(value) { //if this were omitted it would be like a readonly in C#
        if (value < 0) {
            throw new Error('Value must be greater than 0')
        }
        this._x = value;
    }
}

let point2 = new Point2(1, 2);
//point2.x = 3; //cannot reassign this because it is 'private' and can only be initialized inside the constructor
//Using getters and setters
let x = point2.x
point2.x = 10;
point2.draw2();