// const person = {
//     name: 'Brandon',
//     age: 26,
//     location: {
//         city: 'Houston',
//         temp: 100
//     }
// };

// const { name = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`)

// const { city, temp: temperature } = person.location

// if (city && temperature) {
//     console.log(`It's ${temperature} degrees in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemeny',
//     authour: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName);

// const address = ['1299 S Juniper', 'Philadelphia', 'Pennsylvania', '19147'];

// const [, city, state = 'New York'] = address

// console.log(`You are in ${city}, ${state}`)

const item = [
    'Coffee (hot)', '$2.00', '$2.50', '$2.75'
];
const [coffee, small, medium, large] = item;
console.log(`A medium ${coffee} costs ${medium}.`)

