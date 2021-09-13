import React, { useEffect, useState } from 'react'
import "./order-item-card.css"
import CloseIcon from '@material-ui/icons/Close';
export default function OrderItemCard({ setcounterChange, RemoveOrder, id, name, porstion, image, price }) {
   const [counterValue, setcounterValue] = useState(1);
   const DecrementCounter = () => {
      let i = counterValue - 1;
      if (i == 0)
         i = 1;
      setcounterValue(i);
   }
   const IncrementCounter = () => {
      let i = counterValue + 1;
      setcounterValue(i);
   }
   useEffect(() => {
      let val = { id: id, value: counterValue };
      setcounterChange(val);
   }, [counterValue])
   let img = require(`../../images/${image}`).default
   return (
      <div className="orderitemcard">
         <div className="ordercard-image" style={{ backgroundImage: `url(${img})` }}></div>
         <div className="ordercard-info">
            <h2 className="ordercard-name">{name}</h2>
            <p className="ordercard-portion">{porstion}g</p>
         </div>
         <div class="counter">
            <div className="dec-counter" onClick={DecrementCounter}>-</div>
            <div className="counter-value">{counterValue}</div>
            <div className="inc-counter" onClick={IncrementCounter}>+</div>
         </div>
         <div className="ordercard-price">${price}</div>
         <CloseIcon fontSize="small" className="closeIcon" onClick={() => RemoveOrder(id)}></CloseIcon>
      </div>
   )
}
