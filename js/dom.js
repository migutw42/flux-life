const dom = ((document) => {

  class Dom {
    constructor (document) {
      this.document = document;
    }
    render(state) {
      const turnElement = this.createTurnElement(state.turn);
      const mapElement = this.createMapElement(state.map);

      const rootElement = this.document.getElementById('app');
      rootElement.textContent = '';
      rootElement.appendChild(turnElement);
      rootElement.appendChild(mapElement);
    }
    createTurnElement(turn) {
      const turnElement = this.document.createElement('div');
      turnElement.innerHTML = `Turn: ${turn}`;

      return turnElement;
    }
    createMapElement(dataMap) {
      const tableElement = this.document.createElement('table')

      tableElement.innerHTML = dataMap
        .map((row)=> {
          return row
            .map(val => ((val === 1) ? '■' : '□'))
            .map(block => `<td>${block}</td>`)
            .join('');
        })
        .map(tds => `<tr>${tds}</tr>`)
        .join('');

      return tableElement;
    }
  }

  return new Dom(document);
})(document)
