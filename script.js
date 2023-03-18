const caseSelect = document.querySelector("#select-case");
const inputData = document.querySelector('#data');
const finalResult = document.querySelector("#final");
const btnClear = document.querySelector('.clear');

const mymap = new Map();

mymap.set("1",celsiusToKelvin());
mymap.set("2",celsiusToFahrenheit());
mymap.set("3",kelvinToFahrenheit());
mymap.set("4",kelvinToCelsius());
mymap.set("5",fahrenheitToCelsius());
mymap.set("6",fahrenheitToKelvin());

function insertOptions(){
    options.forEach((op) => {
        const option = document.createElement("option");
        option.value = op.case;
        option.innerHTML = op.case;
        caseSelect.appendChild(option);
    })
}

function clearInput(){
    inputData.value = "";
    console.log("fin");
    finalResult.value = "";
}

// Celsius a kelvin
function celsiusToKelvin(){
    return parseFloat(inputData.value) + 273.15;
}
// Celsius a Fahrenheit
function celsiusToFahrenheit() {
    return ( parseFloat(inputData.value) * 9/5) + 32;
}

  // Fahrenheit a Kelvin
function kelvinToFahrenheit() {((9*(parseFloat(inputData.value) - 273.15) / 5)) + 32; }

function kelvinToCelsius(){ return parseFloat(inputData.value) - 273.15; }
function fahrenheitToCelsius(){ return (5*(parseFloat(inputData.value) - 32) / 9); }
function fahrenheitToKelvin(){ return ((5*(parseFloat(inputData.value) - 32) / 9)) + 273.15; }

function main(){
    insertOptions();
    celsiusToKelvin();
    btnClear.addEventListener("click" , clearInput);
    console.log("fin");
}
main();