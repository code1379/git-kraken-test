class Person {
  name: string  = "123"
  eat() {}
}

// p: Person
const p = new Person()
const p1: Person = {
  name: "John",
  eat() {}
}


// 应用
function printPerson(p: Person): void {
  console.log(p.name)
}

printPerson(new Person())
// 就是传递对象也可以
printPerson({name: "Kobe", eat(){}})
export {}