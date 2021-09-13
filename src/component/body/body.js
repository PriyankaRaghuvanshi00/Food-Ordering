import React  from 'react'
import "./body.css"
import FilterListIcon from '@material-ui/icons/FilterList';
import MenuItemContainer from '../menu-item-container/menu-item-container';
import BodyOrderContainer from '../body-order-section/body-order-section';
import {menu} from "../../static-data/static-data"
export default function Body({order,setorder,alreadyContain,settotal,setalreadyContain,total ,ishowMyOrder, setishowMyOrder }) {
   const AddOrder=(data)=>{
      let arr = [...order];
      let temp = [...alreadyContain];
      let isContain = alreadyContain.findIndex(i => {
         if (i == data)
            return true;
      });
      if (isContain === -1) {
         temp.push(data);
         setalreadyContain(temp)
         arr.push(menu[data])
         setorder(arr);
      }
      else {
         alert("Already Added!")
      }
   }
   return (
      <div className="parent-body">
         <div className="body-upper">
            <div className="filter"><FilterListIcon fontSize="small" /><h3>Filter</h3></div>
            <div className="sort">Sorted by:<span>Recommended</span></div>
         </div>
         <div className="body">
            <MenuItemContainer  AddOrder={AddOrder}  />
               <BodyOrderContainer  AddOrder={AddOrder} order={order} alreadyContain={alreadyContain} setorder={setorder} setalreadyContain={ setalreadyContain} total={total } settotal={settotal}  ishowMyOrder={ishowMyOrder} setishowMyOrder={setishowMyOrder} />
         </div>
      </div>
   )
}
