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



// validate 
function inputVlidate(value1,value2){
    if (isNaN(value1) || isNaN(value2)){
        return false;
    }
    else{
        return true;
    }
}


// setdefault input value 

function setDefaultInput(elementId1, elementId2){
    const elements = document.getElementById(elementId1);
    elements.value = '';
    const elements2 = document.getElementById(elementId2);
    elements2.value = '';
}


function addElemnet(elementId, elementname,header,value){
    const value1 = document.getElementById(elementId);
    const count = value1.childElementCount;
    const value2 = document.createElement(elementname);
    value2.innerHTML = `
    ${count + 1}. ${header} ${value} cm<sup>2</sup>
    `;
    
    value1.appendChild(value2);
}