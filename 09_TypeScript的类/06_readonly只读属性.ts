class Person {
  // 只读属性可以在构造器中赋值，赋值之后不可修改
  // 属性本身不可修改，对象中的属性可以修改
  readonly name: string;
  age?: number
  readonly friend: Person;
  constructor(name: string, friend?: Person) {
    this.name = name;
    this.friend = friend;
  }
}

const dell = new Person('dell');
const why = new Person('why', dell);

if(why.friend) {
  why.friend.age = 18
  // why.friend.name = "kobe"
}

export {};
