interface Rectangle {
  readonly id: string, //только для чтения
  color?: string, //не обязательный параметр
  size: {
    width: number,
    heigth: number,
  }
}
const rect1: Rectangle = {
  id: "1234",
  color: "yellow",
  size: {
    width: 30,
    heigth: 20,
  }
}
const rect2: Rectangle = {
  id: "12345",
  size: {
    width: 40,
    heigth: 50,
  }
}
rect2.color = "black";
// rect2.id = "12" //нельзя ибо readonly

const rect3 = {} as Rectangle;
const rect4 = <Rectangle>{};

//--------------------------------------
interface RectWithArea extends Rectangle {
  getArea: () => number
}
const rect5: RectWithArea = {
  id: "12345",
  size: {
    width: 10,
    heigth: 20,
  },
  getArea() {
    return this.size.width * this.size.heigth
  },
}
//---------------------------------
interface IClock {
  time: Date,
  setTime(date: Date): void,
}
class Clock implements IClock{
  time: Date = new Date()
  setTime(date: Date): void {
    this.time = date
  }
}
//----------------------------------
interface Styles{
  [key: string]: string
}
const css: Styles = {
  border: "1px solid #ccc",
  marginTop: "2px",
borderRadius: "5px",
}
