import {JSONFileSyncPreset} from 'lowdb/node'
import {Animal, Database} from './types.js'

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

const db = JSONFileSyncPreset('db.json', initialData)

export const database = {
  animals: {
    list(): Animal[] {
      db.read()
      return db.data.animals
    },
    create(animal: Animal) {
      db.data.animals.push(animal)
      db.write()
    },
    remove(name: string) {
      const index = db.data.animals.findIndex(animal => animal.name === name)
      db.data.animals.splice(index, 1)
      db.write()
    },
    favorite(name: string) {
      const index = db.data.animals.findIndex(animal => animal.name === name)
      db.data.animals[index].isFavorite = !db.data.animals[index].isFavorite
      db.write()
    }
  },
}
