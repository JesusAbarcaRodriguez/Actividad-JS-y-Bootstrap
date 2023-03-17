const caseSelect = document.querySelector("#select-case");
const inputData = document.querySelector('#data');
const finalResult = document.querySelector("#final");
const btnClear = document.querySelector('.clear');

const mymap = new Map();

mymap.set("1",celsiusToKelvin());
mymap.set("2",celsiusToKelvin());
mymap.set("3",celsiusToKelvin());
mymap.set("4",celsiusToKelvin());
mymap.set("5",celsiusToKelvin());
mymap.set("6",celsiusToKelvin());


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



function celsiusToKelvin(){
    console.log( typeof(parseFloat(inputData.value) ));
    console.log( parseFloat(inputData.value) + 273.15);
    return parseFloat(inputData.value) + 273.15;
}


function main(){
    insertOptions();
    celsiusToKelvin();
    btnClear.addEventListener("click" , clearInput);
    console.log("fin");
}
main();