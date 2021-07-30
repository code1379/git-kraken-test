interface IPerson {
  name: string;
  age: number;
  height: number;
}

const info = {
  name: 'why',
  age: 1,
  height: 1.88,
  address: '北京市'
};

/**
 * 不能将类型“{ name: string; age: number; height: number; address: string; }”分配给类型“IPerson”。
  对象文字可以只指定已知属性，并且“address”不在类型“IPerson”中。ts(2322)
 */
// const p1: IPerson = {
//   name: 'why',
//   age: 1,
//   height: 1.88,
//   address: '北京市'
// };

// ! 但是直接使用另一个引用就可以
// 为什么？
// 正常情况下，如果上面的 p1 没有写 IPerson 类型，会进行推导。推导出 p1 的类型。如果我们写上 IPerson 类型，就会引起冲突 多了一个 address 属性

// 将对象的引用赋值给 p， freshness 擦除操作。
// TODO typeScript 做的事情是类型检测，你只要类型满足我的检测就没问题
// 当我们把 info 赋值给 p 的时候， typeScript 会执行 freshness 擦除多余的属性。（不是把属性删掉，**只是针对类型检测**）
// * 擦除掉之后依然符合 类型检测
const p: IPerson = info;

// * 即使擦除掉 address 也不满足
const myInfo = {
  name: 'dell',
  address: '杭州市'
};

// const p2:IPerson = myInfo

export {};

// * 实际遇到的问题
function printInfo(person: IPerson) {
  console.log(person);
}
// 直接放进来会报错， 传递引用不会报错
printInfo({
  name: 'why',
  age: 1,
  height: 1.88,
  address: '北京市'
})


printInfo(info)