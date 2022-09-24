let isLoading: boolean;
isLoading = true;
//isLoading = 0

let num = 42;
//num='hello'

let str: string = "hello";
console.log(str);
// Array
const primes1: number[] = [1, 2, 3, 4, 5, 6, 7];
const primes2: Array<number> = [11, 12, 1, 3, 14];
primes2.push(19);
//primes2.push('21')
primes2.forEach((i) => console.log(i));
//Tuple
const john: [string, string, number] = ["John", "Smith", 123456789];
john[1] = "Jacson";
john.push(42);
john.push("male");
//Any
let z: any = 100500;
z = "helloo";
z = true;
//Function typing
function fullname(ferstname: string, lastname: string): string {
  return `${ferstname} ${lastname}`;
}

//Type
type Login = string;
let niceName: Login = "admin";
type ID = string | number;
