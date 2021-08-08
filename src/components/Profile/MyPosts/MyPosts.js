import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  const postsElements = props.posts.map(p => <Post message={p.message}/>);

  const newPostElement = React.createRef();

  const addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    props.updateNewPostText('');
  };

  const changePost = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div className={classes.postCreate}>
        <div>
          <h3>My posts</h3>
          <textarea onChange={changePost} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add Post
          </button>
        </div>
      </div>
      <div className={classes.message}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
