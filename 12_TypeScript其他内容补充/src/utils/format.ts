// 命名冲突
namespace time {
  // 不使用命名空间的话。使用不同的命名，王红元老师更加推荐
  // export function timeFormat(time: string): string {
  export function format(time: string): string {
    return '2222-02-22';
  }

  export function foo() {}
  let name: string = 'dell';
  let age: number = 12;
  function bar() {}
}

namespace price {
  // 不使用命名空间的话。使用不同的命名，王红元老师更加推荐
  // export function priceFormat(price: number): string {
  export function format(price: number): string {
    return price.toFixed(2);
  }
}

time.format;
time.foo;

price.format;
