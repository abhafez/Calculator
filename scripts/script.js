(function () {
    var num = '',
        opSybol = '',
        lastAnswer = 0,
        equation = '',
        viewEquation = document.getElementById('equation'),
        viewResult = document.getElementById('results');
    const   DIGITLIMIT = 'Digit Limit Met',
            ERRORMESSAGE = 'Math ERR',
            CLEAR = document.getElementById('clear'),
            EQUAL = document.getElementById('equal'),
            elements = document.querySelectorAll('div.btn');
    // Clear and Execute Keys
    CLEAR.onclick = ClearSum;
    EQUAL.onclick = CalculatIt;


    // Building the eventListener
    (function listenToMouseClicks() {
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", mouseClick(i));
        }

        function mouseClick(element) {
            return function () {
                BuildingEquation(elements[element].innerHTML);
            };
        }
    })();


    function BuildingEquation(inp) {
        // Next if condition to use last answer and make new operation.
        if (Number(inp) || inp === '.' || inp === '0') {
            num += inp;
            if (checkAnswer(num)) { 
                viewResult.innerText = DIGITLIMIT;
                equation = '';
            } else {
                viewResult.innerText = num;
            }
        } else {
            opSybol = inp;
            viewResult.innerText = opSybol;
            num = '';
        }
        equation += inp;
        viewEquation.innerText = equation;
    }


    function CalculatIt() {
        try {
            lastAnswer = eval(equation);
            num = '';
            checkAnswer(String(lastAnswer)) ? 
            viewResult.innerText = DIGITLIMIT : viewResult.innerText = lastAnswer;
        } catch (SyntaxError) { // Eval error view ERROR message
            (function () {
                viewResult.innerText = ERRORMESSAGE;
                num = '';
            })();
        }
        // Viewing full equation
        let fullEquation = equation + '=' + lastAnswer;
        checkEquation(fullEquation) ?
        viewResult.innerText = DIGITLIMIT : viewEquation.innerText = fullEquation
        equation = '';
    }


    function ClearSum() {
        // To restart steady state. assign empty string.
        equation = '';
        viewResult.innerText = '0';
        viewEquation.innerText = '0';
        lastAnswer = 0;
    }

    function checkAnswer(ans) {
        if (ans.length > 10) return true;
    }

    function checkEquation(equ) {
        if (equ.length > 23) return true;
    }
})();