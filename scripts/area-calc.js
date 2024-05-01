function triangleArea(){
    // get base 
    const basefield = getInputValue("tb");

    // get height
    const heightField  = getInputValue("th");

    const result = 0.5 * basefield * heightField;

    setvalue("tri-result",result);
};

function rectangleArea(){
    // get width 
    const rectwidth  = getInputValue("rectW");

    const rectlength = getInputValue("rectL");

    const result = rectwidth * rectlength;

    setvalue("rect-result",result);

}