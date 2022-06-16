//Problem -> console 10 times 10
//1
// for(var i = 0; i < 10;i++){
//     let с = i;
//     setTimeout(function () {
//         console.log(с);
//     },1000);
// }

//2
// for(var i = 0; i < 10;i++){
//     setTimeout(function () {
//         console.log(i--);
//     },1000);
// }

//3
// for(var i = 0; i < 10;i++){
//     setTimeout(function () {
//         console.log(i++ -10);
//     },1000);
// }

//4
// for(var i = 10; i > 0;i--){
//     setTimeout(function () { 
//         console.log(i++);
//     },1000);
// }


//Solution 1 -> use let
// for(let i = 0; i < 10; i++){
//     setTimeout(function () {
//         console.log(i);
//     },1000);
// }

//Solution 1 -> use let
// for(let i = 0; i < 10; i++){
//     setTimeout(function () {
//         console.log(i);
//     },1000);
// }

//Solution 2 -> use wrapper function
// for (var i = 0; i < 10; i++) {
//     function task(j) {
//         setTimeout(function () {
//             console.log(j);
//         }, 1000);
//     }
//     task(i);
// }

//Solution 3 -> use anonimous closure
// for (var i = 0; i < 10; i++) {
//     (function(j) {
//         setTimeout(function () {
//             console.log(j);
//         }, 1000);
//     })(i)  
// }

//Solution 4 -> use setTimeout args
// for(var i = 0; i < 10; i++){
//     setTimeout(function (j) {
//         console.log(j);
//     },1000, i);
// }

//Solution 5 -> for fun
for(var i = 0; i < 10; i++){
    setTimeout(function () {
        console.log(i++ % 10);
    },1000);
}