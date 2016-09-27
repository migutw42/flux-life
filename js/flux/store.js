const store = ((state, reducer)=> {
  class Store {
    constructor (state, reducer) {
      this.state = state;
      this.reducer = reducer;
    }
    dispatch (key, params) {
      this.reducer[key](state, params);
    }
    getState() {
      return this.state;
    }
  }

  return new Store(state, reducer, dom);
})(state, reducer);
