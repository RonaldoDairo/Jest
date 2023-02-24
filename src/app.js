//CADA FUNTCION ESTA ANUMERADA Y
//FUNCIONAN SI LO TESTEAS
// UNO POR UNO!!1
//1
/*const suma =(a,b)=>{
    return a + b
}
console.log(suma(7,3));
module.exports = { suma };*/
/*
//2
const fromEuroToDollar=(euro_amount)=>{
    dollar_amount = euro_amount * 1.2  
    return dollar_amount
}
console.log(fromEuroToDollar(3.5))

module.exports={ fromEuroToDollar };
*/
//3
/*const fromDollarToYen=(dollar_amount)=>{
    yen_amount = dollar_amount * 105.21  
    return yen_amount
}
console.log(fromDollarToYen(5))
module.exports={ fromDollarToYen };*/
//4

const fromYenToPound=(yen_amount)=>{
    pound_amount = yen_amount * 0.0067  
    return pound_amount
}
module.exports={ fromYenToPound };
console.log(fromYenToPound(200));