import {Animal, Database} from "./types.js"

const data: Database = {
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
}

export const database = {
  animals: {
    list(): Animal[] {
      return data.animals
    },
    create(animal: Animal) {
      data.animals.push(animal)
    },
    remove(name: string) {
      const index = data.animals.findIndex(animal => animal.name === name)
      data.animals.splice(index, 1)
    },
    favorite(name: string) {
      const index = data.animals.findIndex(animal => animal.name === name)
      data.animals[index].isFavorite = !data.animals[index].isFavorite
    }
  },
}
