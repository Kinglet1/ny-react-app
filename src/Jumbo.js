import React, {Component} from 'react';
import './Jumbo.css';

class Jumbo extends Component {
  render() {
    return (
      <div className="jumbo">
        <div className="jumbo__post">
          <img className="jumbo__post-img" src={ this.props.post.image } alt=""/>
        </div>

	      <div className="jumbo__author">
		      <img src={ this.props.post.userpic } alt="" className="jumbo__author-photo"/>
		      <div className="jumbo__author-name">{ this.props.post.username }</div>
	      </div>
      </div>
    );
  }
}

export default Jumbo;
