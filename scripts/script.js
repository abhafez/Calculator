(function () {
    var num = '',
        opSybol = '',
        lastAnswer = 0,
        equation = '',
        displayEquation = document.getElementById('equation'),
        displayResult = document.getElementById('results');
    const   DIGITLIMIT = 'Digit Limit Met',
            ERRORMESSAGE = 'Math ERR',
            CLEAR = document.getElementById('clear'),
            EQUAL = document.getElementById('equal'),
            elements = document.querySelectorAll('div.btn');
    
    // Clear and Execute Keys
    CLEAR.onclick = ClearSum;
    EQUAL.onclick = CalculateIt;

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
            if (checkAnswerLength(num)) { 
                num = '';
                displayResult.innerText = DIGITLIMIT;
                displayEquation.innerText = DIGITLIMIT;
                lastAnswer = '';
                equation ='';  
                inp = '';
            } else {
                displayResult.innerText = num;
            }
        } else {
            opSybol = inp;
            displayResult.innerText = opSybol;
            num = '';
        }
        equation += inp;
        displayEquation.innerText = equation;
    }

    function CalculateIt() {
        try {
            lastAnswer = eval(equation);
            num = '';
            displayResult.innerText = checkAnswerLength(String(lastAnswer)) ? DIGITLIMIT : lastAnswer;
        } catch (SyntaxError) { // Eval error view ERROR message
            (function () {
                displayResult.innerText = ERRORMESSAGE;
                num = '';
            })();
        }
        if(lastAnswer === undefined){
            displayResult.innerText = "No Input!"
            displayEquation.innerHTML = "Make some equation"
        }
        displayEquation.innerText = checkEquation(fullEquation) ? DIGITLIMIT : fullEquation;
        // Viewing full equation
        let fullEquation = equation + '=' + lastAnswer;
        fullEquation = ''; 
        equation = '';
        lastAnswer = 'ERR';
    }


    function ClearSum() {
        // To restart steady state. assign empty string.
        equation = '';
        inp = '';
        displayResult.innerText = '0';
        displayEquation.innerText = '0';
        lastAnswer = 0;
    }

    function checkAnswerLength(ans) {
        if (ans.length > 9) return true;
    }

    function checkEquation(equ) {
        if (equ.length > 23) return true;
    }
})();