// function getLength(arg: string | any[]): number {
//   return arg.length;
// }

interface IWithLength {
  length: number;
}

function getLength(arg: IWithLength): number {
  return arg.length;
}

// 更加通用的泛型
// TODO 使用 extends 限制 泛型
function getLengthWithT<T extends IWithLength>(arg: T): number {
  return arg.length;
}

getLengthWithT('string');
getLengthWithT([1, 2, 3]);
