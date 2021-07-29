// 静态属性，通过类而不是实例
class Student {
  static time: string = '20:00';
  static attendClass() {
    console.log('去学习');
  }
}

console.log(Student.time);
Student.attendClass();

export {};
