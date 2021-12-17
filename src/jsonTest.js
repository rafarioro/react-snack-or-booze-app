const fs = require('fs');
const fileName = '../db.json';
const myObject = require(fileName);

let newDrink = {
    id: 'h20',
    name: 'water',
    description: 'Soda Water',
    recipe: 'Press the lever',
    serve: 'Immediately.'
}

let newDrinkJson = JSON.stringify(newDrink)

myObject['drinks'].push(JSON.parse(newDrinkJson))

let newData = JSON.stringify(myObject)

fs.writeFile(fileName, newData, (err) => {
        // Error checking
        if (err) throw err;
        console.log("New data added");
});


console.log(myObject)