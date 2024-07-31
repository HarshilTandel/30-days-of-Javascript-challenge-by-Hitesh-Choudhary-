//Task-5

let str5 = "(123) 456-7890";
let regex5 = /\((\d{3})\) (\d{3})-(\d{4})/;
let matches5 = str5.match(regex5);
console.log(matches5);

//Task-6

let str6 = "user@example.com";
let regex6 = /(\w+)@(\w+\.\w+)/;
let matches6 = str6.match(regex6);
console.log(matches6);