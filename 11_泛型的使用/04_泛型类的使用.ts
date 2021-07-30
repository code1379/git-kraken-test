class Point<T> {
  x: T;
  y: T;
  z: T;
  constructor(x: T, y: T, z: T) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const p = new Point<string>('1.33.2', '2.33.4', '3.44.5');
const p1: Point<string> = new Point('1', '2', '3');
// 能使用类型推导就使用类型推导
// 类型推导
const p2 = new Point('1.33.2', '2.33.4', '3.44.5');


// * 数组类型
// const names: string[] = ["1", "c", 'd']
const names: Array<string> = ["1", '2', '3'] // 不推荐 (react jsx <>)