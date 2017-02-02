import React, {Component} from 'react';
import './Jumbo.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Jumbo extends Component {
  render() {
  	var text = this.props.post.text || '';
	if (text.length > 200) {
		text = text.substring(0, 200) + '...';
	}

	var author;

  	if (!this.props.post.userpic || !this.props.post.username) {
	    author = <div className="jumbo__author">
		    <div className="jumbo__post-text">
			    { text }
		    </div>
	    </div>
    }
    else {
	    author = <div className="jumbo__author">
		    <img src={ this.props.post.userpic } alt="" className="jumbo__author-photo"/>
		    <div className="jumbo__author-text">
			    <div className="jumbo__author-name">{ this.props.post.username } </div>
			    <div className="jumbo__post-text">
				    { text }
			    </div>
		    </div>
	    </div>
    }

    return (
	    <ReactCSSTransitionGroup
		    transitionName="example"
		    transitionLeave={false}
		    transitionEnter={true}
		    transitionEnterTimeout={1500}>

		      <div className="jumbo" key={ this.props.post.postid ? this.props.post.postid : `${this.props.post.source}_${this.props.post.date}` }>

		        <div className="jumbo__post">
		          <img className="jumbo__post-img" src={ this.props.post.image } alt=""/>
		        </div>

			    { author }
		      </div>

		    </ReactCSSTransitionGroup>
    );
  }
}

export default Jumbo;
