
var $BuyButton = document.getElementsByClassName("buy");
var $request = document.getElementsByClassName("furniture");
$BuyButton.addEventListener("click", handlerButtonBuy);
var cart = 0;
function handlerButtonBuy($request) {
    for(var i = 0; i < $request.length ; i++) {
        var requestValue = $request[i].innerHTML.trim();
        var catalog = {
            Chair: {price: 5000},
            Table: {price: 6000},
            Shelf: {price: 10000},
        };
        for (requestValue in catalog) {
            cart += catalog[requestValue].price;
        }
    }
    var $output = document.createElement("div");
    $output.innerHTML = "Стоимость корзины:" + cart;
}
//
