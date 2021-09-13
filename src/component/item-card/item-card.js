import React from 'react'
import "./item-card.css"
import LocalMallIcon from '@material-ui/icons/LocalMall';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
export default function ItemCard({AddOrder,id, name, image, price, color, rating, portions, currportion }) {
   function drag(ev,id) {
      ev.dataTransfer.setData("text",id);
   }
   let img = require(`../../images/${image}`).default;
   return (
      <div key={id} className="card" style={{ backgroundColor: `${color}` }} draggable="true" onDragStart={(event) => drag(event,id)}>
         <div className="upper-icons">
            <div className="upper-icon-rating">
               <StarRateRoundedIcon className="rating-icon"> </StarRateRoundedIcon>
               <p>{rating}</p>
            </div>
            <div className="upper-icon-right-side">
               <LocalMallIcon fontSize="small" className="add-to-cart-icon" onClick={()=>{AddOrder(id)}} />
               <FavoriteBorderRoundedIcon className="favourite-icon" fontSize="small"></FavoriteBorderRoundedIcon>
            </div>
         </div>
         <div className="image" style={{ backgroundImage: `url(${img})` }}></div>
         <div className="info">
            <div className="info-title">
               <h3 className="info-name">{name}</h3>
               <div className="info-portion" >{currportion + 'g'}</div>
            </div>
            <h4 className="info-price">{'$ ' + price}</h4>
         </div>
      </div >
   )
}
