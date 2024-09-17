const animals = [
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
];

function getAnimals() {
    return animals;
}

function addAnimal(animal) {
    animals.push(animal);
}

function removeAnimal(name) {
    const index = animals.findIndex(animal => animal.name === name);
    animals.splice(index, 1);
}

function favoriteAnimal(name) {
    const index = animals.findIndex(animal => animal.name === name);
    animals[index].isFavorite = !animals[index].isFavorite;
}

export const database = {
    getAnimals,
    addAnimal,
    removeAnimal,
    favoriteAnimal
};
