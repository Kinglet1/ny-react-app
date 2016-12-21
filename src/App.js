import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import axios from 'axios';

import JumboList from './JumboList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.startPolling();
  }

  componentWillUnmount() {
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }

  isMounted() {
    try {
      ReactDOM.findDOMNode(this.element);
      return true;
    } catch (e) {
      return false;
    }
  }

  startPolling() {
    const self = this;
    setTimeout(() => {
      if (!self.isMounted()) { return; } // abandon
      self.poll(); // do it once and then start it up ...
      self._timer = setInterval(self.poll.bind(self), self.props.refreshTimeout);
    }, 1000);
  }

  poll() {
    const self = this;
    axios.get(self.props.srcUrl)
      .then(response => {
        if (self.isMounted()) {
          self.setState(response.data);
        }
      })
      .catch(response => {
        console.log(response);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        < JumboList posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
