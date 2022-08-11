// alert("Hello World");

for (let index = 1; index <= 10; index++) {
    console.log(index);
}

// let index = 1; ou seja, minha lista começou com 1
// index++ ou seja, após cada execução, irá acrescentar +1
// index <= 10; meu index será menor ou igual a 10, ou seja, não passará de 10. 


// outro exemplo: 

const cars = ["Ferrari", "Tesla", "Mercedes"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

//ou 

for (let car of cars) {
    console.log(car);
}

//ou 

cars.forEach(function (car, index) {
    console.log(index);
    console.log(car);
});