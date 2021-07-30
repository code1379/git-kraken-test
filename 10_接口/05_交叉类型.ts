// 一种组合类型的方式：联合类型
type WhatType = number | string;
type Direction = 'left' | 'right' | 'top' | 'down';

// 另一种组件类型的方式：交叉类型
// TODO 可以使用交叉类型的方式实现接口的继承 如 MyType2
type WType = number & string;

interface ISwim {
  swim(): void;
}

interface IFly {
  fly(): void;
}

type MyType1 = ISwim | IFly;
type MyType2 = ISwim & IFly;

const obj1: MyType1 = {
  fly() {}
};

const obj2: MyType1 = {
  swim() {}
};

const obj3: MyType2 = {
  swim() {},
  fly() {}
};

export {};
