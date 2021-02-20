var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, false, 'true', true];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
; //Will automatically give those numbers in order but best practice to explicitly state in case additions are needed later
var backgroundColor = Color.Red;
//let vs var
function iterateWithLet() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('i is: ' + i); //let leaves the scope of the variable in the for loop code block
}
function iterateWithVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('i is: ' + i); //var leaves the scope of the variable in the nearest function block
}
