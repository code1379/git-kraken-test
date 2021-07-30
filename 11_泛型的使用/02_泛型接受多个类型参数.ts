// 泛型就是将 类型参数化，让外面的调用者决定参数的类型。
function foo<Type, OtherType>(arg1: Type, arg2: OtherType) {

}

foo<number, string>(1, "hi")