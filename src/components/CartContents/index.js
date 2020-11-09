import React from 'react'
import CartContext from 'context/CartContext';
import {CartItem , CartHeader, CartFooter, Footer} from './styles'
import {QuantityAdjuster} from '../QuantityAdjuster';
import {RemoveLineItem} from '../RemoveLineItem'

import {Button} from '../Button';
import {navigate} from '@reach/router';
export function CartContents(){
    const {checkout , updateLineItem} = React.useContext(CartContext);
  
    const handleAdjustQuantity = ({quantity , variantId}) => {
        updateLineItem({quantity,variantId});
   }

    return (
        <section>
            <h1>
                Your cart
            </h1>
            {checkout?.totalPrice !== (0).toFixed(2) && (
            <CartHeader>
                <div>
                    Product
                </div>
                <div>
                    Unit Price
                </div>
                <div>
                    Quantity
                </div>
                <div>
                    Amount
                </div>
            </CartHeader> )}
            {checkout?.lineItems?.map(item => (
                <CartItem key = {item.variant.id} >
               <div>
                    <div>{item.title}</div>
                    <div>{item.variant.title === 'Default Title' ? '' : item.variant.title }</div></div>
                    <div>${item.variant.price}</div>
                    <div> <QuantityAdjuster item={item} onAdjust = {handleAdjustQuantity} /></div>
                    <div>${((item.quantity* item.variant.price).toFixed(2))}</div>
                   <div>
                       <RemoveLineItem lineItemId = {item.id} />
                   </div>
                </CartItem>
        
            ))}
            {checkout?.totalPrice !== (0).toFixed(2) &&(
            <CartFooter>
                <div><strong>Total : </strong></div>
                <div>
 <span>${checkout?.totalPrice}</span>
                </div>
            </CartFooter>  )}
            {!!checkout.lineItems &&
            <h4>
                Your cart is empty
            </h4>
             }
            <Footer>
                <div>
                    <Button onClick={()=> navigate(-1)}>
                        Continue shopping
                    </Button>
                </div>
               
                <div>
                    
                {checkout?.totalPrice !== (0).toFixed(2) && (
                    <Button onClick={()=>{window.location.href = checkout.webUrl}}>
                        checkout
                    </Button>)}
                </div>
            </Footer>
        </section>
    )

}