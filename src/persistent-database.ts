import {JSONFilePreset} from 'lowdb/node'
import {Animal} from './types.js'

type Database = {
  animals: Animal[]
}

const initialData: Database = {
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

const db = await JSONFilePreset('db.json', initialData)

async function getAnimals() {
  await db.read()
  return db.data.animals
}

async function addAnimal(animal: Animal) {
  db.data.animals.push(animal)
  await db.write()
}

async function removeAnimal(name: string) {
  const index = db.data.animals.findIndex(animal => animal.name === name)
  db.data.animals.splice(index, 1)
  await db.write()
}

async function favoriteAnimal(name: string) {
  const index = db.data.animals.findIndex(animal => animal.name === name)
  db.data.animals[index].isFavorite = !db.data.animals[index].isFavorite
  await db.write()
}

export const database = {
  getAnimals,
  addAnimal,
  removeAnimal,
  favoriteAnimal
}
