import WatchLaterIcon from '@material-ui/icons/WatchLater';
import React from 'react'
import OrderItemCard from "../order-item-card/order-item-card"
import "./body-order-section.css"
import { useHistory } from 'react-router';
export default function DeskstopOrderSection({ setcounterChange, AddOrder,RemoveOrder,order,total}) {
   let date = new Date().toDateString()
   function drop(e) {
      e.preventDefault();
      var data = e.dataTransfer.getData("text");
      AddOrder(data);
   }
   const history=useHistory();
   function allowDrop(ev) {
      ev.preventDefault();
   }

   return (
      <div className="dekstop myorder-section dekstop-myorder-section">
         <div className="myorder-title">
            <h2>My Order</h2>
            <div className="edit-button">Edit</div>
         </div>
         <div className="myorder-body">
            <div className="order-time">
               <WatchLaterIcon className="time-icon"></WatchLaterIcon>
               <p>{date}</p>
            </div>
            <div className="order-item">
               {order.length === 0 ? <p>ORDER SOMETHING!</p> : order.map((item,i)=> <OrderItemCard setcounterChange={ setcounterChange}  RemoveOrder={RemoveOrder} id={i} name={item.name} price={item.price} porstion={item.current_portion} image={item.image} />)}
            </div>
            <div className="dekstop-dragdrop-box dragdrop-box" onDrop={(e) => drop(e)} onDragOver={(e) => { allowDrop(e) }}> Drag&Drop</div>
            <div className="order-total">
               <div className="total">
                  <h3>Total</h3>
                  <h2>${total.toFixed(2)}</h2>
               </div>
               <div className="checkout-button" onClick={()=>{order.length===0?alert("Add Something First"):history.push("/checkout")}}>Checkout</div>
            </div>
         </div>
      </div>
   )
}
