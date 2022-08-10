alert("Hello World");

// Variáveis

// var (não é mais usada)
// const (variável constante)
// let (variável que pode ser alterada)


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


// Operações matemáticas

const a = 20;
const b = 5;

console.log(a + b);

console.log(a + 10); // como é número, não se coloca dentro de " "
console.log(a - 10);
console.log(a / 10);
console.log(a * 10);


// Booleanos
false
true

console.log(2 == 3); // false
console.log(2 == 2); // true


// Null e Undefined

const x = null; // nulo
const y = undefined; // não definido


// Listas (array)

const list = ["Felipe", "João", "Júlia", 10, false];

// Toda lista é baseada em zero, ou seja, o primeiro elemento da lista (neste caso é "Felipe") será [0]
// O segundo elemento ("João") será [1]

list.push("Pedro"); // .push adiciona, ao final da lista, um elemento
list.unshift("Fernanda"); // .unshift adiciona, no início da lista, um elemento
list.pop(); // remove o último item da lista

// Poderíamos alterar um elemento da lista com: list[2] = "Gustavo"; por exemplo


const sortedList = list.sort(); // .sort deixará a lista em ordem alfabética

console.log(sortedList);

console.log(list.length); // .length vai informar quantos itens a lista possui

