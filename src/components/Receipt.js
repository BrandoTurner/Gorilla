import { useState } from 'react';


// function checkPayment(){
//     setSatisfied((bill) => (bill ? 'satisfied' : 'notSatisfied'))
// }

function Receipt (prop){
    const person = prop.person
    const main = prop.order.main
    const protein = prop.order.protein
    const rice = prop.order.rice
    const sauce = prop.order.sauce
    const drink = prop.order.drink
    const cost = prop.order.cost
    

    
    return (
    <div>
        <div className="receiptCard">
            <h1>Receipts!</h1>
            <p> Person: {person}</p>
            <p> Main: {main}</p>
            <p> Protein: {protein}</p>
            <p> Rice: {rice}</p>
            <p> Sauce: {sauce}</p>
            <p> Drink: {drink}</p>
            <p> Cost: {cost}</p>
        </div>
        
    </div>
    )
};

export default Receipt;