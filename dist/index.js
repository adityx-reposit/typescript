"use strict";
let user = {
    name: "aditya",
    age: 21,
    address: {
        city: "howrah",
        state: "wb",
        country: "india"
    }
};
let user2 = {
    name: "aditya",
    age: 10,
};
function isLegal(user2) {
    return (user2.age >= 18 ? true : false);
}
const response = isLegal(user2);
if (response) {
    console.log("you are legal");
}
else {
    console.log("you are illegal");
}
