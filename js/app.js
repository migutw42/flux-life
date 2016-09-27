window.onload = () => {
  const map = new LifeMap({width: WIDTH, height: HEIGHT});

  randomizeMap(map);
  render();
  setInterval(()=>{
    increaseTurn();
    updateMapWithRule(map);
    render();
  }, 100);
}

function render() {
  dom.render(store.getState());
}
