import React from 'react'
import {QuantityAdjusterWrapper , AdjusterButton} from './styles';
export function QuantityAdjuster({item, onAdjust}){
const handleDecrementQuantity = () =>{
    onAdjust({variantId : item.variant.id , quantity: -1});
}

const handleIncrementQuantity = () =>{
    onAdjust({variantId : item.variant.id , quantity: +1});
}
    const {quantity} = item;
    return (<QuantityAdjusterWrapper>
        <AdjusterButton onClick={handleDecrementQuantity}>-</AdjusterButton>
<div> {quantity} </div>
<AdjusterButton onClick={handleIncrementQuantity}>+</AdjusterButton>
    </QuantityAdjusterWrapper>)
}
