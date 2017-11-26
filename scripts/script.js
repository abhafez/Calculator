(function () {

    const operations = {
        1: '+',
        2: '-',
        3: '*',
        4: '/',
        5: '(',
        6: ')'
    }

    var buttons = document.querySelectorAll('.btn');
    console.log(buttons);
    // I need to make something to give value for each key
    // and pass values as arguments to the function doMath

    function doMath(args) {
        for (var i = 0; i < arguments.length; i++) {
                console.log(typeof arguments[i]);
        }
    }

    console.log(doMath(33, '+', 44));

})();
