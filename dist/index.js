"use strict";
function sumofAge(user1, user2) {
    return (user1.age + user2.age);
}
;
const result = sumofAge({
    name: "aditya",
    age: 21
}, {
    name: "harkirat",
    age: 32
});
console.log(result);
