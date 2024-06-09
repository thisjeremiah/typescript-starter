type Family = 'mammal' | 'bird' | 'reptile' | 'amphibian' | 'fish' | 'invertebrate'

type Animal = {
  name: string
  family: Family
  isFavorite?: boolean
}

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

function getAnimals() {
  return animals
}

function addAnimal(animal: Animal) {
  animals.push(animal)
}

function removeAnimal(name: string) {
  const index = animals.findIndex(animal => animal.name === name)
  animals.splice(index, 1)
}

function favoriteAnimal(name: string) {
  const index = animals.findIndex(animal => animal.name === name)
  animals[index].isFavorite = !animals[index].isFavorite
}

export const database = {
  getAnimals,
  addAnimal,
  removeAnimal,
  favoriteAnimal
}
