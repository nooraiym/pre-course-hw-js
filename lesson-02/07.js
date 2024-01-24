let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarried2 = passportMarried;
passportMarried2.married =false;

console.log(passportMarried); 
console.log(passportMarried2);
