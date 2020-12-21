import React from 'react';
import {Chat} from './index';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles(() =>
  createStyles({
    "chats": {
      height: 400,
      padding: "0",
      overflow: "auto",  //400xpを超えたときに自動でスクロールバーを出現させる
    }
  }),
);

const Chats = (props) => {
  const classes = useStyles();

  return(
    <List className={classes.chats}>
      {props.chats.map((chat, index) => {
        return <Chat text={chat.text} type={chat.type} key={index.toString()} />
      })}
    </List>
  );
}
export default Chats;