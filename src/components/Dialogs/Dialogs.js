import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
  const messagesElements = props.state.message.map(m => <Message message={m.message}/>);

  const newElement = React.createRef();

  const addPost = () => {
    let text = newElement.current.value;
    alert(text);
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
        <textarea ref={newElement}/>
        <div>
          <button onClick={addPost}> Send</button>
        </div>

      </div>

    </div>
  );
};

export default Dialogs;
