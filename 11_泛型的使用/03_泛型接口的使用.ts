interface IPerson {
  name: string;
  age: number;
}

// 可以添加默认类型
interface IAnimal<T1, T2> {
  name: T1;
  age: T2;
}

const dog: IAnimal<string, number> = {
  name: 'dog',
  age: 1
};

// 可以添加默认类型
interface IPlanet<T = string, U = number> {
  name: T;
  age: U;
}

const banana: IPlanet = {
  name: 'banana',
  age: 0.1
};
