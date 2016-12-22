import React, {Component} from 'react';
import './JumboList.css';
import Jumbo from './Jumbo';

class JumboList extends Component {
  render() {
    const list = this.props.posts.map((item) => {
      return < Jumbo key={item.postid ? item.postid : `${item.source}_${item.date}`} post={item}/>
    });
    return (
      <div className="jumbo-list">
        <button className="jumbo-list__button" onClick={ this.onNextButtonClick }>Next</button>
        <div className="jumbo-list__list">
          {list}
        </div>
      </div>
    )
  }
}

export default JumboList;
