// place files you want to import through the `$lib` alias in this folder.

export type Id = string

export type Message = {
  text: string
  id: Id
  parent: Id | null
  children: Id[]
}
