// let data = [9, 3, 1, "Peter", 5, 10];

// let onlynumbers = data.filter( item => {
//     if(typeof item != 'string')
//     return item;
// })
// data.splice(3, 1);
// console.log('Max: ', Math.max(...data));
// let size = data.length -1;
// console.log("Array Size: ", size);
// console.log("Elements ", -1);
// console.log("at() ", data.at(-1));
// let middleIndex = Math.trunc((data.length-1)/2);
// if(data.length % 2 == 0) {
//     console.log("middle element: ", data.slice(middleIndex, middleIndex + 2));
// }else {
//     console.log(data[middleIndex]);
// }
// console.log("middleIndex: ", middleIndex);

// let sentence = "I Love Programming, I love cycling, I love swimming, I love gaming";
// console.log(sentence.split('I'));

// let myDate = new Date("2022/11/28");
// console.log("My Date: ", myDate.toLocaleDateString());

//  let age = 17;
//  if(age => 17) {
//     console.log("You're qualified")
//  }else {
//     console.log("You're not qualified")
//  };

// let age = 18;
// let salary = 4990;
// if(age >17) {
//     if(salary >= 5000) {
//         console.log("Well Done");
//     }else {
//         console.log("Present the second payslip");
//     }
// }else {
//     console.log("You're not qaulified");
// }

// let age = 18;
// let salary = 50000 ;
// if((age >17) && (salary >= 5000)) {
//     console.log("Well done");
//   }else {
//     console.log("Thank you for coming");
// }

// let monthInt = 1;
// switch(monthInt) {
//     case 1:
//         console.log("January");
//         // break;
//         case 2:
//             console.log("February");
//             break;
// }

// let grade = -1;
// switch(true) {
//     case grade == 100;
//     console.log("Youre awesome");
//     break;
//     case (grade >= 90) && (grade <= 99):
//         console.log("Distinction");
//         break;
//         case (grade >=50) && (grade <= 74):
//         console.log("pass");
//         break;
//     case (grade <= 49) & (Math.sign(grade) !=-1):
//     console.log("Fail");
//     break;
//     default: 
//     console.log("Out of range");
// };

// let x;

// if ((x >= 10 && x <= 20) || (x === undefined)) {
//     console.log("something");
// }

// let marks = 85;

// switch(true) {
//     case 100:
//        console.log(`You have outdone yourself`);
//     break;
//     case (marks >= 90 && marks < 100):
//        console.log(`meh`);
//     break;
//     case (marks >= 80 && marks < 90):
//        console.log(`dundundun`);
//     break;

    

//     default:
//         console.log(`mwahhahaha`);
//         break;
// }

// const myCars = [
//     'Toyota',
//     'BMW',
//     'Mazda',
//     'meh'
// ];

// for ( const s of myCars) {
//     console.log(s);
// }

// let myCar = {
//     make: 'Toyota',
//     model: 'Corrola',
//     year: '1996',
//     colors: [
//         'red',
//         'blue',
//         'white'
//     ]
// };


// for (let index = 0; index < myCars.length; index++) {
//     console.log(myCars[4]);
// }

// for (const key in myCar) {
// console.log(key, myCar[key]);
// }
// let cnt= 0;
// while(cnt < 10) {
//     console.log(cnt);
//     cnt++;
// }
// const numbers = [8, 5, 3, 6];

// do{
//     console.log(numbers[cnt]);
//     cnt++;
// }while(cnt < numbers.length);

// let x = document.getElementById("first")//.value !== undefined ? document.getElementById("first").value:10;
// let y = document.getElementById("second")//.value !== undefined ? document.getElementById("first").value:9;

// function add() {
//     let x = document.getElementById("first").value !== undefined ? document.getElementById("first").value:10;
// let y = document.getElementById("second").value !== undefined ? document.getElementById("first").value:9;
//     console.log(+x + +y);
// };
// let person1 = {
//         person: 'John',
//         surname: 'Doe',
//         age: 30
//     }
// let person2 = {
//         person: 'Kauthar',
//         surname: 'Brandt',
//         age: 30
// }

// function createPeople(name, surname, age) {
//     return {
//         name,
//         surname,
//         age
//     }
    
// }
// let person1 = createPeople('Bitch', 'Beach', 789);
// console.log(person1);

// function Person(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age
// }

// let person1 = new Person('Kauthar', 'Aliyah', 45);
// console.log(person1);

// function add(e) {
//     e.preventDefault();
//     let numb1 = document.querySelector('#numb1').value;
//     let numb2 = document.querySelector('#numb2').value;

//     let output = document.querySelector('#output');
//     output.innerText =  eval(`${numb1}+${numb2}`);
// }

// let output = document.querySelector('button');
// output.addEventListener('click', (e)=> )

// let numbers = [1, 2, 3, 4, 5];
// let people = [
//     {
//         firstName: 'Lerato',
//         surname: 'Brandt'


//     },

//     {
//         id: 2,
//         firstName: 'James',
//         surname: 'Peter'
//     }
// ];
// console.table(people);

// let peopleFirstNames = 
// people.map((item) => {
//     return item.firstName;
// })
// console.log(peopleFirstNames);
// let sum = numbers.reduce((a, b) => {
//     return a +b;
// })
// console.log(`Sum: ${sum}`);
// let double = numbers.map((item)=> {
//     return item * 2;
// })
// console.log('Current array: ', numbers);
// console.log("Double: ", double);

// for (let numb of numbers) {
//     console.log(numb);
// }

// console.table(numbers);
// function addition(...args) {
//     let sum = args.filter(Number).
//     reduce((a, b) => {
//         return a +b;
//     })
//     console.log(sum);
// }
// addition( 'kauthar', 5, 8, 3);

// fetch('./index.json')
// .then((res)=>{
//     return res.json();
// })
// .then((data)=> {
//     let results = data.results;
// console.table(results);
// })
// async function fetchData() {
//     let data = await fetch('https://api.chucknorris.io/jokes/random')
//     return data;
    
// }

// async function display() {
//     let result = await fetchData();
//     return result;
// }
fetch('https://api.chucknorris.io/jokes/random')
.then((res)=>{
    return res.json();
})
.then((data)=>{
    let tbody = document.querySelector('tbody');
    Object.keys(data).forEach( (item)=>{
        if(data[item].length) {
            console.log(`${item}: ${data[item]}`);
            tbody.innerHTML +=
            `
                <tr>
                    <td>${item}</td>
                    <td>${data[item]}</td>
                </tr>
            `
        }
    } )
})
console.log(item);
