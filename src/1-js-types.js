/* eslint-disable no-console */
// Javascritp Data Types

/********** Javascript Types ***********/

let a;                  // undefined
console.log(typeof (a))

let b = true;           // boolean
console.log(typeof (b))

let c = 1;              // number
console.log(typeof (c))

let d = "hello";        // string
console.log(typeof (d))

let e = 100n;           // big int (starting ES2020)
console.log(typeof (e))

let f = Symbol("Sym");  // symbol  (starting ES2015)
console.log(typeof (f))

let g = function () {   // function
  return null;
};
console.log(typeof (g))

let h = null;           // null ( special primitive )
console.log(typeof (h))

let i = {};             // Object Literal
console.log(typeof (i))

let j = [];             // array
console.log(typeof (j))

class Product {
  // class
  //...
}
let k = new Product();
console.log(typeof (a))

/********** Mengapa disebut tipe dinamis / diketik dengan lemah ? ***********/

// 1. Tidak ada Deklarasi. Ketik secara otomatis diatur berdasarkan nilai saat runtime

// 2. Menugaskan kembali

let num = 1
num = "1"
num = [1, 2, 3]
console.log(typeof (num))

// 3. Dengan tipe dinamis datang tanggung jawab besar
