const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//1.Using functions, calculate the total price by multiplying the price per refill and number of refills
//2.For patients with subscriptions, they get 25% discount 
//3.For patietns with coupons, they get $10 discount
//4.Using console.log, print out the message at the end

//this is calculating the cost per person (timmy)

// function timmyRefillTotal (PricePerRefill, Refills){
//     return PricePerRefill*Refills;
// }
//     const timmyTotalCost = timmyRefillTotal (timmy.pricePerRefill, timmy.refills)
//     console.log (timmyTotalCost)

// function discountSubscription (TotalCost){
//     if (timmy['subscription']===true){
//         return TotalCost - (TotalCost*0.25);
//     } else if (timmy['subscription']===false){
//         return TotalCost;
//     }}
//     const TotalDiscount = discountSubscription (timmyTotalCost)
//     console.log (TotalDiscount)


// function couponDiscount (TotalDiscount){
//     if (timmy.coupon===true){
//         return TotalDiscount-10;
//     } else if (timmy.coupon===false){
//         return TotalDiscount
//     }   

// }
//     const finalCost = couponDiscount (TotalDiscount)
//     console.log (finalCost)

// console.log ("Your grand total is $"+finalCost)

//this is calculating all three people at once

const patient=[timmy,sarah,rocky]

const refillsCal = (patient)=>{return patient.pricePerRefill*patient.refills};

const subscriptionCal = (patient) => {
    const totalPrices = refillsCal(patient);
    return patient.subscription===true?totalPrices-totalPrices*0.25:totalPrices
    }

const discountCal = (patient)=>{
    const finalPrices=subscriptionCal(patient);
    return patient.coupon===true?finalPrices-10:finalPrices;
}

const finalPricesTimmy=discountCal(timmy)
const finalPricesSarah=discountCal(sarah)
const finalPricesRocky=discountCal(rocky)

console.log("Your grand total is $"+finalPricesTimmy)
console.log("Your grand total is $"+finalPricesSarah)
console.log("Your grand total is $"+finalPricesRocky)