class LifeMap {
  constructor (params = {width: 5, height: 5}) {
    this.map = [[]];
    Object.assign(this, params);

    this.pad(()=> 0);
  }
  randomize() {
    this.pad(()=> Math.round(Math.random()))
  }
  updateWithRule() {
    const patterns = this.getPatterns();

    this.pad((x, y, map) => {
      const isAlive = map[y][x] === ALIVE;
      const count = patterns
        .filter((el) => 'undefined' !== typeof map[y + el.y])
        .filter((el) => 'undefined' !== typeof map[y + el.y][x + el.x])
        .filter((el) => map[y + el.y][x + el.x] === ALIVE)
        .length

      const aliveState = [
        (!isAlive && count === 3),
        (isAlive && count === 2 || count === 3),
      ]

      return aliveState.find((el) => el) ? ALIVE : DEAD;
    });
  }
  pad(procedure) {
    const map = this.map

    this.map = [...Array(this.height).keys()].map((y) =>
      [...Array(this.width).keys()].map((x)=>
        procedure(x, y, map)
      )
    );
  }
  getMap() {
    return this.map;
  }
  getPatterns() {
    return [
      {x: -1, y: -1},
      {x:  0, y: -1},
      {x:  1, y: -1},
      {x: -1, y:  0},
      {x:  1, y:  0},
      {x: -1, y:  1},
      {x:  0, y:  1},
      {x:  1, y:  1},
    ];
  }
};
