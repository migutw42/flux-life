function randomizeMap(map) {
  map.randomize();
  store.dispatch(UPDATE_MAP, {map});
}

function increaseTurn () {
  store.dispatch(INCREASE_TURN);
}

function updateMapWithRule(map) {
  map.updateWithRule();
  store.dispatch(UPDATE_MAP, {map});
}
