// number, boolean, string, any
let e: number[] = [1,2,3]

// enum Color { Red = 0, Blue = 1, Green = 2}


class Point {
    
    constructor(private _x:number, private _y:number) {
    }


    draw() {
      console.log('X: ' + this._x + ", Y: " + this._y)
  }
// getter
  get x() {
    return this._x
  }

  get y() {
    return this._y
  }
// setter
  set x(value: number) {
    if(value < 0) {
      throw new Error('value cannot be less than 0')
    }
    this._x = value
  }

  set y(value: number) {
    if(value < 0) {
      throw new Error('value cannot be less than 0')
    }
    this._y = value
  }
}



let point = new Point(1, 2)
console.log(point.x)
point.draw()