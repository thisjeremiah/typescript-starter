import {JSONFilePreset} from 'lowdb/node';

const initialData = {
    animals: [
        {
            name: 'Dog',
            family: 'mammal',
        },
        {
            name: 'Cat',
            family: 'mammal',
        },
        {
            name: 'Snake',
            family: 'reptile',
        }
    ]
};

// Initialize the database
let db = await JSONFilePreset('db.json', initialData);

function getAnimals() {
    return db.data.animals;
}

function addAnimal(animal) {
    db.data.animals.push(animal);
}

function removeAnimal(name) {
    const index = db.data.animals.findIndex(animal => animal.name === name);
    db.data.animals.splice(index, 1);
}

function favoriteAnimal(name) {
    const index = db.data.animals.findIndex(animal => animal.name === name);
    db.data.animals[index].isFavorite = !db.data.animals[index].isFavorite;
}

export const database = {
    getAnimals,
    addAnimal,
    removeAnimal,
    favoriteAnimal
};
