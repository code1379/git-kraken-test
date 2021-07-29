// 私有属性推荐写 getter 和 setter 访问器
// 而不是写一大堆的 setXxx 和 setXxx
class Person {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  // 访问器 getter/setter
  // p.name = newName
  set name(newName) {
    this._name = newName;
  }
  // p.name
  get name() {
    return this._name;
  }

  // p.setName(name)
  // setName(newName){}
}

// 私有属性不能直接访问到
const p = new Person('p');
