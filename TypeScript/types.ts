//примитивные типы
const myName: string = "ann";
const message: string = "message";

const isFetching: boolean = true;

const int: number = 12;
const float: number = 2.4;
const num: number = 3e10;

const numberArray1: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ["hello", "typescript"];

//тип Tuple
const contact: [string, number] = ["Vasya", 869426985];

//тип Any
let variable: any = "43";
variable = 42;
variable = true;
variable = [];

//=== пустой тип, ничего не возвращает
function sayMyName(name: string): void {
  console.log(name)
}
sayMyName("Hezenberg");

//Never
function throwError(message: string): never {
  throw new Error(message);
}

function infinity(): never {
  while (true) {

  }
}
//Type
type Login = string;

const login: Login = "admin";
// const login2: Login = 32; //mistake

type ID = string | number;
const id1: ID = "12345";
const id2: ID = 1234;
// const id3: ID = true; //mistake
type someType = string | null | undefined;
