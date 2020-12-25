import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfile from '../assets/img/avatar.png';
import MyProfile from '../assets/img/my-profile.jpeg';

const Chat = (props) => {
  const isQuestion = (props.type === 'question');  // 質問かどうかを判定
  const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';

  return(
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="QuestionIcon" src={NoProfile} />
          ) : (
          <Avatar alt="AnswerIcon" src={MyProfile} />
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">{ props.text }</div>
    </ListItem>
  );
}
export default Chat;