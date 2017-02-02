import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import axios from 'axios';
import Post from './models/Post';

import JumboList from './JumboList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      postsToShow: [],
      lastShownId: 0,
    };
  }

  componentDidMount() {
    this.startPolling();
  }

  componentWillUnmount() {
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }

  isMounted() {
    try {
      ReactDOM.findDOMNode(this.element);
      return true;
    } catch (e) {
      return false;
    }
  }

  mergePosts(oldPosts, newPosts) {
    let posts = [];
    Array.prototype.push.apply(posts,oldPosts);
    newPosts.forEach(item => {
      let post = new Post(item);
      if((posts.filter(existPost => post.isSame(existPost))).length > 0){
        return;
      }
      posts.push(post);
    });

    return posts.slice(this.props.poolSize * -1);
  }

  filterPosts(posts) {
    let filteredPosts = [];
    let cache = [];
    posts.forEach(item => {
      let post = new Post(item);
      if(cache.indexOf(post.postid) !== -1){
        return;
      }
      cache.push(post.postid);
      filteredPosts.push(post);
    });

    return filteredPosts
  }

  /**
   * todo: check post source to, not only id
   */
  getPostsToShow(posts, lastShownId, count = 3) {
    let toShow = [];

    const lastShownPosts = posts.filter(post => post.postid === lastShownId);
    let lastShownPost;
    if (lastShownPosts.length) {
      lastShownPost = lastShownPosts[0];
    } else {
      lastShownPost = false;
    }

    if (lastShownId) {
      let addMode = false;
      posts.forEach(post => {
        if (addMode === true && toShow.length < count) {
          toShow.push(post)
        }
        if (!addMode && post.isSame(lastShownPost)) {
          addMode = true;
        }
      });
      // if we start add from the end, let fill from the beginning
      if (toShow.length < count) {
        posts.forEach(post => {
          if (addMode === true && toShow.length < count) {
            toShow.push(post)
          }
        })
      }
    } else {
      toShow = posts.slice(0, count);
    }

    return toShow;
  }

  startPolling() {
    const self = this;
    setTimeout(() => {
      if (!self.isMounted()) { return; } // abandon
      self.poll(); // do it once and then start it up ...
      self._timer = setInterval(self.poll.bind(self), self.props.refreshTimeout);
    }, 1000);
  }

  poll() {
    const self = this;
    axios.get(self.props.srcUrl)
      .then(response => {
        if (self.isMounted()) {
          self.setState(prevState => {
            const newPosts = self.filterPosts(response.data.posts);
            const newPostsToShow = self.getPostsToShow(newPosts, prevState.lastShownId);
            const lastPost = newPostsToShow.slice(-1)[0];
            return {
              posts: newPosts,
              postsToShow: newPostsToShow,
              lastShownId: lastPost ? lastPost.postid : 0
            }
          });
        }
      })
      .catch(response => {
        console.log(response);
      });
  }

  render() {
    return (
      <div className="App">
        < JumboList posts={this.state.postsToShow}/>
      </div>
    );
  }
}

export default App;
