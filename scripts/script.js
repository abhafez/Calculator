var numbersAndSybols = {
    'zero': {
        'dom': document.getElementById('zero'),
        'num': 0
    },
    'one': {
        'dom': document.getElementById('one'),
        'num': 1
    },
    'two': {
        'dom': document.getElementById('two'),
        'num': 2
    },
    'three': {
        'dom': document.getElementById('three'),
        'num': 3
    },
    'four': {
        'dom':document.getElementById('four'),
        'num': 4
    },
    'five': {
        'dom': document.getElementById('five'),
        'num': 5
    },
    'six': {
        'dom': document.getElementById('six'),
        'num': 6
    },
    'seven': {
        'dom': document.getElementById('seven'),
        'num': 7
    },
    'eight': {
        'dom': document.getElementById('eight'),
        'num': 8
    },
    'nine': {
        'dom': document.getElementById('nine'),
        'num': 9
    },
    'period': {
        'dom': document.getElementById('period'),
        'equ': '.'
    },
    'left-brace': {
        'dom': document.getElementById('left-brace'),
        'equ': '('
    },
    'right-brace': {
        'dom': document.getElementById('right-brace'),
        'equ': ')'
    },
    'divide': {
        'dom': document.getElementById('divide'),
        'equ': '/'
    },
    'by': {
        'dom': document.getElementById('by'),
        'equ': '*'
    },
    'minus': {
        'dom': document.getElementById('minus'),
        'equ': '-'
    },
    'plus': {
        'dom': document.getElementById('plus'),
        'equ': '+'
    },
    'clear': {
        'dom': document.getElementById('clear'),
    },
    'equal': {
        'dom': document.getElementById('equal')
    },
};

// Clear and Execute Keys
numbersAndSybols['clear']['dom'].onclick = clearOperation;
numbersAndSybols['equal']['dom'].onclick = calculatIt;


// for (var item in numbersAndSybols) {
//     numbersAndSybols[item]['dom'].onclick = log(item)
// }

function log(event) {
    console.log(numbersAndSybols[item]['num']);
}

function formTheEquation(args) {
    let numberSTR = '';
    // TODO making this function take every click and stores the value
}

function clearOperation() {
    console.log("Clearing");
}

function calculatIt() {
    console.log("Calculating");
}
