// function testvar(){
//     var x = 10;
//     if (true) {
//         var x = 20; // same variable
//         console.log("Inside if block: " + x);
//     }
//     console.log("Outside if block: " + x); // 20
// }

// testvar();

// function testlet(){
//     let y = 10;
//     if (true) {
//         let y = 20; // different variable
//         console.log("Inside if block: " + y);
//     }
//     console.log("Outside if block: " + y); // 10
// }

// testlet();

// const PI = 3.14;
// const person = {
//     name: "John",};
// person.age = 20;
// console.log("Person: ", person);

// person = { name: "Jane" };

for(let i = 0; i < 3; i++) {
    setTimeout(() => {
       console.log(i); 
    }, 100);
    
}