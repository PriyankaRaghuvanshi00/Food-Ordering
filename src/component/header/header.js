import React from 'react'
import "./header.css"
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import { useHistory } from 'react-router';
export default function Header({ ishowMyOrder, setishowMyOrder }) {
   const clickHandler = () => {
      let temp = ishowMyOrder;
      setishowMyOrder(!temp);
   }
   const history=useHistory();
   return (
      <header>
         <ul>
            <li className="header-option" onClick={()=>{history.push('/')}}><MenuBookRoundedIcon /><h3>Menu</h3></li>
            <li className="header-option mobile-side-only" onClick={() => clickHandler("mobile-side-only")}><LocalMallIcon fontSize="small" /><h3>Orders</h3></li>
         </ul>
      </header>
   )
}
