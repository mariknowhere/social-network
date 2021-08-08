let store = {
  _state: {
    profilePage: {
      posts: [
        { id: '1', message: 'Hello!' },
        { id: '2', message: 'Do you suck my dick?' },
        { id: '3', message: 'I fuck your sister!' },
      ],
      newPostText: 'Mark',
    },
    dialogPage: {
      message: [
        { id: 1, message: 'Yo!' },
        { id: 2, message: 'Oh you really gay?' },
        { id: 3, message: 'Oh really!' },
      ],
      dialogs: [
        { id: 1, name: 'Mark' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Angelina' },
        { id: 4, name: 'Ilya' },
        { id: 5, name: 'Daniel' },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state!');
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(postText) {
    this._state.profilePage.newPostText = postText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
