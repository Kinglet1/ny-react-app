class Post {

  constructor({type, username, userpic, image, text, date, source, postid}) {
    this.type = type;
    this.username = username;
    this.userpic = userpic;
    this.image = image;
    this.text = text;
    this.date = date;
    this.source = source;
    this.postid = postid;
  }

  isSame(post) {
    if (!(post instanceof Post)) {
      console.error(`Data to check if post the same is not an instance of Post`);
      return false;
    }
    if (this.source === post.source && this.postid === post.postid) {
      return true;
    }
    return false;
  }
}

export default Post
