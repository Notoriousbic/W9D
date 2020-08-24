
// question 1
function sum(number1,number2){
    var addNumber = (number1 + number2) * 5;
    return addNumber;
}

var number1 = 10;
var number2 = 20;
console.log(sum(number1,number2));

// question 2

function condition(stringLength) {
   if (stringLength.length >= 10) {
        return true;
    }

    else {
        return false;
    }
} 

// question3

var stringLength = "Glad you dodged the falling desk Alex!";
condition (stringLength);
console.log (stringLength);

console.log (func3(['phil', 'john', 'ryan']));


function func3(array) {
    for (var i=0; i<array.length;i++) {
        if (array[i].startsWith ("ph"))
        return array[i];
    }
       
   
}
