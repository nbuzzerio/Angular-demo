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