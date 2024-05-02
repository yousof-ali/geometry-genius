function triangleArea(){
    // get base 
    const basefield = getInputValue("tb");

    // get height
    const heightField  = getInputValue("th");
    const validate = inputVlidate(basefield,heightField);

    if(validate){
        const result = 0.5 * basefield * heightField;

        setvalue("tri-result",result);    
    }
    else{
        alert("input will be number");
        setvalue("tri-result",0);
        setDefaultInput("tb","th");
    }

   
};

function rectangleArea(){
    // get width 
    const rectwidth  = getInputValue("rectW");

    const rectlength = getInputValue("rectL");

    const validate = inputVlidate(rectwidth,rectlength);
    if (validate){
        const result = rectwidth * rectlength;

        setvalue("rect-result",result);
    }
    else{
        alert("input will be a number")
        setvalue("rect-result",0);
        setDefaultInput("rectW","rectL");
    }

    

}

function paraArea(){
    // get base 
    const paraBase = getInputValue("paraB");
    // get height 
    const paraHeight = getInputValue("paraH");
    const validate = inputVlidate(paraBase,paraHeight);
    // area 
    if(validate){
        const result  = paraBase * paraHeight;

        // set 
        setvalue("para-result",result);
    }
    else{
        alert("input will be number");
        setvalue("para-result",0);
        setDefaultInput("paraB","paraH");
    }
    
}


function rhomArea(){
    const rhomD1 = getInputValue("rhomD1");
    const rhomD2 = getInputValue("rhomD2");
    
    const validate = inputVlidate(rhomD1,rhomD2);
    
    if(validate){
        const result = 0.5 * rhomD1 * rhomD2;

    setvalue("rhom-result",result);
    }
    else{
        alert("input will be a number");
        setvalue("rhom-result",0);
        setDefaultInput("rhomD1","rhomD2");

    }
}

function pentaArea(){
    const pentaP = getInputValue("pentaP");
    const pentaBase = getInputValue("pentaBase");

    const validate =  inputVlidate(pentaP,pentaBase);

    if(validate){
        const result = 0.5 * pentaP * pentaBase;

        setvalue("penta-result",result);
    }
    else{
        alert("input will be a number")
        setvalue("penta-result",0);
        setDefaultInput("pentaP","pentaBase");
    }
}


function elliArea(){
    const elliA = getInputValue("elliA");
    const elliB = getInputValue("elliB");

    const validate = inputVlidate(elliA,elliB);

    if (validate){
        const result = 3.14 * elliA * elliB;
        const resultTwo = result.toFixed(2);

        setvalue("elli-result",resultTwo);
    }
    else{
        alert("input will be a number");
        setvalue("elli-result",0);
        setDefaultInput("elliA","elliB");
    }

    
}