import React from 'react'
import ItemCard from '../item-card/item-card'
import "./menu-item-container.css"
import { menu } from '../../static-data/static-data'
export default function MenuItemContainer({AddOrder}) {
   return (
      <div className="menu-items">
         {menu.map((item,i) => <ItemCard id={i} AddOrder={AddOrder} color={item.color} name={item.name} image={item.image} price={item.price} rating={item.rating} portions={item.available_portions} currportion={item.current_portion} ></ItemCard>)}
      </div>
   )
}
