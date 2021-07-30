function sum(
  num1: number | string | any[] | { length: number },
  num2: number | string | any[] | { length: number }
) {}
// 在定义函数时，参数让外部决定之外，* 类型也可以由外部决定 *

// TODO 类型参数化
// * 在定义这个函数时，我不决定这些参数的类型，而是让调用者以参数的形式告知，我这里的函数参数应该是什么类型

function add<Type>(num1: Type, num2: Type): Type {
  // ! 不能直接相加，因为不确定 + 号左右的参数的类型
  // return num1 + num2;
}

// TODO 这里先不考虑上面的 类型问题
function newAdd<Type>(num1: Type): Type {
  return num1;
}

// * 泛型 将类型 -> 参数化

// TODO 1. 调用方式一：明确的传入类型
newAdd<number>(1);
newAdd<{ name: string }>({ name: 'dell' });
newAdd<any[]>([1, 'abc']);

// TODO 2. 调用方式二：类型推导
newAdd(50);
newAdd("hi")
newAdd({ name: 'dell' });

export {};
