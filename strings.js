// alert("Hello World");

// Strings " "

const firstName = "Laura";
const lastName = "Machado";

console.log("Meu nome é " + firstName + " " + lastName); // com " "
console.log(`Meu nome é ${firstName} ${lastName}`); // com ` `

console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLowerCase()}`);
// .toUpperCase deixa tudo maiúsculo e .toLowerCase deixa tudo minúsculo


// cortar em listas

const names = "Felipe,João,Júlia";
const name = "Laura";

console.log(names.split(",")); // com a vírgula
console.log(name.split("")); // sem a vírgula