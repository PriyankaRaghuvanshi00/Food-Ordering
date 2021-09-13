import React, { useEffect, useState } from 'react'
import "./body-order-section.css"
import MobileOrderSection from './mobiledevice-order-section';
import DeskstopOrderSection from './dekstop-order-section';
export default function BodyOrderContainer({ AddOrder, order, alreadyContain, setorder, setalreadyContain, total, settotal, ishowMyOrder, setishowMyOrder }) {
   const [counterChange, setcounterChange] = useState({ id: null, value: 1 })
   useEffect(() => {
      const { id, value } = counterChange;
      let temp=[...order];
      if(temp[id])
     { temp[id].quantity = value;
      setorder(temp);
   }
   else
   return;
   }, [counterChange])
   const RemoveOrder = (ind) => {
      let temp = [...order];
      let temp_total = total - order[ind].price;
      let temp_contain = [...alreadyContain];
      let rem = alreadyContain.findIndex((ele) => ele == (order[ind].id - 1));
      temp.splice(ind, 1);
      settotal(temp_total);
      temp_contain.splice(rem, 1);
      setalreadyContain(temp_contain);
      setorder(temp);
   }
   return (
      <React.Fragment>
         <DeskstopOrderSection setcounterChange={setcounterChange} AddOrder={AddOrder} RemoveOrder={RemoveOrder} order={order} alreadyContain={alreadyContain} total={total} setorder={setorder} setalreadyContain={setalreadyContain} settotal={settotal} />
         {ishowMyOrder && <MobileOrderSection setcounterChange={setcounterChange} RemoveOrder={RemoveOrder} setishowMyOrder={setishowMyOrder} order={order} alreadyContain={alreadyContain} total={total} setorder={setorder} setalreadyContain={setalreadyContain} settotal={settotal} />}
      </React.Fragment>
   )
}
