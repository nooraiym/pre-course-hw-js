const words = ["яблоко", "банан", "апельсин", "манго", "киви"];
function checkWordInArray() {
    if (words.indexOf("апельсин" == 'number')) {
        console.log("Ура! нашел");
    } else {
        console.log("Придется поискать в другом магазине…");
    }
}

checkWordInArray();