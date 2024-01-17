var text = "Hola Mundo";

console.log(text);

function fullName() {
    return this.firstName + " " + this.lastName;
}

const person1 = {
    firstName:"John",
    lastName: "Doe"
}

const person2 = {
    firstName:"Mary",
    lastName: "Doe"
}

// This will return "John Doe":
console.log(fullName.call(person1));
console.log(fullName.call(person2));


