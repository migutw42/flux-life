const reducer = {
  INCREASE_TURN(state) {
    state.turn += 1;
  },
  UPDATE_MAP(state, params) {
    state.map = params.map.getMap();
  }
};
