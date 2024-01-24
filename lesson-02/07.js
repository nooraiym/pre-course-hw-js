let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    married: true,
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};
console.log(passportMarried);

let passportMarried2 = passportMarried;
passportMarried2.married =false;

console.log(passportMarried2);