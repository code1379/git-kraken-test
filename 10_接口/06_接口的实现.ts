interface ISwim {
  swim: () => void;
}

interface IEat {
  eat: () => void;
}

// 接口作为对象的类型
const a: ISwim = {
  swim() {}
};

// 接口作为参数的类型
function foo(swim: ISwim) {}

// * 类实现接口
class Animal {}

// 继承：只能实现单继承
// 实现：实现接口，可以实现多个接口
class Fish extends Animal implements ISwim, IEat {
  swim() {}
  eat() {}
}

// 编写有些公共的 API：面向接口编程
function swimAction(swimable: Fish) {
  swimable.swim();
}

swimAction(new Fish());
// ! 上面我们只能传递固定的鱼，其他的就没法传了。

// 面向接口的话，我们只需要参数时 满足接口就可以
// 1. 所有实现了接口 ISwim 的类都可以传入
class Person implements ISwim {
  swim(){}
}
// 面向接口编程 -> 前提是类实现接口
function swimAction1(swimable: ISwim) {}


swimAction1(new Fish());
swimAction1(new Person());
swimAction1({ swim() {} });
