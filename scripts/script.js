var equation = '';
const ERRORMESSAGE = "EsRR";
var viewResult = document.getElementById('results');
var specialKeys = {
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
    if (i === 3 || i === 18) continue; // Clear and equal
    else elements[i].addEventListener("click", BindClick(i));
}

function BindClick(element) {
    return function(){
        BuildingEquation(elements[element].innerHTML);
    };
} // end of the eventListener

function BuildingEquation(digit) {
    equation += digit;
    console.log(equation);
}

function ClearOperation() {
    console.log("Clearing");
    // To restart steady state. assign empty string.
    equation = '';
    viewResult.innerHTML = '0';

}

function CalculatIt() {
    console.log("Calculating");
    try {
        viewResult.innerHTML = eval(equation);
    } catch (SyntaxError) {
        (function(){
            viewResult.innerHTML = ERRORMESSAGE;
        })();
        throw ERRORMESSAGE;
    }
    equation = '';    
}
