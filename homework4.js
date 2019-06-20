function objectNumber() {
    var number = prompt("Введите число от 0 до 999", '');
    var sum = "";
    if (number.length > 3) {
        console.log("недопустимое значение");
        return sum = null;
    } else if (number.length < 3 && number.length > 1) {
        var numberTens = number[0];
        var numberOnes = number[1];
        var numberHundreds = "";
    } else if (number.length < 2 && number.length > 0) {
        var numberOnes = number[0];
        numberTens = "";
        numberHundreds = "";
    } else if (number.length === 3) {
        numberHundreds = number[0];
        numberTens = number[1];
        numberOnes = number[2];
    }
    var object = {
        hundreds: numberHundreds,
        tens: numberTens,
        ones: numberOnes,
    };
    sum = (object.hundreds + object.tens + object.ones);
    console.log(sum);
}

// function cartPrice() {
//    var sum = 0;
//    var cart = {
//       Short:{price:500, size:"XL"},
//       Jeans:{ price:5000, size:"XL"},
//       Sweater: { price:3000, size:"XL"},
//    };
//   for(item in cart){
//           sum += cart.item.price;
//
//   }
//   alert(sum);
// }
function cartPrice() {
    var sum = 0;
    var cart = {
        Short: {price: 500, size: "XL"},
        Jeans: {price: 5000, size: "XL"},
        Sweater: {price: 3000, size: "XL"},
    };
    sum = cart.Short.price + cart.Jeans.price + cart.Sweater.price;
    alert(sum);
}