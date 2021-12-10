// import {Outlet} from 'react-router-dom';
import classes from './DontStarve.module.css';
import Games from '../Games';
import React from 'react';

function DontStarve() {
   return (
      <div className={classes.centred}>
         <Games />
      </div>
   );
}

export default DontStarve;
