// type Direction = "left" | "top" | "right" | "bottom"
enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM
}

function turnDirection(direction: Direction) {
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

// 阅读性不强
function turnDirectionByNumber(num: number) {}
turnDirectionByNumber(1);
