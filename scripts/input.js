function getInputValue(elementId){
    const fildvalue = document.getElementById(elementId);
    const fildvaluestr = fildvalue.value;
    const fildvalueInt = parseFloat(fildvaluestr);

    return fildvalueInt;

}

function setvalue(elementId, val){
    const result = document.getElementById(elementId);
    result.innerText = val;
}