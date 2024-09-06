// const aboutMe = {
//     firstName: 'Ten',
//     lastName: 'Hag',
//     age: 18 ,
//     telephone: '112',
//     birthday: 29/12/2548,
//     address: 'manchester',
//     gender: 'male',
//     zipcode: '70077007',
//     road: 'antony',
//     email: 'onana100goal@gmail.com',
//     district: 'iloan',
//     country: 'chickenkook',
//     fan: {
//         firstName: 'Lisa',
//         lastName: 'mamamoosub',
//         age: 15,
//         animal: {
//             animalType: 'cat',
//             color: 'orange',
//         }
//     }
// }

// console.log(aboutMe.fan.animal.animalType)

// const bestfriend = {
//     firstName: 'Ronaldo',
//     lastName: 'Messi',
//     fwae: 'Ruj'
// }

// console.log(bestfriend.fwae)

// const aboutMe = {
//     firstName: 'Ten',
//     lastName: 'Hag',
//     age: 18 ,
//     telephone: '112',
//     birthday: 29/12/2548,
//     address: 'manchester',
//     gender: 'male',
//     zipcode: '70077007',
//     road: 'antony',
//     email: 'onana100goal@gmail.com',
//     district: 'iloan',
//     country: 'chickenkook',
//     fan: {
//         firstName: 'Lisa',
//         lastName: 'mamamoosub',
//         age: 15,
//         animal: {
//             animalType: 'cat',
//             color: 'orange',
//         }
//     },
//     bestFriend: {
//     firstName: 'Ronaldo',
//     lastName: 'Messi',
//     AKA: 'Terminator'    
//     }
// }

// console.log(aboutMe.bestFriend.AKA)

// const myFriend = [{
//     firstName: 'Lisa',
//     lastName: 'Mamamoosub',
//     AKA: 'SuperWoman',
//     age: 20

// }, {
//         firstName: 'Rosse',
//     lastName: 'Mamamoosub',
//     AKA: 'RoseOnpink',
//     age: 19
// }, {
//         firstName: 'Jisoo',
//     lastName: 'Mamamoosub',
//     AKA: 'Jinny',
//     age: 24
// }, {
//         firstName: 'Jenny',
//     lastName: 'Mamamoosub',
//     AKA: 'WonderG',
//     age: 22
// }]

// console.log(myFriend[0].firstName)

// const myFriends = [{
//     firstName: 'Lisa',
//     lastName: 'Mamamoosub',
//     AKA: 'SuperWoman',
//     age: 20

// }, {
//         firstName: 'Rosse',
//     lastName: 'Mamamoosub',
//     AKA: 'RoseOnpink',
//     age: 18
// }, {
//         firstName: 'Jisoo',
//     lastName: 'Mamamoosub',
//     AKA: 'Jinny',
//     age: 24
// }, {
//         firstName: 'Jenny',
//     lastName: 'Mamamoosub',
//     AKA: 'WonderG',
//     age: 22
// }]

// const myFriendsAKA = myFriends.map(function(element, index) {
//     return ({
//         fn: element.firstName,
//        chaya: element.AKA
//     })
// })

// const myFriendsMoreThan = myFriends.filter(function(element, index) {
//     return element.age > 19 && element.lastName ==='Mamamoosub'
// })

// console.log(myFriendsMoreThan)

const covidDeath = database.filter(function(element, index) {
    return element.total_death > 5
})

