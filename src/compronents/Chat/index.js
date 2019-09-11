import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles2 = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 150,
  },
}));

export default function TextFieldMargins() {
  const classes = useStyles2();

  return (
    <div className={classes.container}>
      <TextField
        label="สถานที่"
        id="margin-none"
        defaultValue="ต้นทาง"
        className={classes.textField}
      />
    </div>
  );
}