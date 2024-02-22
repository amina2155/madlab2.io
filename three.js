window.onload = function() {
    setTimeout(function() {
        document.getElementById('background').style.opacity = 1;
    }, 1000);

    setTimeout(function() {
        document.getElementById('title').style.opacity = 1;
    }, 2000);

    setTimeout(function() {
        document.getElementById('title').style.display = 'none';
        document.getElementById('inputBox').style.display = 'block';
    }, 5000);
};




//Function for task 1
function checkNumbers() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultElement = document.getElementById('result');

    let num1Value = parseFloat(num1);
    let num2Value = parseFloat(num2);
    
    if(num1Value < 0 && num2Value > 0){
        console.log("1st number is negative and 2nd number is positive");
        OutputString = "1st number is negative and 2nd number is positive";
    } else if(num2Value < 0 && num1Value > 0){
        console.log("1st number is positive and 2nd number is negative");
        OutputString = "1st number is positive and 2nd number is negative";
    } else if(num2Value < 0 && num1Value < 0){
        console.log("Both numbers are negative");
        OutputString = "Both numbers are negative";
    } else if(num2Value > 0 && num1Value > 0){
        console.log("Both numbers are positive");
        OutputString = "Both numbers are positive";
    } 
    else if(num1Value == 0 || num2Value == 0){
        OutputString = "Zero is not allowed";
    }

    resultElement.textContent = OutputString;
    resultElement.style.color = "green";

    document.getElementById('task2Go').style.display = 'block';

}

function changeToTask2() {
    document.getElementById('inputBox').style.display = 'none';
    document.getElementById('stringInput').style.display = 'block';
}


//Function for task 2
function reverseThis() {

    let resultElement = document.getElementById('result2');
    let myString = document.getElementById('string2').value;

    let myEmptyString = ""

    for(let index = myString.length - 1 ; index >= 0 ; index--){
        myEmptyString += myString[index]
    }

    console.log(myEmptyString);
    resultElement.textContent = myEmptyString;
    resultElement.style.color = "green";


    document.getElementById('task3Go').style.display = 'block';
}

function changeToTask3() {
    document.getElementById('stringInput').style.display = 'none';
    document.getElementById('arrayInput').style.display = 'block';
}


//Function for task 3
function removeOddIntegers() {
    let inputArray = document.getElementById('array').value;

    let myArray = inputArray.split(',').map(Number);

    const myResultArray = myArray.filter(checkEven);

    function checkEven(number) {
        return (number % 2 == 0);
    }

    console.log(myResultArray);

    document.getElementById('result3').textContent = "Result: " + myResultArray.join(', ');
    document.getElementById('result3').style.color = "green";

    document.getElementById('task4Go').style.display = 'block';


}

function changeToTask4() {
    document.getElementById('arrayInput').style.display = 'none';
    document.getElementById('arrayInput4').style.display = 'block';
}


//Function for task 4
function findAreas() {

    let inputArray = document.getElementById('array4').value;

    let arrayOfMeasurements = inputArray.split(',').map(Number);
    const arrayOfArea = arrayOfMeasurements.map(AreaOfSquare)

    function AreaOfSquare(singleSide){
        return singleSide * singleSide;
    }

    console.log(arrayOfArea);

    document.getElementById('result4').textContent = "Areas: " + arrayOfArea.join(', ');
    document.getElementById('result4').style.color = "green";


    document.getElementById('task5Go').style.display = 'block';

}

function changeToTask5() {
    document.getElementById('arrayInput4').style.display = 'none';
    document.getElementById('tryCatch').style.display = 'block';
}


//Function for task 5
function showResult() {
    let num = parseInt(document.getElementById('numerator').value);
    let denom = parseInt(document.getElementById('denominator').value);
    let resultElement = document.getElementById('result5');

    try {
        if (denom == 0) {
            throw new Error("Division by zero");
        } else {
            resultElement.textContent = "Result : " + num/denom;
            resultElement.style.color = "green";
            console.log(num/denom);
        }
        } catch (e) {
            resultElement.textContent = e.message;
            resultElement.style.color = "red";
            console.log(e.message);
        }
}