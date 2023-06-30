class Typescript {
  version: string

  constructor(version: string) {
    this.version = version;
  }
  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

// class Car{
//   readonly model: string
//   readonlynumberOfWheels: number = 4

//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }

class Car {
  readonlynumberOfWheels: number = 4
  constructor (readonly model:string){}
}

//------------------------------------------

class Animal {
  protected voice: string = ""  //есть доступ в самом классе и всех дочерних
  public color: string = "black"

  constructor() {
    this.go()
  }
  private go() {    //только в том классе в котором были определены
    console.log("Go")
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat()
// cat.voice // нельзя напрямую
cat.setVoice("myau")
console.log(cat.color)

//-----------------------------

abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component{
  render(): void {
    console.log("Component on render")
  }
  info(): string {
    return "This is info"
  }
}
