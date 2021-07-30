// interface IFoo {
//   name: string;
// }

// interface IFoo {
//   age: number
// }

// 两个接口同名时，会合并两个接口
interface IFoo {
  name: string;
  age: number;
}

const foo: IFoo = {
  age: 1,
  name: ''
};

// type 不能重复定义
// type IBar = {
//   name: string
// }

// type IBar = {
//   age: number
// }

export {};
