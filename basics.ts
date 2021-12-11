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

let person: {
  name: string;
  age: number;
};

person = {
  name: "Nikhil",
  age: 26,
};

let people: {
  name: string;
  age: number;
}[]; //adding the brackets creates an array of people object.

//Type inference

let course = 'TypeScript' //Typescript tries infer many types if we dont specify the type

// course = 1233 //error
