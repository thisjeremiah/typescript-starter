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

async function getAnimals() {
    await db.read()
    return db.data.animals;
}

async function addAnimal(animal) {
    db.data.animals.push(animal);
    await db.write();
}

async function removeAnimal(name) {
    const index = db.data.animals.findIndex(animal => animal.name === name);
    db.data.animals.splice(index, 1);
    await db.write();
}

async function favoriteAnimal(name) {
    const index = db.data.animals.findIndex(animal => animal.name === name);
    db.data.animals[index].isFavorite = !db.data.animals[index].isFavorite;
    await db.write();
}

export const database = {
    getAnimals,
    addAnimal,
    removeAnimal,
    favoriteAnimal
};
