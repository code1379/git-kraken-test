// class Person {
//   public name: string = '';
// }

// const p = new Person();
// console.log(p.name)

// export {};

class Person {
  private name: string = '';
  getName(): string { return this.name; }
  setName(newName: string) {
    this.name = newName;
  }
}

const p = new Person();

p.getName()
p.setName("dell")
export {};
