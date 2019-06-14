function task3() {
    var a = parseInt(+prompt("Введите число"));
    var b = parseInt(+prompt("Введите число"));
    if (a >= 0 && b >= 0) {
        var result = a - b;
    } else if (a < 0 && b < 0) {
        var result = a * b;
    } else {
        var result = a + b;
    }

    alert(result);
}

var result;

function plus(a, b) {
    result = a + b;
    return result;
}

function minus() {
    result = a - b;
    return result;
}

function multiply() {
    result = a * b;
    return result;
}

function division() {
    result = a / b;
    return result;
}

function values() {
    var a = parseInt(+prompt("Number?"));
    var b = parseInt(+prompt("Number?"));
    plus(a, b);
    alert(result);
}

function Switch() {
    var a = parseInt(+prompt("Number?"));
    switch (a) {
        case 1:
            alert("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15");
            break;
        case 2:
            alert("2,3,4,5,6,7,8,9,10,11,12,13,14,15");
            break;
        case 3:
            alert("3,4,5,6,7,8,9,10,11,12,13,14,15");
            break;
        case 4:
            alert("4,5,6,7,8,9,10,11,12,13,14,15");
            break;
        case 5:
            alert("5,6,7,8,9,10,11,12,13,14,15");
            break;
        case 6:
            alert("6,7,8,9,10,11,12,13,14,15");
            break;
        case 7:
            alert("7,8,9,10,11,12,13,14,15");
            break;
        case 8:
            alert("8,9,10,11,12,13,14,15");
            break;
        case 9:
            alert("9,10,11,12,13,14,15");
            break;
        case 10:
            alert("10,11,12,13,14,15");
            break;
        case 11:
            alert("11,12,13,14,15");
            break;
        case 12:
            alert("12,13,14,15");
            break;
        case 13:
            alert("13,14,15");
            break;
        case 14:
            alert("14,15");
            break;
        case 15:
            alert("15");
            break;
        default:
            alert("Вы ввели неподходящее число");
    }
}
