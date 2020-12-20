import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Material UIのスタイルを決定する関数(ここでスタイルをカスタマイズできる)
const useStyles = makeStyles((theme) => ({
  root: {
  },
}));

const Answer = (props) => {
  // const classes = useStyles();
  return(
    <Button variant="contained" onClick={() => props.select(props.content, props.nextId)}>
      { props.content }
    </Button>
  );

}
export default Answer;