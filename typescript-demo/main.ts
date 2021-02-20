let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, false, 'true', true];

enum Color {Red = 0, Green = 1, Blue = 2}; //Will automatically give those numbers in order but best practice to explicitly state in case additions are needed later
let backgroundColor = Color.Red;




//let vs var
function iterateWithLet() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log('i is: ' + i) //let leaves the scope of the variable in the for loop code block
}

function iterateWithVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log('i is: ' + i) //var leaves the scope of the variable in the nearest function block
}