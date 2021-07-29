// 获取面积，不确定物体的形状
function getArea(shape: any) {
  // 判断形状的话，是无穷无尽的
  return shape.getArea();
}
// 抽象方法存在于抽象类里
// 抽象类不能实例化
abstract class Shape {
  // 抽象方法 
  abstract getArea();
}
class Rectangle implements Shape {
  private width: number;
  private height: number
  constructor(width: number, height: number){
    this.width = width
    this.height = height;
  }
  getArea() {
    return this.width * this.height
  }
}

class Circle implements Shape {
  constructor(private r: number) {}
  getArea() {
    return this.r * this.r * Math.PI;
  }
}
const r = new Rectangle(4, 4);
const c = new Circle(8)
getArea(r);
getArea(c);
