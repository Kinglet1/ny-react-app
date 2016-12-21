import React, {Component} from 'react';
import $ from 'jquery';
import './JumboList.css';
import Jumbo from './Jumbo';

class JumboList extends Component {
  constructor(props) {
    super(props);
    this.state = {posts: []};
    this.updateData();
    this.onNextButtonClick = this.onNextButtonClick.bind(this);
  }

  updateData() {
    let self = this;
    $.getJSON("api.json", (response, status) =>{
      if (status) {
        console.log(status);
      }
      console.log(response);
      self.setState(response);
    });
  }

  onNextButtonClick() {
    this.updateData()
  }

  render() {
    const list = this.state.posts.map((item) => {
      console.log(item);
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
