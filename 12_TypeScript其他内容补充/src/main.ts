import img from './img/main-qimg-efbf627e4d9d15ed4c58b7f26ff7a63c.png'

import axios from 'axios';
// npm i --save-dev @types/lodash
import lodash from 'lodash';

import { add, minus } from './utils/math';
console.log('hi');
console.log(add(1, 2));
console.log(minus(1001, 2));

axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res);
});

// 下面会先执行 因为 promise 是异步的。
console.log(lodash.join([1, 2, 3], '-'));

console.log(whyName)
console.log(whyAge)
console.log(whyHeight)

fooFunc()

new Person("dell", 18)

