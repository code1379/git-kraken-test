class Person {
  constructor(public name: string, public age: number) {}
  eat() {
    console.log(this.name + ' eat');
  }
}

class Student extends Person {
  constructor(public name: string, public age: number, public stuId: number) {
    super(name, age);
  }

  study() {
    console.log(this.name + ' study');
  }
}

class Teacher extends Person {
  constructor(public name: string, public age: number, public subject: string) {
    super(name, age);
  }

  teach() {
    console.log(this.name + ' teach student');
  }

}


const dell = new Student("dell", 18, 1)

const why = new Teacher("why", 18, "frontEnd")


export {}