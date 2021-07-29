// class Person {
//   public name: string = '';
// }

// const p = new Person();
// console.log(p.name)

// * private
// class Person {
//   private name: string = '';
//   getName(): string { return this.name; }
//   setName(newName: string) {
//     this.name = newName;
//   }
// }

// const p = new Person();

// console.log(p.getName())
// p.setName("dell")
// console.log(p.getName())

// * protected 在类内部和子类可以访问

class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  protected getName(): string {
    return this.name;
  }
}

class Student extends Person {
  constructor(name: string, public age: number) {
    super(name);
  }
  getStuName() {
    return super.getName();
  }
}

const dell = new Student('dell', 18);
console.log(dell.getStuName());
console.log(dell.age);

// ! 属性“name”受保护，只能在类“Person”及其子类中访问。ts(2445)
// console.log(dell.name)

export {};
