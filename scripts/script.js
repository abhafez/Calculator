(function () {

    var equation = '';
    // Getting IDs of the buttons from the DOM
    var ids = [];
    var buttons = document.querySelectorAll('.btn');
    buttons.forEach(function (element) {
        ids.push(element["id"]);
    });
    // console.log(ids);
    /** ids
    0: "left-brace"
    1: "right-brace"
    2: "divide"
    3: "clear"
    4: "num7"
    5: "num8"
    6: "num9"
    7: "by"
    8: "num4"
    9: "num5"
    10: "num6"
    11: "minus"
    12: "num1"
    13: "num2"
    14: "num3"
    15: "plus"
    16: "num1"
    17: "period"
    18: "equal"
    **/

    // assigning id to value
    var numbersAndSybols = {
        'num1': '1',
        'num2': '2',
        'num3': '3',
        'num4': '4',
        'num5': '5',
        'num6': '6',
        'num7': '7',
        'num8': '8',
        'num9': '9',
        'period': '.',
        'left-brace': '(',
        'right-brace': ')',
        'divide': '/',
        'by': '*',
        'minus': '-',
        'plus': '+',
        'clear' : function(){ /** TODO the clear function */},
    }

    function formTheEquation(args) {
        let numberSTR = '';

    }
    // I need to make something to give value for each key
    // and pass values as arguments to the function doMath

    function doMath(args) {

    }

    // console.log(doMath(33, '+', 44));

})();
