interface ISwim {
  // swim(): void
  swim: () => void;
}

interface IFly {
  fly(): void;
}

interface IAction extends ISwim, IFly {}

const action: IAction = {
  swim() {},
  fly() {}
};
