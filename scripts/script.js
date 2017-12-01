var solution = '',
    lastAnswer = 0,
    equation = '',
    lastEquation = '';
var viewEquation = document.getElementById('equation');
var viewResult = document.getElementById('results');
const DIGITLIMIT = 'Digit Limit Met';
const ERRORMESSAGE = 'Math ERR';
const specialKeys = {
    'clear': {
        'dom': document.getElementById('clear'),
    },
    'equal': {
        'dom': document.getElementById('equal')
    },
};

// Clear and Execute Keys
specialKeys.clear.dom.onclick = ClearOperation;
specialKeys.equal.dom.onclick = CalculatIt;

var elements = document.querySelectorAll('div.btn');

// Building the eventListener
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", mouseClick(i));
}

function mouseClick(element) {
    return function () {
        BuildingEquation(elements[element].innerHTML);
    };
} // end of the eventListener

function BuildingEquation(digit) {
    // Next if condition to use last answer and make new operation.
    if (Number(digit) || digit === '.' || digit === '0') {
        equation += digit;
    } else {
        equation += digit;
    }
    if (checkEquation(equation)) {
        equation = 'Digit Limit Met';
    };
    viewEquation.innerText = equation;
    viewResult.innerText = equation;
}

function ClearOperation() {
    // To restart steady state. assign empty string.
    equation = '';
    viewResult.innerText = '0';
    viewEquation.innerText = '0';
    lastAnswer = 0;
}

function CalculatIt() {
    // To view last answer if user presses equal before inserting new calculation.

    try {
        lastAnswer = eval(equation);
        viewResult.innerText = lastAnswer;
    } catch (SyntaxError) { // Eval error view ERROR message
        (function () {
            viewResult.innerText = ERRORMESSAGE;
        })();
    }
    // Viewing full equation
    viewEquation.innerText = equation + '=' + lastAnswer;
    equation = '';

}

function checkEquation(equation) {
    if (viewResult.innerText.length > 9 || viewEquation.innerText.length > 241) {
        return true;
    }
}