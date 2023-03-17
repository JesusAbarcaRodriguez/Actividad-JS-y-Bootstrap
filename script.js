const formulasSelect = document.querySelector("#formulas");

function optionsFormula() {
    options.forEach((optionVec) => {
    const option = document.createElement("option");
    option.value = optionVec.code;
    option.innerHTML = optionVec.name;
    formulasSelect.appendChild(option);
    });
}
function main(){
    optionsFormula();
}
main();