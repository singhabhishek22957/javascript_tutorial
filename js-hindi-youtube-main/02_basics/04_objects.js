// const tinderUser = new Object()     //singleton user
const tinderUser = {}   // non -singleton user 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);    //{ id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.clas);
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname);  //{ firstname: 'hitesh', lastname: 'choudhary' }
// console.log(regularUser);   // {
//     email: 'some@gmail.com',
//     fullname: { userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }
//   }

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    },
]

let str = users[1].email
console.log(str);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // returns into array value // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));  //[ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser));  //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

