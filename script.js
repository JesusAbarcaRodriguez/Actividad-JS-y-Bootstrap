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
        option.value = op.no;
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
    console.log(1);
    return parseFloat(inputData.value) + 273.15;
}
// Celsius a Fahrenheit
function celsiusToFahrenheit() {
    console.log(2);
    return ( parseFloat(inputData.value) * 9/5) + 32;
}

  // Fahrenheit a Kelvin
function kelvinToFahrenheit() {
    console.log(3);
    return ((9*(parseFloat(inputData.value) - 273.15) / 5)) + 32; }

function kelvinToCelsius(){
    console.log(4);
    return parseFloat(inputData.value) - 273.15; }
function fahrenheitToCelsius(){
    console.log(5);
    return (5*(parseFloat(inputData.value) - 32) / 9); }
function fahrenheitToKelvin(){
    console.log(6);
    return ((5*(parseFloat(inputData.value) - 32) / 9)) + 273.15; }


function finalResultImplemet(){
   // console.log(caseSelect.value);
    console.log(mymap.get(caseSelect.value));
   // console.log(celsiusToKelvin());
    /*console.log(12);
    finalResult.value = mymap.get(caseSelect.value);*/
}

function main(){
    finalResult.value = 12;
    insertOptions();
   // celsiusToKelvin();
    btnClear.addEventListener("click" , clearInput);
    inputData.addEventListener("input",finalResultImplemet);
    console.log("fin");
}
main();