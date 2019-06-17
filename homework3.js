function cycle() {
    var i = 0;
    var result = " ";
    while(i <= 100) {
        result +=  i + " ";
        ++i;
    }
    alert(result);
}

var cart = [ ["socks", 100, 1], ["shoes", 2000, 1], ["hats", 3500, 3] ];
var bill = 0;
function priceCount() {
    for(var i = 0; i <= cart.length; i++) {
        var price = cart[i][1];
        var number = cart[i][2];
        bill += price * number;

    }
    alert(bill);
}

function heops() {
    var x = "x"
    for(var i = 0; i < 20; i++) {
        console.log(x)
        x += "x"
    }
}
