import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        Oh snap son, it's React n stuff.
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('c'));