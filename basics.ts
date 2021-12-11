//Primitives

let age: number;
age = 12;

let userName: string;
userName = "Nikhil";

let isSomething: boolean;
isSomething = true;

//More Complex types

let hobbies: string[];

hobbies = ["fishing", "frying"];

type Person = {
  //creting a type alias
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Nikhil",
  age: 26,
};

let people: Person[]; //adding the brackets creates an array of people object.

//Type inference

let course: string | number = "TypeScript"; //using union types

course = 1233; //no error

//Function & Types

function add(a: number, b: number) {
  return a + b; //inference, we dont need to specify return type if there is no need to do it.
}

function printSomething(value: any) {
  console.log(value); // void
}

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
