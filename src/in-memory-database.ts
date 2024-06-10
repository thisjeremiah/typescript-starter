import {Animal} from "./types.js"

const animals: Animal[] = [
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

async function getAnimals() {
  return animals
}

async function addAnimal(animal: Animal) {
  animals.push(animal)
}

async function removeAnimal(name: string) {
  const index = animals.findIndex(animal => animal.name === name)
  animals.splice(index, 1)
}

async function favoriteAnimal(name: string) {
  const index = animals.findIndex(animal => animal.name === name)
  animals[index].isFavorite = !animals[index].isFavorite
}

export const database = {
  getAnimals,
  addAnimal,
  removeAnimal,
  favoriteAnimal
}
