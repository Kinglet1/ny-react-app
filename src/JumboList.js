import React, {Component} from 'react';
import './JumboList.css';
import Jumbo from './Jumbo';

class JumboList extends Component {
  render() {
    const list = this.props.posts.map((item) => {
      return < Jumbo key={item.postid} post={item}/>
    });
    return (
      <div className="jumbo-list">
        <div className="jumbo-list__list">
          {list}
        </div>
      </div>
    )
  }
}

export default JumboList;