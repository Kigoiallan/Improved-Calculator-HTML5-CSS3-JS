let display = document.getElementById("display") ;


function appendToDisplay(value){
    display.value += value;

}

function clearDisplay(){
    display.value = "";

}

function calculateResults(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }


}

