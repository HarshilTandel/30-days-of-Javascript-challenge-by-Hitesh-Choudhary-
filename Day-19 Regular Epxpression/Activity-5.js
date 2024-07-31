//Task-9

let password = "Passw0rd!";
let regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
let isValid = regex9.test(password);
console.log(isValid);

//Task-10

let url = "https://www.urlinfo.com";
let regex1 = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\/?]?.*)$/;
let isValid2 = regex1.test(url);
console.log(isValid2);