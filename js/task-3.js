
function getElementWidth (content = "0px", padding = "0px", border = "0px" ) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);
    let totalWidth = contentWidth + 2 * (paddingWidth + borderWidth);
    return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px"));     
console.log(getElementWidth("60px", "12px", "8.5px"));   
console.log(getElementWidth("200px", "0px", "0px"));     