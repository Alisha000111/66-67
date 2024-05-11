let myVar: string | number;
myVar = "Alisha";
console.log(myVar)
myVar = 55;     
console.log(myVar)
let direction: "left" | "right" | "up" | "down";
function setColor(color: "yellow" | "pink" | "white") {
}
let username: string | null = "Alisha"; 
let ageEx: number | null = null; 
function greetUser(username: string | null) {
    if (username === null) {
        console.log("Hello, Alisha!");
    } else {
        console.log(`Hello, ${username}!`);
    }
}
greetUser("Alishar"); 
greetUser(null); 
type FirstType = {
    name: string;
    age: number;
  };
  type SecondType = {
    address: string;
    phone: string;
  };
  type CombinedType = FirstType & SecondType;
  const person: CombinedType = {
    name: "Alisha",
    age: 20,
    address: "000 Main St",
    phone: "103-406-0190",
  };
  type MyString = string;
let myName: MyString = "Alisha";
type MyStringOrNumber = string | number;
let myValue: MyStringOrNumber = 20;
type Employee = {
  name: string;
  age: number;
  email?: string;
};
const alice: Employee = {
  name: "Alisha",
  age: 20,
  email: "alisha@gmail.com",
};
const bob: Employee = {
  name: "Alisha",
  age: 20,
};
console.log(alice);
console.log(bob);
let fruits: string[] = ["kiwi", "mango", "apple"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit: ${fruits[i].toUpperCase()}`);
}
let arrayOne: number[] = [1, 2, 3, 4, 5];
let arrayTwo: string[] = ["A", "B", "C"];
let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];