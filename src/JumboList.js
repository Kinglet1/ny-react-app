import React, {Component} from 'react';
import './JumboList.css';
import Jumbo from './Jumbo';

class JumboList extends Component {
  render() {
    const list = this.props.posts.map((item) => {
      return < Jumbo post={item}/>
    });
    return (
      <div className="jumbo-list">
        <div className="jumbo-list__list">
          {list}
        </div>

	    <div className="jumbo-list__tags"></div>
	    <div className="jumbo-list__slogan"></div>
	    <div className="jumbo-list__logo"></div>
	    <div className="jumbo-list__pic"></div>
      </div>
    )
  }
}

export default JumboList;