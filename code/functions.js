function capitalize(str){
    if(typeof str !== 'string')
        throw new Error("Non String Parameter");
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}


function reverseString(str){
    let arr = str.split('');
    arr.reverse();
    return arr.join('');
}

function isNumber(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return false;
    }
    return true;
}

function add(a,b){
    if(!isNumber(a,b)){
        throw new Error("Non Number Input");
    }
    return a + b;
}

function subtract(a,b){
    if(!isNumber(a,b)){
        throw new Error("Non Number Input");
    }
    return a - b;
}

function multiply(a,b){
    if(!isNumber(a,b)){
        throw new Error("Non Number Input");
    }
    return a * b;
}

function divide(a,b){
    if(!isNumber(a,b)){
        throw new Error("Non Number Input");
    }
    if(b == 0){
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

let calculator = {
    add: add,
    subtract:subtract,
    multiply:multiply,
    divide:divide,
}


function analyzeArray(arr){
    if(arr.length == 0)
        throw new Error("Array is Empty");
    let sum = 0;
    let min = Infinity;
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== 'number')
            throw new Error("Non Number")
        sum += arr[i];
        if(min > arr[i])
            min = arr[i];
        if(max < arr[i])
            max = arr[i]
    }
    return{
        min:min,
        max:max,
        average:sum/arr.length,
        length: arr.length,
    }
}

function cipher(text,shift){
    if(!Number.isInteger(shift))
        throw new Error("Non Integer Shift value")
    shift = shift % 26;
    text = text.toLowerCase();
    let newText = "";
    for(let i = 0; i < text.length; i++){
        if(text.charAt(i) >= 'a' && text.charAt(i) <= 'z'){

            let newASCII = (text.charCodeAt(i) + shift);
            if(newASCII > 'z'.charCodeAt(0)){
                newASCII -= 26;
            }
            newText += String.fromCharCode(newASCII);
        }
        else{
            newText += text.charAt(i);
        }
    }
    return newText;
}

module.exports = {
    capitalize : capitalize, 
    reverseString:reverseString,
    calculator: calculator,
    analyzeArray:analyzeArray,
    cipher:cipher,
};