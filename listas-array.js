// alert("Hello World");

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