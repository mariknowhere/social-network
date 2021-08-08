import React from 'react'
import classes from '../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  const path = "/dialogs/" + props.id;

  return (
    <div className={classes.dialogsItems}>
      <div className={classes.dialog}>
        <NavLink to={path} activeClassName={classes.dialogActive}>{props.name} </NavLink>
      </div>
    </div>
  );
};

export default DialogItem;
