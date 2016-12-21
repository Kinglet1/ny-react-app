import React, { Component } from 'react';
import './Jumbo.css';

class Jumbo extends Component {
	render() {
		return (
			<div className="jumbo">
				<div className="jumbo__author">
					<img src={ this.props.post.userpic } alt="" className="jumbo__author-photo"/>
					<div className="jumbo__author-name">{ this.props.post.username }</div>
				</div>

				<div className="jumbo__post">
					<img src={ this.props.post.image } alt="" width='400' height='400'/>
				</div>
			</div>
		);
	}
}

export default Jumbo;