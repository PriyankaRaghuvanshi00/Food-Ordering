import { useEffect, useState } from 'react';
import { Route,Switch } from 'react-router';
import './App.css';
import Body from './component/body/body';
import Checkout from './component/checkout/checkout';
import Header from './component/header/header';
import {menu} from "./static-data/static-data"

function App() {
  const [order, setorder] = useState([])
  const [alreadyContain, setalreadyContain] = useState([])
  const [total, settotal] = useState(0)
  const [ishowMyOrder, setishowMyOrder] = useState(false); //only for mobile device
  
  useEffect(() => {
      let temp = 0;
      console.log(alreadyContain,"ss");
      alreadyContain.forEach(element => {
         let elem=parseInt(element);
         temp = temp +(menu[elem].price*menu[elem].quantity);
      });
      settotal(temp)
   }, [order, alreadyContain])

  return (
    <div className="app">
      <Header ishowMyOrder={ishowMyOrder} setishowMyOrder={setishowMyOrder}></Header>
      <Switch>
      <Route path="/checkout" exact render={()=><Checkout order={order} total={total}/>}></Route>
        <Route path="/" render={() => <Body total={total} settotal={settotal} alreadyContain={alreadyContain} setalreadyContain={setalreadyContain} setorder={setorder} order={order} ishowMyOrder={ishowMyOrder} setishowMyOrder={setishowMyOrder}></Body>} />
      </Switch>
    </div>
  );
}

export default App;
