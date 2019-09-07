import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import im3 from '../../image/im3.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <br></br><br></br><br></br>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        
          <Paper className={classes.paper}><img src={im3} height=20 widght=20></img>ชื่อผู้ใช้ที่เคยร่วมทางคนที่ 1 </Paper>
        </Grid>
      </Grid>
    </div>
  );
}


