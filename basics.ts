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
