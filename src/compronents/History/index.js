import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import im3 from '../../image/im3.png'
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'top conner',
    color: theme.palette.text.secondary,
  },
}));

// const useStyles2 = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 150,
//   },
// }));

export default function FullWidthGrid() {
  const classes = useStyles();
  
// export default function TextFieldMargins() {
//     const classes = useStyles2();

// return (
//       <div className={classes.container}>
//         <TextField
//           label="สถานที่"
//           id="margin-none"
//           defaultValue="ต้นทาง"
//           className={classes.textField}
//         />
//       </div>
//     );
//   }

return (
    <div className={classes.root}>
      <br></br><br></br><br></br>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <hr></hr>
          <Paper  className={classes.paper}><img src={im3} border="1" width="55" height='55' ></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>ชื่อผู้ใช้ที่เคยร่วมทางคนที่ 1</b>
          <br></br>genodsvdsvdsv
           </Paper>
           <br></br>
           <hr></hr>
           <Paper  className={classes.paper}><img src={im3} border="1" width="55" height='55' ></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>ชื่อผู้ใช้ที่เคยร่วมทางคนที่ 2</b>
          <br></br>genodsvdsvdsv
           </Paper>
           <br></br>
           <hr></hr>
           <Paper  className={classes.paper}><img src={im3} border="1" width="55" height='55' ></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>ชื่อผู้ใช้ที่เคยร่วมทางคนที่ 3</b>
          <br></br>genodsvdsvdsv
           </Paper>
        </Grid>
      </Grid>
      
    </div>
  );
}


