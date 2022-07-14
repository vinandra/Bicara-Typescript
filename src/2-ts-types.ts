/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */


// type inference(Implicit)
let ti = 'hello';
// ti = 123

// type annotation(Explicit)
let ta: string
ta = 'hello ts';
// ta = [1, 2, 3,]

/********** Javascript Types ***********/

let a;                  // undefined

let b: boolean = true;           // boolean

let c: number = 1;              // number

let d: string = "hello";        // string

let e: bigint = 100n;           // big int (starting ES2020)

let f: symbol = Symbol("Sym");  // symbol  (starting ES2015)

let g: () => void;
g = function () {   // function
    return null;
};

let h: null = null;           // null ( special primitive )

let i: Record<string, unknown> = {};             // Object Literal

let j: [] = [];             // array

class Product {
    // class
    //...
}
let k = new Product();

// let z: any;
let z
z = 1
z = "andra"
z = [1, 2, 3]

// with dynemict type comes grade responsibility
function sum(a: number, b: number) {
    // to do validation
    return a + b
}

let arg1 = 4
let arg2 = 3
let result = sum(arg1, arg2);
console.log(result)

//union
let multi: string | number; //string atau number
multi = 12
multi = "apa kabar"
// multi = true

// type alianse
type castometypes = string | number
let mytipe: castometypes
mytipe = "apa kau"
mytipe = 7
