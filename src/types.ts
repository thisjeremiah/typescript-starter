export type Family = 'mammal' | 'bird' | 'reptile' | 'amphibian' | 'fish' | 'invertebrate'

export type Animal = {
  name: string
  family: Family
  isFavorite?: boolean
}
