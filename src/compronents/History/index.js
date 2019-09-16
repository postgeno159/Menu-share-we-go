import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import im3 from '../../image/im3.png'
import TextField from '@material-ui/core/TextField';
import TextFieldMargins from '../Chat/index'
import TextFieldMargins2 from '../Chat/index2'
import geno from '../../image/geno.jpg'
import ing from '../../image/ing.jpg'
import bent from '../../image/bent.jpg'
import nut from '../../image/nut.jpg'



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


export default function FullWidthGrid() {
  const classes = useStyles();

return (
  <React.Fragment>
    <div className={classes.root}>
      <br></br><br></br><br></br>
      <Grid container spacing={6}>
         <Grid item xs={12}>
          <body bgcolor= "dddddd">
           <p>วันที่ (xx/xx/xxxx)</p>
          </body>
          <hr></hr>
          <Paper  className={classes.paper}>
            <img src={geno}  width="70" height='70' align='left' ></img>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>นายอัษฎาวุธ สาครเจริญ</b>
          <br></br>
          <TextFieldMargins></TextFieldMargins>
          <TextFieldMargins2></TextFieldMargins2>
           </Paper>
           <body bgcolor= "dddddd">
           <p>วันที่ (xx/xx/xxxx)</p>
           
          </body>
          <hr >
          </hr>
           <Paper  className={classes.paper}>
             <img src={ing}    width="70" height='70' align='left' ></img>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>นายธนพัฒน์ ทองนุกุล</b>
          <TextFieldMargins></TextFieldMargins>  
          <TextFieldMargins2></TextFieldMargins2>
           </Paper>
           <body bgcolor= "dddddd">
           <p>วันที่ (xx/xx/xxxx)</p>
          </body>

          <hr >
          </hr>
           <Paper  className={classes.paper}>
             <img src={nut}    width="70" height='70' align='left' ></img>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>นายณัฐพงศ์ ช่วยประคอง</b>
          <TextFieldMargins></TextFieldMargins>  
          <TextFieldMargins2></TextFieldMargins2>
           </Paper>
           <body bgcolor= "dddddd">
           <p>วันที่ (xx/xx/xxxx)</p>
          </body>
          
           <hr></hr>
           <Paper  className={classes.paper}><img src={bent}  border="0" width="70" height='70' align='left' border ='1'></img>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>นายเอกรินท์ เพียงดี</b>
          <TextFieldMargins></TextFieldMargins> 
          <TextFieldMargins2></TextFieldMargins2>
           </Paper>
        </Grid>
      </Grid>
      
    </div>
    </React.Fragment>
  );
}


