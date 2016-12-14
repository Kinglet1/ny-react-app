import React, { Component } from 'react';
import './Jumbo.css';

class Jumbo extends Component {
	constructor(props) {
		super(props);
		//this.state = { greeting: 'Hello' };
	}

	render() {
		return (
			<div className="jumbo">
				<div className="jumbo__author">
					<img src={ this.props.post.avatar } alt="" className="jumbo__author-photo"/>
					<div className="jumbo__author-name">{ this.props.post.name }</div>
				</div>

				<div className="jumbo__post">
					<img src={ this.props.post.post } alt="" width='400' height='400'/>
				</div>
			</div>
		);
	}
}

export default Jumbo;