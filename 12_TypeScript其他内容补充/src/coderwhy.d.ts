// * 不需要写实现，只需要声明
// 和命名空间蛮像的
// 声明模块
declare  module 'lodash' {
  export function join(arr: any[], split: string): void {}
}

// 声明变量/函数/类
// index.html script 中的
declare let whyName: string;
declare let whyAge: number;
declare let whyHeight: number;

declare function fooFunc() {
  
}

declare class Person {
  name: string
  age: number
  constructor(name: string, age:number) 
}

// 声明文件
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.gif'

declare module '*.vue' {
}

// 声明命名空间

declare namespace $ {
  export function ajax() {}
}