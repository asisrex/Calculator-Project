function displayOutput(value){
    backSpace(value);
    document.getElementById("output").value = document.getElementById("output").value + value ;
}
var backSpaceArray = [];
function clearDisplay(){ 
    document.getElementById("output").value = '';
    document.getElementById("outputHistory").value = '';
    backSpaceArray.length=0;
}
function backSpace(value){   
    backSpaceArray.push(value);
    console.log(backSpaceArray);
}
function backSpaceButton(){
    console.log(backSpaceArray.splice((backSpaceArray.length-1),(backSpaceArray.length-1)));
    var backSpaceArrayString = backSpaceArray.join('');
    document.getElementById("output").value = backSpaceArrayString;
    console.log(backSpaceArrayString);
    }
function sqareRoot(){
    var sqrtV = Math.sqrt(document.getElementById("output").value);
    outputHistory();
    document.getElementById("output").value = sqrtV ;
}
function square(){ 
    var temp = document.getElementById("output").value;
    var sqrV = temp*temp;
    outputHistory();
    document.getElementById("output").value = sqrV;
}
function percentage(){
    var temp = document.getElementById("output").value;
    var per = temp/100;
    outputHistory();
    document.getElementById("output").value = per ;
}
function calculateResult(){
    // document.getElementById("output").value = 
    // document.getElementById("output").value +" "+"= " + eval(document.getElementById("output").value) ;
    outputHistory();
    document.getElementById("output").value = eval(document.getElementById("output").value);
    backSpaceArray.length=0;
    backSpaceArray[0] = document.getElementById("output").value;
}
function outputHistory(){
    document.getElementById("outputHistory").value = document.getElementById("output").value;
}