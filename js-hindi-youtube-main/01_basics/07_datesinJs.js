// Dates

let myDate = new Date()
// console.log(myDate);  //  2024-10-29T17:36:59.728Z
// console.log(myDate.toString());   //  Tue Oct 29 2024 23:06:59 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());  //Tue Oct 29 2024
// console.log(myDate.toLocaleString());  //29/10/2024, 11:07:35 pm
// console.log(typeof myDate);   // object

// let myCreatedDate = new Date(2023, 0, 23)   // month start with 0 -> january  11 -> december
// // console.log(myCreatedDate);   //  2023-02-22T18:30:00.000Z
// // console.log(myCreatedDate.toDateString());   //Thu Feb 23 2023

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// // console.log(myCreatedDate);   // 2023-01-22T23:33:00.000Z 
// console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023
// console.log(myCreatedDate.toTimeString());   // 05:03:00 GMT+0530 (India Standard Time)

// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);    //1730223939966  in mili
// console.log(myCreatedDate.getTime());   //   1673634600000   in mili 
// console.log(Math.floor(Date.now()/1000));  //  1730223939   in sec

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// console.log(`${newDate.getDay()} and the time `);




newDate.toLocaleString('default', {
    weekday: "long",
    timeZone:'5:30'
    
})

