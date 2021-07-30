// type Direction = "left" | "top" | "right" | "bottom"
// 一般是为了保存常量，使用更方便 
enum Direction {
  LEFT = 0,
  RIGHT = 1,
  TOP = 2,
  BOTTOM = 3
}

// enum Direction {
//   LEFT = "LEFT",
//   RIGHT = "RIGHT",
//   TOP = = "TOP",
//   BOTTOM = "BOTTOM"
// }

function turnDirection(direction: Direction) {
  // console.log(direction)
  switch (direction) {
    case Direction.LEFT:
      console.log('改变角色的方向向左');
      break;
    case Direction.RIGHT:
      console.log('改变角色的方向向右');
      break;
    case Direction.TOP:
      console.log('改变角色的方向向上');
      break;
    case Direction.BOTTOM:
      console.log('改变角色的方向向下');
      break;
    // 上面必须穷举完 否则会报错
    default:
      const foo: never = direction;
      break;
  }
}

// 枚举的可读性强
turnDirection(Direction.LEFT);

export {};
