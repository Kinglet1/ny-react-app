import React, { Component } from 'react';
import $ from 'jquery';
import './JumboList.css';
import Jumbo from './Jumbo';

import createMockjax from 'jquery-mockjax';
const mockjax = createMockjax($, window);

var testPosts = [{
	avatar: 'https://pp.vk.me/c638222/v638222121/fd35/jtOfNd2OUjE.jpg',
	name: 'Jack Sparrow',
	post: 'https://pp.vk.me/c635102/v635102436/16c7f/Knut8RJZFaE.jpg'
}, {
	avatar: 'https://pp.vk.me/c638222/v638222121/fcec/k2VyfY91UyY.jpg',
	name: 'Red Riding Hood',
	post: 'https://pp.vk.me/c635102/v635102436/16c83/Icj6UJyO6gc.jpg'
}, {
	avatar: 'https://pp.vk.me/c638222/v638222121/fcfc/LozqScJwPpo.jpg',
	name: 'Bembi',
	post: 'https://pp.vk.me/c635102/v635102436/16c97/iBDIpxWK_6A.jpg'
}, {
	avatar: 'https://pp.vk.me/c638222/v638222121/fd25/UgP5mVeOB0Y.jpg',
	name: 'Piggy',
	post: 'https://pp.vk.me/c635102/v635102436/16ca0/QdGLXKhhwAQ.jpg'
}];

function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getData() {
	var posts = [];
	for (var i=0; i<3; i++) {
		posts.push(testPosts[getRandomInt(0,3)]);
	}
	return posts;
}

mockjax({
	url: "/restful/fortune",
	// responseText: {
	// 	posts: getData()
	// },
	response: function() {
		this.responseText = {
			posts: getData()
		};
	}
});
/**/

class JumboList extends Component {
	constructor(props) {
		super(props);
		this.state = { posts: [{
			avatar: 'https://pp.vk.me/c638222/v638222121/fd35/jtOfNd2OUjE.jpg',
			name: 'Jack Sparrow',
			post: 'https://pp.vk.me/c635102/v635102436/16c7f/Knut8RJZFaE.jpg'
		}, {
			avatar: 'https://pp.vk.me/c638222/v638222121/fcec/k2VyfY91UyY.jpg',
			name: 'Red Riding Hood',
			post: 'https://pp.vk.me/c635102/v635102436/16c83/Icj6UJyO6gc.jpg'
		}, {
			avatar: 'https://pp.vk.me/c638222/v638222121/fcfc/LozqScJwPpo.jpg',
			name: 'Bembi',
			post: 'https://pp.vk.me/c635102/v635102436/16c97/iBDIpxWK_6A.jpg'
		}] };

		this.onNextButtonClick = this.onNextButtonClick.bind(this);
	}

	renderJumboList(posts) {
		return posts.map(post => (
			< Jumbo post={post} />
		));
	}

	onNextButtonClick() {
		var self = this;

		$.getJSON("/restful/fortune", function(response) {
			console.log(response.posts);
			self.setState({ posts: response.posts });
		});
	}

	render() {
		return (
			<div className="jumbo-list">
				<button className="jumbo-list__button" onClick={ this.onNextButtonClick }>Next</button>
				<div className="jumbo-list__list">
					{ this.renderJumboList(this.state.posts) }
				</div>
			</div>
		)
	}
}

export default JumboList;