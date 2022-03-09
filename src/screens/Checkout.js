import React from 'react';
import "./css/Checkout.css";
import {useStateValue} from "../StateProvider";
import CheckoutProduct from '../components/CheckoutProduct';
import Subtotal from "../components/Subtotal";

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className="checkout">
        <div className="checkout_left">
            <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout_title">Your Shopping Basket</h2>
                {/* CHECKOUT PRODUCT */}
                {basket.map((item) => (
                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>
        <div className='checkout_right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout