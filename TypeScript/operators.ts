interface Person {
  name: string,
  age: number
}
type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'
// key = 'job' //mistake

type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}
//хотим создать тип на основе этого не включая поля ид и креатеАд
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>  //'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>  //'name' | 'email'

let u1:UserKeysNoMeta1 = 'name'
// u1 = '_id'  //mistake
