import React from 'react'
import "./checkout.css";
export default function Checkout({ order, total }) {
   console.log(order, "checkout");
   const orders = [order.map(elem => {
      let img = require(`../../images/${elem.image}`).default;
      return (
         <div key={elem.id} className="card" style={{ backgroundColor: `${elem.color}` }} >
         <div className="quatity">+{elem.quantity}</div>
         <div className="image" style={{ backgroundImage: `url(${img})` }}></div>
         <div className="info">
            <div className="info-title">
               <h3 className="info-name">{elem.name}</h3>
               <div className="info-portion" >{elem.current_portion + 'g'}</div>
            </div>
            <h4 className="info-price">{'$ ' + elem.price}</h4>
         </div>
      </div >
      )
   })];
   console.log(orders);
   return (
      <div className="checkout">
         <h2>Your Orders</h2>
         <div className="checkout-body">
            {orders}
         </div>
         <div className="checkout-total">Total: $ {total.toFixed(2)}</div>
      </div>
   )
}
