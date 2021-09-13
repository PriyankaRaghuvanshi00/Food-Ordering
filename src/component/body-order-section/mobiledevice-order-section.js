import WatchLaterIcon from '@material-ui/icons/WatchLater';
import React from 'react'
import OrderItemCard from "../order-item-card/order-item-card"
import "./body-order-section.css"
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router';
export default function MobileOrderSection({ RemoveOrder,
   setishowMyOrder, order, total,setcounterChange }) {
   let date = new Date().toDateString()
   const history = useHistory();
   return (
      <div className="Modal">
         <div className="mobile myorder-section mobile-myorder-section">
            <CloseIcon className="myorder-closeIcon" onClick={() => { setishowMyOrder(false) }} />
            <div className="myorder-title">
               <h2>My Order</h2>
               <div className="edit-button" onClick={() => { setishowMyOrder(false) }}>Edit</div>
            </div>
            <div className="myorder-body">
               <div className="order-time">
                  <WatchLaterIcon className="time-icon"></WatchLaterIcon>
                  <p>{date}</p>
               </div>
               <div className="order-item">
                  {order.length === 0 ? <p>ORDER SOMETHING!</p> : order.map((item, i) => <OrderItemCard setcounterChange={ setcounterChange} RemoveOrder={RemoveOrder} id={i} name={item.name} price={item.price} porstion={item.current_portion} image={item.image} />)}
               </div>
               <div className="order-total">
                  <div className="total">
                     <h3>Total</h3>
                     <h2>${total.toFixed(2)}</h2>
                  </div>
                  <div className="checkout-button" onClick={() => { order.length === 0 ? alert("Add Something First") : history.push('/checkout') }}>Checkout</div>
               </div>
            </div>
         </div>
      </div>

   );

}
