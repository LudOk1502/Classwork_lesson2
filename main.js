/*--створити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/
let arrayNum = [1, 2, 3, 4, 5];
let arrayStr = ['one', 'two', 'three', 'four', 'five'];
let arrayMix = [1, 2, 3, 4, 5, 'one', 'two', 'three', 'four', 'five', true, false, true, false, true];
console.log(arrayNum);
console.log(arrayStr);
console.log(arrayMix);
/*-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
*/
let arrayX = [];
arrayX[0] = 1;
arrayX[1] = 'two';
arrayX[2] = true;
console.log(arrayX);
/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині*/
for (let i = 0; i < 10; i++) {
    document.write(`<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam autem blanditiis consequatur dolorem doloremque et fuga illo illum impedit incidunt, minima pariatur, placeat possimus repudiandae, totam veritatis vitae voluptatem.
</div>`)
}
/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині*/
let arrayText = [];
for (let i = 0; i < 10; i++) {
    arrayText[i] = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, magni?';
    document.write(`<div>${arrayText[i]} індекс в середині ${i}</div>`);
}
/*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/
let i = 0;
while (i < 20) {
    document.write(`<div><h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1></div>`);
    i++;
}
/*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*/
let j = 0;
while (j < 20) {
    document.write(`<div><h1>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1> - індекс в середині ${j}</div>`);
    j++;
}
/*- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.*/
let nums = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
for (let num of nums) {
    console.log(`${num}`);
}
/*- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.*/
let strs = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
for (let str of strs) {
    console.log(`${str}`);
}
/*- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.*/
let mixs = [1, 'two', true, false, 78, 'nine', 12, 33, true, 'ten'];
for (let mix of mixs) {
    console.log(`${mix}`);
}
/*- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи*/
let arrayMixs = [1, 'two', true, false, 78, 'nine', 12, 33, true, 'ten'];
for (let bool of arrayMixs) {
    if (typeof bool == 'boolean') {
        console.log(bool);
    }
}
/*- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи*/
for (let num of arrayMixs) {
    if (typeof num == 'number') {
        console.log(num);
    }
}
/*- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи*/
for (let str of arrayMixs) {
    if (typeof str == 'string') {
        console.log(str);
    }
}
/*- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.*/
let mArray = [];
mArray[0] = 5;
mArray[1] = 'five';
mArray[2] = true;
mArray[3] = 77;
mArray[4] = 55;
mArray[5] = false;
mArray[6] = 'seven';
mArray[7] = 'ten';
mArray[8] = 100;
mArray[9] = true;
for (let m of mArray) {
    console.log(m);
}
/*- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write*/
document.write(`<div>`);
for (let i = 1; i < 11; i++) {
    console.log(i);
    document.write(`${i} `);
}
document.write(`</div>`);
/*- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write*/
document.write(`<div>`);
for (let i = 1; i < 101; i++) {
    console.log(i);
    document.write(`${i} `);
}
document.write(`</div>`);
/*- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write*/
document.write(`<div>`);
for (let k = 1; k < 101; k += 2) {
    console.log(k);
    document.write(`${k} `);
}
document.write(`</div>`);
/*- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write*/
document.write(`<div>`);
for (let n = 1; n < 101; n++) {
    if (n % 2 === 0) {
        console.log(n);
        document.write(`${n} `);
    }
}
document.write(`</div>`);
/*- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write*/
document.write(`<div>`);
for (let n = 1; n < 101; n++) {
    if (n % 2 !== 0) {
        console.log(n);
        document.write(`${n} `);
    }
}
document.write(`</div>`);
/*- Дано 2 масиви з рівною кількістю об'єктів.
З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
Записати цей об'єкт в новий масив
Example:
let usersWithCities = [
    {
        id: 1, // <===
        name: 'vasya',
        age: 31,
        status: false,
        address: {
            user_id: 1, // <===
            country: 'Ukraine',
            city: 'Ternopil'
        }
    },
    // TO BE CONTINUED .....
]*/
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let x = 0;
let usersWithCities = [];
for (let i in usersWithId) {
    for (let j in citiesWithId) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithCities[x] = usersWithId[i];
            usersWithCities[x].adress = citiesWithId[j];
            x++;
        }
    }
}
console.log(usersWithCities);
