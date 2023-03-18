const caseSelected = document.querySelector("#select-case");
const inputData = document.querySelector('#data');
const finalResult = document.querySelector("#final");
const btnClear = document.querySelector('.clear');

const mapFunction = new Map();

mapFunction.set("1",celsiusToKelvin);
mapFunction.set("2",celsiusToFahrenheit);
mapFunction.set("3",kelvinToFahrenheit);
mapFunction.set("4",kelvinToCelsius);
mapFunction.set("5",fahrenheitToCelsius);
mapFunction.set("6",fahrenheitToKelvin);

function insertOptions(){
    options.forEach((op) => {
        const option = document.createElement("option");
        option.value = op.numberOption;
        option.innerHTML = op.case;
        caseSelected.appendChild(option);
    })
}

function clearInput(){
    inputData.value = "";
    console.log("fin");
    finalResult.value = "";
}

function celsiusToKelvin(){ return parseFloat(inputData.value) + 273.15; }

function celsiusToFahrenheit() { return ( parseFloat(inputData.value) * 9/5) + 32; }

function kelvinToFahrenheit() { return ((9*(parseFloat(inputData.value) - 273.15) / 5)) + 32; }

function kelvinToCelsius(){ return parseFloat(inputData.value) - 273.15; }

function fahrenheitToCelsius(){ return (5*(parseFloat(inputData.value) - 32) / 9); }

function fahrenheitToKelvin(){ return ((5*(parseFloat(inputData.value) - 32) / 9)) + 273.15; }

function finalResultImplement(){
    const selectedFunction = mapFunction.get(caseSelected.value);
    const inputValue = parseFloat(inputData.value);
    const result = selectedFunction(inputValue);
    finalResult.value = result;
}

function main(){
    insertOptions();
    btnClear.addEventListener("click" , clearInput);
    inputData.addEventListener("input",finalResultImplemet);
}
main();