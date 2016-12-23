import React, {Component} from 'react';
import './Jumbo.css';

class Jumbo extends Component {
  render() {
	var author;

  	if (!this.props.post.userpic || !this.props.post.username) {
	    author = <div className="jumbo__author">
		    <div className="jumbo__post-text">
			    { this.props.post.text.substring(0, 250) + '...' }
		    </div>
	    </div>
    }
    else {
	    author = <div className="jumbo__author">
		    <img src={ this.props.post.userpic } alt="" className="jumbo__author-photo"/>
		    <div className="jumbo__author-text">
			    <div className="jumbo__author-name">{ this.props.post.username } </div>
			    <div className="jumbo__post-text">
				    { this.props.post.text.substring(0, 250) + '...' }
			    </div>
		    </div>
	    </div>
    }

    return (
      <div className="jumbo">

        <div className="jumbo__post">
          <img className="jumbo__post-img" src={ this.props.post.image } alt=""/>
        </div>

	    { author }
      </div>
    );
  }
}

export default Jumbo;
